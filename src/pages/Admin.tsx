
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield } from "lucide-react";

const Admin = () => {
  // In a real app, this would check for admin privileges
  const isAdmin = true;

  if (!isAdmin) {
    return (
      <MainLayout>
        <div className="container px-4 py-12">
          <Alert variant="destructive">
            <Shield className="h-4 w-4" />
            <AlertTitle>Access Denied</AlertTitle>
            <AlertDescription>
              You don't have permission to access the admin portal.
            </AlertDescription>
          </Alert>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <AdminDashboard />
    </MainLayout>
  );
};

export default Admin;
