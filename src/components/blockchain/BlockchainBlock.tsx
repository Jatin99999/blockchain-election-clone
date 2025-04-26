
import React from 'react';
import { Shield, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlockchainBlockProps {
  hash: string;
  timestamp: string;
  previousHash: string;
  data: {
    electionId: string;
    candidateId: string;
    voterId: string;
  };
  className?: string;
}

const BlockchainBlock: React.FC<BlockchainBlockProps> = ({
  hash,
  timestamp,
  previousHash,
  data,
  className
}) => {
  return (
    <div className={cn("blockchain-block p-4", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="blockchain-icon">
          <Shield className="h-4 w-4" />
        </div>
        <div className="verify-badge">
          <Check className="h-3 w-3" />
          <span>Verified</span>
        </div>
      </div>
      
      <div className="space-y-2 font-mono text-xs">
        <div>
          <div className="text-voting-muted">HASH</div>
          <div className="truncate font-medium">{hash}</div>
        </div>
        <div>
          <div className="text-voting-muted">PREV</div>
          <div className="truncate font-medium">{previousHash.substring(0, 16)}...</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-voting-muted">TIME</div>
            <div>{timestamp}</div>
          </div>
          <div>
            <div className="text-voting-muted">VOTE</div>
            <div>{data.candidateId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainBlock;
