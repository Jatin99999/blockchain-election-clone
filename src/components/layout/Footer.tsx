
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-voting-border mt-auto">
      <div className="container px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-voting-primary" />
            <span className="font-medium">BSE Blockchain Voting</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs md:text-sm text-gray-500 hover:text-voting-primary">Privacy</Link>
            <Link to="/terms" className="text-xs md:text-sm text-gray-500 hover:text-voting-primary">Terms</Link>
            <Link to="/contact" className="text-xs md:text-sm text-gray-500 hover:text-voting-primary">Contact</Link>
          </nav>
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} BSE Blockchain Voting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
