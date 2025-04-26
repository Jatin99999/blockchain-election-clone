
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BlockchainBlock from '@/components/blockchain/BlockchainBlock';
import VotingStats from '@/components/blockchain/VotingStats';
import { getBlockchain, getElections, getVotingStats } from '@/services/blockchain';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCheck } from 'lucide-react';

const Results = () => {
  const blockchain = getBlockchain();
  const election = getElections()[0];
  const stats = getVotingStats();
  
  const totalVotes = election.candidates.reduce((sum, c) => sum + c.votes, 0);
  
  const getVotePercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return (votes / totalVotes) * 100;
  };

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Election Results</h1>
              <p className="text-voting-muted">{election.title}</p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium">
              <CheckCheck className="h-4 w-4" />
              <span>Blockchain Verified</span>
            </div>
          </div>

          {/* Voting Statistics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Election Statistics</h2>
            <VotingStats
              registeredVoters={stats.registeredVoters}
              votesRecorded={stats.votesRecorded}
              blocksVerified={stats.blocksVerified}
            />
          </div>

          <Tabs defaultValue="results" className="space-y-4">
            <TabsList>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain Explorer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle>Current Vote Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {election.candidates.map((candidate) => (
                      <div key={candidate.id} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{candidate.name}</span>
                          <span className="text-voting-muted">
                            {candidate.votes} votes ({getVotePercentage(candidate.votes).toFixed(1)}%)
                          </span>
                        </div>
                        <Progress value={getVotePercentage(candidate.votes)} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="blockchain">
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain Ledger</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-voting-muted mb-4">
                    Every vote is recorded as a block in our immutable blockchain. Explore the blocks below.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {blockchain.slice(1).reverse().map((block) => (
                      <BlockchainBlock
                        key={block.hash}
                        hash={block.hash}
                        previousHash={block.previousHash}
                        timestamp={new Date(block.timestamp).toLocaleString()}
                        data={block.data}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Results;
