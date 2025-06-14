
export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logo: string;
  logoUrl?: string; // Add optional logo URL for actual team logos
  wins: number;
  losses: number;
  points: number;
  nrr: number;
  matches: number;
  group: string;
  finalPosition: number;
  auctionSpend: number;
  remainingPurse: number;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  role: string;
  runs: number;
  wickets: number;
  average: number;
  strikeRate: number;
  price: number;
  fours?: number;
  sixes?: number;
  isYoungest?: boolean;
  isExpensive?: boolean;
  mvpPoints?: number;
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  venue: string;
  date: string;
  winner: string;
  margin: string;
  team1Score: string;
  team2Score: string;
  stage: string;
  isHighScoring?: boolean;
}

export interface Award {
  id: string;
  title: string;
  winner: string;
  team: string;
  value: string | number;
  icon: string;
}

export interface AuctionData {
  player: string;
  team: string;
  price: number;
  isRecord?: boolean;
  age?: number;
}

export const teams: Team[] = [
  { 
    id: "pbks", 
    name: "Punjab Kings", 
    shortName: "PBKS", 
    color: "#DD1F2D", 
    logo: "👑", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Punjab-Kings-Logo.png",
    wins: 10, 
    losses: 4, 
    points: 20, 
    nrr: 0.85, 
    matches: 14, 
    group: "A", 
    finalPosition: 1,
    auctionSpend: 110.5,
    remainingPurse: 0.35
  },
  { 
    id: "rcb", 
    name: "Royal Challengers Bengaluru", 
    shortName: "RCB", 
    color: "#EC1C24", 
    logo: "🏆", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Royal-Challengers-Bangalore-Logo.png",
    wins: 9, 
    losses: 5, 
    points: 18, 
    nrr: 0.42, 
    matches: 14, 
    group: "A", 
    finalPosition: 2,
    auctionSpend: 85.0,
    remainingPurse: 0.75
  },
  { 
    id: "gt", 
    name: "Gujarat Titans", 
    shortName: "GT", 
    color: "#1B2951", 
    logo: "⚡", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2022/04/Gujarat-Titans-Logo.png",
    wins: 8, 
    losses: 6, 
    points: 16, 
    nrr: 0.65, 
    matches: 14, 
    group: "B", 
    finalPosition: 3,
    auctionSpend: 95.2,
    remainingPurse: 1.2
  },
  { 
    id: "mi", 
    name: "Mumbai Indians", 
    shortName: "MI", 
    color: "#004BA0", 
    logo: "🔵", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Mumbai-Indians-Logo.png",
    wins: 8, 
    losses: 6, 
    points: 16, 
    nrr: 0.38, 
    matches: 14, 
    group: "B", 
    finalPosition: 4,
    auctionSpend: 92.8,
    remainingPurse: 2.1
  },
  { 
    id: "csk", 
    name: "Chennai Super Kings", 
    shortName: "CSK", 
    color: "#FFFF00", 
    logo: "🦁", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Chennai-Super-Kings-Logo.png",
    wins: 7, 
    losses: 7, 
    points: 14, 
    nrr: 0.15, 
    matches: 14, 
    group: "A", 
    finalPosition: 5,
    auctionSpend: 88.5,
    remainingPurse: 1.8
  },
  { 
    id: "lsg", 
    name: "Lucknow Super Giants", 
    shortName: "LSG", 
    color: "#00A8CC", 
    logo: "🌟", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2022/04/Lucknow-Super-Giants-Logo.png",
    wins: 7, 
    losses: 7, 
    points: 14, 
    nrr: -0.12, 
    matches: 14, 
    group: "B", 
    finalPosition: 6,
    auctionSpend: 105.3,
    remainingPurse: 0.9
  },
  { 
    id: "kkr", 
    name: "Kolkata Knight Riders", 
    shortName: "KKR", 
    color: "#3A225D", 
    logo: "⚫", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Kolkata-Knight-Riders-Logo.png",
    wins: 6, 
    losses: 8, 
    points: 12, 
    nrr: -0.23, 
    matches: 14, 
    group: "A", 
    finalPosition: 7,
    auctionSpend: 87.2,
    remainingPurse: 3.5
  },
  { 
    id: "dc", 
    name: "Delhi Capitals", 
    shortName: "DC", 
    color: "#17479E", 
    logo: "🔷", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Delhi-Capitals-Logo.png",
    wins: 6, 
    losses: 8, 
    points: 12, 
    nrr: -0.45, 
    matches: 14, 
    group: "B", 
    finalPosition: 8,
    auctionSpend: 79.8,
    remainingPurse: 4.2
  },
  { 
    id: "rr", 
    name: "Rajasthan Royals", 
    shortName: "RR", 
    color: "#EA1A85", 
    logo: "👑", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Rajasthan-Royals-Logo.png",
    wins: 5, 
    losses: 9, 
    points: 10, 
    nrr: -0.65, 
    matches: 14, 
    group: "A", 
    finalPosition: 9,
    auctionSpend: 82.1,
    remainingPurse: 2.8
  },
  { 
    id: "srh", 
    name: "Sunrisers Hyderabad", 
    shortName: "SRH", 
    color: "#FF822A", 
    logo: "🧡", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Sunrisers-Hyderabad-Logo.png",
    wins: 4, 
    losses: 10, 
    points: 8, 
    nrr: -0.89, 
    matches: 14, 
    group: "B", 
    finalPosition: 10,
    auctionSpend: 76.5,
    remainingPurse: 5.1
  },
];

