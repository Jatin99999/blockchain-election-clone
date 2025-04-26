
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from 'lucide-react';

interface CandidateCardProps {
  id: string;
  name: string;
  position: string;
  votes: number;
  imageUrl?: string;
  onVote: (id: string) => void;
  isVoted?: boolean;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  id,
  name,
  position,
  votes,
  imageUrl,
  onVote,
  isVoted = false
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="bg-voting-primary/5 h-24 flex items-center justify-center">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="h-16 w-16 rounded-full object-cover border-2 border-white"
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-8 w-8 text-gray-400" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-voting-muted text-sm">{position}</p>
        <div className="mt-2">
          <Badge variant="outline" className="bg-blue-50">
            {votes} {votes === 1 ? 'Vote' : 'Votes'}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onVote(id)} 
          disabled={isVoted}
          variant={isVoted ? "outline" : "default"}
          className="w-full"
        >
          {isVoted ? "Vote Recorded" : "Vote"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;
