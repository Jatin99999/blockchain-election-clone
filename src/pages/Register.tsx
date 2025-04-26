
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Register = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <MainLayout>
      <div className="container px-4 py-12 flex items-center justify-center min-h-[75vh]">
        <div className="w-full max-w-md">
          <Card className="border-voting-border">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-full bg-blue-100">
                  <Shield className="h-6 w-6 text-voting-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center">Register as Voter</CardTitle>
              <CardDescription className="text-center">
                Create an account to participate in blockchain voting
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idNumber">National ID Number</Label>
                  <Input id="idNumber" />
                  <p className="text-xs text-muted-foreground">Used for identity verification only</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button type="submit" className="w-full">Register</Button>
                <div className="text-sm text-center text-voting-muted pt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-voting-primary hover:underline">
                    Log in
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
