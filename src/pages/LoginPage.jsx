import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth } from '@/firebase';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [showReset, setShowReset] = useState(false);
  const db = getFirestore();

  const ensureUserDocument = async (user) => {
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      role: 'student', // default role
      enrolledCourses: [],
    });
    return 'student';
  } else {
    const data = userSnap.data();
    return data.role || 'student';
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  setLoading(true);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const role = await ensureUserDocument(userCredential.user);

    toast({ title: "Login Successful" });
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  } catch (error) {
    toast({
      title: "Login Failed",
      description: error.message,
      variant: "destructive"
    });
  } finally {
    setLoading(false);
  }
};

const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const role = await ensureUserDocument(user);

    toast({ title: "Google Login Successful" });
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  } catch (error) {
    toast({
      title: "Google Login Failed",
      description: error.message,
      variant: "destructive"
    });
  }
};


  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Student Login</CardTitle>
            <CardDescription>Access your dashboard securely</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
                <p
                  className="text-sm mt-1 text-blue-600 cursor-pointer underline"
                  onClick={() => setShowReset(true)}
                >
                  Forgot your password?
                </p>
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                <LogIn className="mr-2 h-4 w-4" /> {loading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="my-4 text-center">OR</div>

            <Button variant="outline" onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google" className="w-5 h-5" />
              Continue with Google
            </Button>

            {showReset && (
              <div className="mt-6 space-y-3">
                <Label htmlFor="resetEmail">Reset Password Email</Label>
                <Input
                  id="resetEmail"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
                <Button onClick={handlePasswordReset} className="w-full">Send Reset Link</Button>
              </div>
            )}

            <p className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-600 underline">Sign Up</Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
