
import { Card, CardContent } from "@/components/ui/card";
import { teams, topPlayers, recentMatches, venues } from "@/data/iplData";

const DashboardStats = () => {
  const totalMatches = 74; // IPL 2025 total matches
  const totalPlayers = topPlayers.length;
  const totalVenues = 13; // IPL 2025 venues
  const totalTeams = teams.length;
  const championPrizeMoney = 20; // RCB won ₹20 crore
  const topScorer = Math.max(...topPlayers.map(p => p.runs));
  const topWicketTaker = Math.max(...topPlayers.map(p => p.wickets));

  const stats = [
    { label: "Total Matches", value: totalMatches, icon: "⚾", color: "from-blue-500 to-blue-600" },
    { label: "Teams", value: totalTeams, icon: "🏏", color: "from-green-500 to-green-600" },
    { label: "Venues", value: totalVenues, icon: "🏟️", color: "from-purple-500 to-purple-600" },
    { label: "Champions", value: "RCB", icon: "🏆", color: "from-yellow-500 to-yellow-600" },
    { label: "Prize Money", value: `₹${championPrizeMoney}cr`, icon: "💰", color: "from-green-500 to-green-600" },
    { label: "Top Score", value: topScorer, icon: "🔥", color: "from-orange-500 to-orange-600" },
    { label: "Most Wickets", value: topWicketTaker, icon: "🎯", color: "from-red-500 to-red-600" },
    { label: "Season", value: "2025", icon: "📅", color: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <div>
      {/* Tournament Header */}
      <div className="text-center mb-6">
        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
          <span className="text-white font-bold text-lg">🏆 IPL 2025 Season Complete 🏆</span>
        </div>
        <div className="text-indigo-200 text-sm">
          March 22 - June 3, 2025 • Extended due to suspension • 74 Matches across 13 Venues
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="bg-white/10 border-white/20 shadow-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            <CardContent className="py-4 text-center">
              <div className="text-xl mb-2">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-indigo-200 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;

