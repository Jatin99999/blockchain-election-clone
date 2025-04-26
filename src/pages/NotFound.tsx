
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-voting-primary">404</h1>
          <p className="text-xl text-voting-muted">Oops! Page not found</p>
          <p className="max-w-md mx-auto text-voting-muted">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
