
import { Card, CardContent } from "@/components/ui/card";
import { teams, topPlayers, recentMatches, venues } from "@/data/iplData";

const DashboardStats = () => {
  const totalMatches = recentMatches.length;
  const totalPlayers = topPlayers.length;
  const totalVenues = venues.length;
  const totalTeams = teams.length;
  const avgScore = Math.round(venues.reduce((sum, venue) => sum + venue.avgScore, 0) / venues.length);

  const stats = [
    { label: "Teams", value: totalTeams, icon: "🏏", color: "from-blue-500 to-blue-600" },
    { label: "Matches", value: totalMatches, icon: "⚾", color: "from-green-500 to-green-600" },
    { label: "Venues", value: totalVenues, icon: "🏟️", color: "from-purple-500 to-purple-600" },
    { label: "Players", value: totalPlayers, icon: "👥", color: "from-orange-500 to-orange-600" },
    { label: "Avg Score", value: avgScore, icon: "📊", color: "from-pink-500 to-pink-600" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="bg-white/10 border-white/20 shadow-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105"
        >
          <CardContent className="py-6 text-center">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs md:text-sm text-indigo-200 uppercase tracking-wider font-medium">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