export const topPlayers: Player[] = [
  { 
    id: "1", 
    name: "Sai Sudharsan", 
    team: "GT", 
    role: "Batsman", 
    runs: 759, 
    wickets: 0, 
    average: 54.21, 
    strikeRate: 156.17, 
    price: 8.5,
    fours: 88,
    sixes: 21,
    mvpPoints: 311.0
  },
  { 
    id: "2", 
    name: "Suryakumar Yadav", 
    team: "MI", 
    role: "Batsman", 
    runs: 717, 
    wickets: 0, 
    average: 65.18, 
    strikeRate: 167.92, 
    price: 16.35,
    fours: 69,
    sixes: 38,
    mvpPoints: 320.5
  },
  { 
    id: "3", 
    name: "Virat Kohli", 
    team: "RCB", 
    role: "Batsman", 
    runs: 657, 
    wickets: 0, 
    average: 54.75, 
    strikeRate: 144.71, 
    price: 21.0,
    fours: 66,
    sixes: 19
  },
  { 
    id: "4", 
    name: "Shubman Gill", 
    team: "GT", 
    role: "Batsman", 
    runs: 650, 
    wickets: 0, 
    average: 50.00, 
    strikeRate: 155.88, 
    price: 15.5,
    fours: 62,
    sixes: 24
  },
  { 
    id: "5", 
    name: "Mitchell Marsh", 
    team: "LSG", 
    role: "All-rounder", 
    runs: 627, 
    wickets: 8, 
    average: 48.23, 
    strikeRate: 163.71, 
    price: 12.0,
    fours: 56,
    sixes: 37
  },
  { 
    id: "6", 
    name: "Prasidh Krishna", 
    team: "GT", 
    role: "Bowler", 
    runs: 45, 
    wickets: 25, 
    average: 18.5, 
    strikeRate: 95.2, 
    price: 9.5
  },
  { 
    id: "7", 
    name: "Noor Ahmad", 
    team: "CSK", 
    role: "Bowler", 
    runs: 23, 
    wickets: 24, 
    average: 19.8, 
    strikeRate: 89.5, 
    price: 7.2
  },
  { 
    id: "8", 
    name: "Josh Hazlewood", 
    team: "RCB", 
    role: "Bowler", 
    runs: 12, 
    wickets: 22, 
    average: 20.1, 
    strikeRate: 92.1, 
    price: 10.75
  },
  { 
    id: "9", 
    name: "Trent Boult", 
    team: "MI", 
    role: "Bowler", 
    runs: 8, 
    wickets: 22, 
    average: 19.5, 
    strikeRate: 88.9, 
    price: 12.2
  },
  { 
    id: "10", 
    name: "Arshdeep Singh", 
    team: "PBKS", 
    role: "Bowler", 
    runs: 15, 
    wickets: 21, 
    average: 21.2, 
    strikeRate: 91.5, 
    price: 8.0
  },
  { 
    id: "11", 
    name: "Rishabh Pant", 
    team: "LSG", 
    role: "Wicket-keeper", 
    runs: 485, 
    wickets: 0, 
    average: 42.6, 
    strikeRate: 148.2, 
    price: 27.0,
    isExpensive: true,
    fours: 45,
    sixes: 28
  },
  { 
    id: "12", 
    name: "Vaibhav Suryavanshi", 
    team: "RR", 
    role: "Batsman", 
    runs: 156, 
    wickets: 0, 
    average: 26.0, 
    strikeRate: 198.7, 
    price: 1.1,
    isYoungest: true,
    fours: 18,
    sixes: 12
  },
];

