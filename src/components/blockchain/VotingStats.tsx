
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Check } from 'lucide-react';

interface VotingStatsProps {
  registeredVoters: number;
  votesRecorded: number;
  blocksVerified: number;
}

const VotingStats: React.FC<VotingStatsProps> = ({
  registeredVoters,
  votesRecorded,
  blocksVerified
}) => {
  const stats = [
    {
      title: "Registered Voters",
      value: registeredVoters,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Votes Recorded",
      value: votesRecorded,
      icon: Check,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Blocks Verified",
      value: blocksVerified,
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <div className={`p-1.5 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VotingStats;
