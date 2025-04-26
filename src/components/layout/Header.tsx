
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-voting-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-voting-primary" />
          <span className="font-semibold text-lg">BSE Blockchain Voting</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-voting-primary">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:text-voting-primary">About</Link>
          <Link to="/vote" className="text-sm font-medium hover:text-voting-primary">Vote</Link>
          <Link to="/results" className="text-sm font-medium hover:text-voting-primary">Results</Link>
          <Link to="/admin" className="text-sm font-medium hover:text-voting-primary">Admin</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="inline-flex">
            <Link to="/register">Register</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