export const recentMatches: Match[] = [
  { 
    id: "final", 
    team1: "RCB", 
    team2: "PBKS", 
    venue: "Narendra Modi Stadium, Ahmedabad", 
    date: "2025-06-03", 
    winner: "RCB", 
    margin: "6 runs", 
    team1Score: "190/9", 
    team2Score: "184/7", 
    stage: "Final"
  },
  { 
    id: "qualifier2", 
    team1: "PBKS", 
    team2: "MI", 
    venue: "Narendra Modi Stadium, Ahmedabad", 
    date: "2025-06-01", 
    winner: "PBKS", 
    margin: "4 runs", 
    team1Score: "207/5", 
    team2Score: "203/6", 
    stage: "Qualifier 2",
    isHighScoring: true
  },
  { 
    id: "eliminator", 
    team1: "GT", 
    team2: "MI", 
    venue: "Mullanpur", 
    date: "2025-05-30", 
    winner: "MI", 
    margin: "20 runs", 
    team1Score: "208/6", 
    team2Score: "228/5", 
    stage: "Eliminator",
    isHighScoring: true
  },
  { 
    id: "qualifier1", 
    team1: "PBKS", 
    team2: "RCB", 
    venue: "Mullanpur", 
    date: "2025-05-29", 
    winner: "RCB", 
    margin: "5 runs", 
    team1Score: "101", 
    team2Score: "106/2", 
    stage: "Qualifier 1"
  },
  { 
    id: "highscore1", 
    team1: "MI", 
    team2: "RR", 
    venue: "Wankhede Stadium", 
    date: "2025-05-15", 
    winner: "MI", 
    margin: "100 runs", 
    team1Score: "217/2", 
    team2Score: "117", 
    stage: "League",
    isHighScoring: true
  },
];

export const venues = [
  { name: "Narendra Modi Stadium", city: "Ahmedabad", matches: 8, avgScore: 185 },
  { name: "Wankhede Stadium", city: "Mumbai", matches: 7, avgScore: 195 },
  { name: "M. Chinnaswamy Stadium", city: "Bangalore", matches: 6, avgScore: 192 },
  { name: "Eden Gardens", city: "Kolkata", matches: 6, avgScore: 178 },
  { name: "Mullanpur Stadium", city: "Mullanpur", matches: 5, avgScore: 165 },
  { name: "Rajiv Gandhi Intl Stadium", city: "Hyderabad", matches: 5, avgScore: 155 },
];

export const awards: Award[] = [
  { id: "orange", title: "Orange Cap (Most Runs)", winner: "Sai Sudharsan", team: "GT", value: 759, icon: "🧡" },
  { id: "purple", title: "Purple Cap (Most Wickets)", winner: "Prasidh Krishna", team: "GT", value: 25, icon: "💜" },
  { id: "mvp", title: "Most Valuable Player", winner: "Suryakumar Yadav", team: "MI", value: "320.5 pts", icon: "👑" },
  { id: "emerging", title: "Emerging Player", winner: "Sai Sudharsan", team: "GT", value: "759 runs", icon: "⭐" },
  { id: "striker", title: "Striker of the Season", winner: "Vaibhav Suryavanshi", team: "RR", value: "198.7 SR", icon: "⚡" },
  { id: "sixes", title: "Most Sixes", winner: "Nicholas Pooran", team: "LSG", value: 42, icon: "🚀" },
  { id: "champion", title: "IPL 2025 Champions", winner: "Royal Challengers Bengaluru", team: "RCB", value: "₹20 crore", icon: "🏆" },
];

export const auctionHighlights: AuctionData[] = [
  { player: "Rishabh Pant", team: "LSG", price: 27.0, isRecord: true },
  { player: "Shreyas Iyer", team: "PBKS", price: 26.75, isRecord: true },
  { player: "Venkatesh Iyer", team: "KKR", price: 23.75 },
  { player: "Arshdeep Singh", team: "PBKS", price: 18.0 },
  { player: "Yuzvendra Chahal", team: "PBKS", price: 18.0 },
  { player: "Jos Buttler", team: "GT", price: 15.75 },
  { player: "Kagiso Rabada", team: "GT", price: 10.75 },
  { player: "Vaibhav Suryavanshi", team: "RR", price: 1.1, age: 13 },
];

