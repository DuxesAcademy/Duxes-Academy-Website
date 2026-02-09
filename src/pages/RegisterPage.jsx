import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '@/firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const provider = new GoogleAuthProvider();

const RegisterPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create Firestore document for the user
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        enrolledCourses: [],
      });

      toast({
        title: "🎉 Account Created",
        description: "Your account has been successfully created. You may now proceed to the homepage or login.",
      });
    } catch (error) {
      let message = "Something went wrong while creating your account.";

      if (error.code === 'auth/email-already-in-use') {
        message = "The email address is already associated with an existing account.";
      } else if (error.code === 'auth/weak-password') {
        message = "Please choose a stronger password. It must be at least 6 characters long.";
      } else if (error.code === 'auth/network-request-failed') {
        message = "Network error. Please check your internet connection and try again.";
      }

      toast({
        title: "Registration Failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        // Create or update Firestore user doc
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          enrolledCourses: [],
        }, { merge: true });

        toast({
          title: "✅ Signed in Successfully",
          description: "You're now signed in with your Google account. You may proceed to the homepage.",
        });
      } else {
        toast({
          title: "Google Sign-In Issue",
          description: "We couldn't retrieve your Google account info. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      let message = "An error occurred while signing in with Google.";
      if (error.code === 'auth/popup-closed-by-user') {
        message = "You closed the Google sign-in popup. Please try again to complete the sign-in.";
      } else if (error.code === 'auth/network-request-failed') {
        message = "Network error during Google sign-in. Please check your connection.";
      }

      toast({
        title: "Google Sign-In Failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Create an Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Creating..." : "Register"}
              </Button>
            </form>

            <div className="my-4 flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">OR</span>
            </div>

            <Button
              variant="outline"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                alt="Google G Logo"
                className="w-5 h-5"
              />
              Continue with Google
            </Button>

            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              You can go to the <Link to="/" className="underline">Home Page</Link> after registration.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
