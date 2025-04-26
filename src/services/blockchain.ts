
// Simple mock blockchain implementation for demo purposes

// Types
export interface Block {
  index: number;
  timestamp: string;
  data: VoteData;
  previousHash: string;
  hash: string;
  nonce: number;
}

export interface VoteData {
  electionId: string;
  candidateId: string;
  voterId: string;
}

export interface Candidate {
  id: string;
  name: string;
  position: string;
  votes: number;
  imageUrl?: string;
}

export interface Election {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  candidates: Candidate[];
  status: 'upcoming' | 'active' | 'completed';
}

// Mock data
const mockCandidates: Candidate[] = [
  {
    id: "c1",
    name: "Alex Johnson",
    position: "Chair Person",
    votes: 24,
    imageUrl: ""
  },
  {
    id: "c2",
    name: "Sarah Williams",
    position: "Vice Chair",
    votes: 18,
    imageUrl: ""
  },
  {
    id: "c3",
    name: "Michael Brown",
    position: "Secretary",
    votes: 31,
    imageUrl: ""
  },
  {
    id: "c4",
    name: "Emma Davis",
    position: "Treasurer",
    votes: 15,
    imageUrl: ""
  }
];

const mockElections: Election[] = [
  {
    id: "e1",
    title: "BSE Annual Executive Committee 2025",
    description: "Vote for the executive committee for the 2025 term",
    startDate: "2025-03-01",
    endDate: "2025-03-10",
    candidates: mockCandidates,
    status: "active"
  }
];

// Initialize blockchain with genesis block
const genesisBlock: Block = {
  index: 0,
  timestamp: new Date().toISOString(),
  data: {
    electionId: "genesis",
    candidateId: "genesis",
    voterId: "genesis"
  },
  previousHash: "0",
  hash: "0000genesis",
  nonce: 0
};

let blockchain: Block[] = [genesisBlock];
let pendingVotes: VoteData[] = [];

// Simple hash function (in a real blockchain this would be a cryptographic hash function)
const calculateHash = (index: number, previousHash: string, timestamp: string, data: VoteData, nonce: number): string => {
  const dataString = `${index}${previousHash}${timestamp}${JSON.stringify(data)}${nonce}`;
  // Simple hash for demo - not secure!
  let hash = 0;
  for (let i = 0; i < dataString.length; i++) {
    const char = dataString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Convert to hex string and ensure it's positive
  return Math.abs(hash).toString(16).padStart(8, '0');
};

// Simple proof of work - find a hash with 4 zeros at the beginning
const mineBlock = (block: Omit<Block, 'hash' | 'nonce'>): Block => {
  let nonce = 0;
  let hash = '';
  
  // In a real blockchain, this would be much more difficult
  while (!hash.startsWith('0000')) {
    nonce++;
    hash = calculateHash(block.index, block.previousHash, block.timestamp, block.data, nonce);
    
    // Avoid infinite loops in demo
    if (nonce > 10000) {
      hash = '0000' + hash.substring(4); // Force a valid hash for demo
      break;
    }
  }
  
  return {
    ...block,
    hash,
    nonce
  };
};

// Create a new block
const createBlock = (data: VoteData): Block => {
  const previousBlock = blockchain[blockchain.length - 1];
  const newBlock = {
    index: previousBlock.index + 1,
    timestamp: new Date().toISOString(),
    data,
    previousHash: previousBlock.hash
  };
  
  return mineBlock(newBlock);
};

// Add a block to the blockchain
const addBlock = (data: VoteData): Block => {
  const newBlock = createBlock(data);
  blockchain.push(newBlock);
  return newBlock;
};

// Get blockchain
export const getBlockchain = (): Block[] => {
  return [...blockchain];
};

// Get a specific election
export const getElection = (id: string): Election | undefined => {
  return mockElections.find(election => election.id === id);
};

// Get all elections
export const getElections = (): Election[] => {
  return [...mockElections];
};

// Register a vote
export const registerVote = (electionId: string, candidateId: string, voterId: string): Block => {
  const voteData: VoteData = {
    electionId,
    candidateId,
    voterId
  };
  
  // In a real blockchain voting system, we would verify the voter's eligibility here
  
  // Update candidate vote count
  const election = mockElections.find(e => e.id === electionId);
  if (election) {
    const candidate = election.candidates.find(c => c.id === candidateId);
    if (candidate) {
      candidate.votes++;
    }
  }
  
  // Add the vote to the blockchain
  const newBlock = addBlock(voteData);
  
  return newBlock;
};

// Get voting statistics
export const getVotingStats = () => {
  return {
    registeredVoters: 128,
    votesRecorded: blockchain.length - 1, // Subtract genesis block
    blocksVerified: blockchain.length
  };
};

// Verify the blockchain
export const verifyBlockchain = (): boolean => {
  for (let i = 1; i < blockchain.length; i++) {
    const currentBlock = blockchain[i];
    const previousBlock = blockchain[i - 1];
    
    // Verify the hash
    const recalculatedHash = calculateHash(
      currentBlock.index,
      currentBlock.previousHash,
      currentBlock.timestamp,
      currentBlock.data,
      currentBlock.nonce
    );
    
    if (currentBlock.hash !== recalculatedHash) {
      return false;
    }
    
    // Verify the link to the previous block
    if (currentBlock.previousHash !== previousBlock.hash) {
      return false;
    }
  }
  
  return true;
};
