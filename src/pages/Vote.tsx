
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CandidateCard from '@/components/blockchain/CandidateCard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Shield } from 'lucide-react';
import { getElections, registerVote } from '@/services/blockchain';
import { useToast } from '@/hooks/use-toast';

const Vote = () => {
  const [election, setElection] = useState(getElections()[0]);
  const [votedCandidateId, setVotedCandidateId] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const { toast } = useToast();
  
  const handleVote = (candidateId: string) => {
    if (isVoting || votedCandidateId) return;
    
    setIsVoting(true);
    
    // Simulate blockchain mining delay
    setTimeout(() => {
      try {
        // In a real app, would get the actual user ID
        const block = registerVote(election.id, candidateId, "user-123");
        setVotedCandidateId(candidateId);
        
        toast({
          title: "Vote recorded successfully!",
          description: `Your vote was recorded in block #${block.index} with hash: ${block.hash.substring(0, 10)}...`,
        });
      } catch (error) {
        toast({
          title: "Error recording vote",
          description: "There was an issue recording your vote. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsVoting(false);
      }
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 border-b border-voting-border pb-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{election.title}</h1>
              <p className="text-voting-muted">{election.description}</p>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {election.status === 'active' ? 'Voting Open' : election.status === 'upcoming' ? 'Upcoming' : 'Completed'}
            </div>
          </div>
          
          {votedCandidateId && (
            <Alert className="mb-6 bg-green-50 border-green-200">
              <Shield className="h-4 w-4" />
              <AlertTitle>Vote recorded on blockchain!</AlertTitle>
              <AlertDescription>
                Thank you for participating. Your vote has been securely recorded and cannot be altered.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {election.candidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                id={candidate.id}
                name={candidate.name}
                position={candidate.position}
                votes={candidate.votes}
                imageUrl={candidate.imageUrl}
                onVote={handleVote}
                isVoted={votedCandidateId === candidate.id}
              />
            ))}
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-voting-primary mb-2">About this Election</h3>
            <div className="text-sm text-voting-muted">
              <p>Election Period: {new Date(election.startDate).toLocaleDateString()} - {new Date(election.endDate).toLocaleDateString()}</p>
              <p className="mt-2">
                This election uses blockchain technology to ensure vote integrity. Each vote is encrypted and recorded 
                in a tamper-proof blockchain ledger. You can verify your vote in the results page once it has been processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Vote;
