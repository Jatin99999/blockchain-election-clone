
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">About BSE Blockchain Voting</h1>
          
          <div className="space-y-6">
            <p className="text-lg">
              The BSE Blockchain Voting System is a cutting-edge platform designed to bring transparency, 
              security, and accessibility to the electoral process. Our system leverages blockchain 
              technology to create an immutable record of votes, ensuring that once cast, votes cannot 
              be altered, deleted, or compromised.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to modernize voting systems and restore trust in democratic processes 
              through technological innovation. We believe that by making voting more secure and 
              transparent, we can increase participation and confidence in elections at all levels.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How Blockchain Voting Works</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ol className="space-y-4 list-decimal list-inside">
                <li className="font-medium">
                  <span>Voter Registration</span>
                  <p className="ml-6 font-normal text-voting-muted mt-1">
                    Users register with verified identification and receive unique cryptographic credentials.
                  </p>
                </li>
                <li className="font-medium">
                  <span>Secure Authentication</span>
                  <p className="ml-6 font-normal text-voting-muted mt-1">
                    Voters authenticate using multi-factor authentication to ensure their identity.
                  </p>
                </li>
                <li className="font-medium">
                  <span>Vote Casting</span>
                  <p className="ml-6 font-normal text-voting-muted mt-1">
                    Each vote is encrypted and signed with the voter's private key.
                  </p>
                </li>
                <li className="font-medium">
                  <span>Blockchain Recording</span>
                  <p className="ml-6 font-normal text-voting-muted mt-1">
                    Votes are recorded as transactions on the blockchain and cannot be altered.
                  </p>
                </li>
                <li className="font-medium">
                  <span>Vote Verification</span>
                  <p className="ml-6 font-normal text-voting-muted mt-1">
                    Voters can verify their vote was counted correctly while maintaining anonymity.
                  </p>
                </li>
                <li className="font-medium">
                  <span>Results Tabulation</span>
                  <p className="ml-6 font-normal text-voting-muted mt-1">
                    Votes are tallied transparently while preserving the privacy of individual voters.
                  </p>
                </li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits of Blockchain Voting</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-white p-4 rounded-lg border border-voting-border">
                <div className="font-medium">Immutable Record</div>
                <p className="text-sm text-voting-muted">Once recorded, votes cannot be changed or deleted</p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-voting-border">
                <div className="font-medium">Enhanced Security</div>
                <p className="text-sm text-voting-muted">Cryptographic techniques protect against tampering</p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-voting-border">
                <div className="font-medium">Transparency</div>
                <p className="text-sm text-voting-muted">Public verification while maintaining privacy</p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-voting-border">
                <div className="font-medium">Cost Efficiency</div>
                <p className="text-sm text-voting-muted">Reduced operational costs compared to traditional voting</p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-voting-border">
                <div className="font-medium">Accessibility</div>
                <p className="text-sm text-voting-muted">Easier access for voters including remote voting options</p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-voting-border">
                <div className="font-medium">Real-time Results</div>
                <p className="text-sm text-voting-muted">Faster tabulation with enhanced accuracy</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
