
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// NOTE: This is a FRONTEND-ONLY placeholder for the Admin Panel access.
// Real admin functionality requires a secure backend and authentication.

const AdminPage = () => {
  const { toast } = useToast();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    // **Placeholder Admin Login Logic**
    // In a real app, verify admin credentials against a secure backend.
    console.log('Attempting admin login (placeholder)...');
    toast({
      title: "Admin Access Granted (Placeholder)",
      description: "Redirecting to the admin dashboard...",
      variant: "default",
    });
    // Redirect to an admin dashboard page (create AdminDashboardPage.jsx later)
    // navigate('/admin/dashboard'); // Requires useNavigate hook
    alert("Admin login successful (placeholder)! You would be redirected to the admin dashboard.");
    event.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12 fade-in bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Card className="w-full max-w-md mx-auto shadow-2xl border-primary/20">
          <CardHeader className="text-center bg-secondary/50 dark:bg-secondary/20 p-6 rounded-t-lg">
             <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-3"/>
            <CardTitle className="text-2xl font-bold">Admin Panel Access</CardTitle>
            <CardDescription>Restricted area. Authorized personnel only.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleAdminLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="admin-username">Admin Username</Label>
                <Input id="admin-username" type="text" placeholder="admin_user" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input id="admin-password" type="password" placeholder="••••••••" required />
              </div>
              {/* Optional: Add 2FA input if needed */}
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-slate-700 hover:from-primary/90 hover:to-slate-600 text-white">
                Secure Login
              </Button>
            </form>
             <p className="mt-6 text-center text-xs text-muted-foreground">
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                    <Link to="/login">Back to Student Login</Link>
                </Button>
             </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminPage;
  