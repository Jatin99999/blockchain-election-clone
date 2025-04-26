
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Shield, CheckCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      title: 'Secure Voting',
      description: 'Each vote is encrypted and stored in an immutable blockchain ledger, ensuring your vote is counted and cannot be altered.',
      icon: Shield
    },
    {
      title: 'Transparent Process',
      description: 'All votes are publicly verifiable while maintaining voter anonymity, providing full transparency in the election process.',
      icon: CheckCheck
    },
    {
      title: 'Tamper-Proof',
      description: 'The blockchain architecture makes it practically impossible to manipulate votes once they have been recorded.',
      icon: Lock
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-voting-primary mb-4">
                Secure • Transparent • Immutable
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                BSE Blockchain Voting System
              </h1>
              <p className="text-xl text-voting-muted">
                A secure and transparent voting platform powered by blockchain technology for fair and tamper-proof elections.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:justify-start justify-center">
                <Button asChild size="lg">
                  <Link to="/vote">Cast Your Vote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/register">Register as Voter</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center animate-fade-in-up">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-glow"></div>
                <div className="absolute top-0 -right-4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-glow animation-delay-2000"></div>
                <div className="relative">
                  <div className="blockchain-block p-6 aspect-square max-w-xs mx-auto">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                        <Shield className="h-8 w-8 text-voting-primary" />
                      </div>
                      <h3 className="mt-4 font-bold text-lg">Blockchain Secured</h3>
                    </div>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-voting-muted">HASH</span>
                        <div className="truncate font-medium">0x8f9d2a37...</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-voting-muted">PREV</span>
                        <div className="truncate font-medium">0x6e1f8b21...</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-voting-muted">DATA</span>
                        <div className="truncate font-medium">{`{vote: "encrypted"}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Blockchain Voting</h2>
            <p className="text-voting-muted mt-2">
              Our platform offers numerous advantages over traditional voting systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="blockchain-block p-6 hover:translate-y-[-5px]">
                <div className="blockchain-icon mb-4">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-voting-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-voting-primary text-white py-16">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to experience secure voting?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of voters who trust our blockchain technology for transparent and tamper-proof elections.
          </p>
          <Button asChild variant="secondary" size="lg" className="bg-white text-voting-primary hover:bg-blue-50">
            <Link to="/register">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
