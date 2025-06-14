
export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logo: string;
  wins: number;
  losses: number;
  points: number;
  nrr: number;
  matches: number;
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
}

export const teams: Team[] = [
  { id: "csk", name: "Chennai Super Kings", shortName: "CSK", color: "#FFFF00", logo: "🦁", wins: 8, losses: 4, points: 16, nrr: 0.65, matches: 12 },
  { id: "mi", name: "Mumbai Indians", shortName: "MI", color: "#004BA0", logo: "🔵", wins: 7, losses: 5, points: 14, nrr: 0.42, matches: 12 },
  { id: "rcb", name: "Royal Challengers Bangalore", shortName: "RCB", color: "#EC1C24", logo: "🔴", wins: 7, losses: 5, points: 14, nrr: 0.15, matches: 12 },
  { id: "kkr", name: "Kolkata Knight Riders", shortName: "KKR", color: "#3A225D", logo: "⚫", wins: 6, losses: 6, points: 12, nrr: -0.23, matches: 12 },
  { id: "dc", name: "Delhi Capitals", shortName: "DC", color: "#17479E", logo: "🔷", wins: 6, losses: 6, points: 12, nrr: -0.15, matches: 12 },
  { id: "rr", name: "Rajasthan Royals", shortName: "RR", color: "#EA1A85", logo: "👑", wins: 5, losses: 7, points: 10, nrr: -0.34, matches: 12 },
  { id: "pbks", name: "Punjab Kings", shortName: "PBKS", color: "#DD1F2D", logo: "🦅", wins: 5, losses: 7, points: 10, nrr: -0.42, matches: 12 },
  { id: "srh", name: "Sunrisers Hyderabad", shortName: "SRH", color: "#FF822A", logo: "🧡", wins: 4, losses: 8, points: 8, nrr: -0.65, matches: 12 },
  { id: "gt", name: "Gujarat Titans", shortName: "GT", color: "#1B2951", logo: "⚡", wins: 8, losses: 4, points: 16, nrr: 0.78, matches: 12 },
  { id: "lsg", name: "Lucknow Super Giants", shortName: "LSG", color: "#00A8CC", logo: "🔵", wins: 6, losses: 6, points: 12, nrr: 0.12, matches: 12 },
];

export const topPlayers: Player[] = [
  { id: "1", name: "Virat Kohli", team: "RCB", role: "Batsman", runs: 542, wickets: 0, average: 42.46, strikeRate: 138.5, price: 15 },
  { id: "2", name: "Shubman Gill", team: "GT", role: "Batsman", runs: 528, wickets: 0, average: 44.0, strikeRate: 147.2, price: 8 },
  { id: "3", name: "Faf du Plessis", team: "RCB", role: "Batsman", runs: 468, wickets: 0, average: 36.0, strikeRate: 142.1, price: 7 },
  { id: "4", name: "Rashid Khan", team: "GT", role: "Bowler", runs: 156, wickets: 27, average: 12.8, strikeRate: 115.2, price: 15 },
  { id: "5", name: "Mohammed Shami", team: "GT", role: "Bowler", runs: 45, wickets: 28, average: 16.2, strikeRate: 98.5, price: 6.25 },
  { id: "6", name: "Jos Buttler", team: "RR", role: "Wicket-keeper", runs: 491, wickets: 0, average: 35.07, strikeRate: 149.4, price: 10 },
  { id: "7", name: "KL Rahul", team: "LSG", role: "Wicket-keeper", runs: 451, wickets: 0, average: 37.58, strikeRate: 135.8, price: 17 },
  { id: "8", name: "Yuzvendra Chahal", team: "RR", role: "Bowler", runs: 23, wickets: 24, average: 22.5, strikeRate: 89.2, price: 6.5 },
];

export const recentMatches: Match[] = [
  { id: "1", team1: "CSK", team2: "MI", venue: "Wankhede Stadium", date: "2025-06-12", winner: "CSK", margin: "6 wickets", team1Score: "185/4", team2Score: "182/8" },
  { id: "2", team1: "RCB", team2: "GT", venue: "M. Chinnaswamy Stadium", date: "2025-06-11", winner: "GT", margin: "23 runs", team1Score: "164/7", team2Score: "187/4" },
  { id: "3", team1: "KKR", team2: "DC", venue: "Eden Gardens", date: "2025-06-10", winner: "KKR", margin: "4 wickets", team1Score: "156/6", team2Score: "153/9" },
  { id: "4", team1: "RR", team2: "PBKS", venue: "Sawai Mansingh Stadium", date: "2025-06-09", winner: "RR", margin: "15 runs", team1Score: "195/6", team2Score: "180/8" },
  { id: "5", team1: "SRH", team2: "LSG", venue: "Rajiv Gandhi Intl Stadium", date: "2025-06-08", winner: "LSG", margin: "7 wickets", team1Score: "142/10", team2Score: "146/3" },
];

export const venues = [
  { name: "Wankhede Stadium", city: "Mumbai", matches: 8, avgScore: 185 },
  { name: "M. Chinnaswamy Stadium", city: "Bangalore", matches: 7, avgScore: 192 },
  { name: "Eden Gardens", city: "Kolkata", matches: 6, avgScore: 178 },
  { name: "Sawai Mansingh Stadium", city: "Jaipur", matches: 6, avgScore: 165 },
  { name: "Rajiv Gandhi Intl Stadium", city: "Hyderabad", matches: 5, avgScore: 155 },
];
