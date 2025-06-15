
import { Card, CardContent } from "@/components/ui/card";
import { teams, topPlayers, recentMatches, venues } from "@/data/iplData";

const DashboardStats = () => {
  const totalMatches = 74;
  const totalPlayers = topPlayers.length;
  const totalVenues = 13;
  const totalTeams = teams.length;
  const championPrizeMoney = 20;
  const topScorer = Math.max(...topPlayers.map(p => p.runs));
  const topWicketTaker = Math.max(...topPlayers.map(p => p.wickets));

  const primaryStats = [
    { 
      label: "Total Revenue", 
      value: "₹5,230Cr", 
      change: "+12.5%",
      icon: "💰", 
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500"
    },
    { 
      label: "Match Attendance", 
      value: "2.8M", 
      change: "+8.2%",
      icon: "👥", 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    { 
      label: "Viewership", 
      value: "462M", 
      change: "+15.3%",
      icon: "📺", 
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    },
  ];

  const secondaryStats = [
    { label: "Housing", value: "₹320Cr", icon: "🏟️", color: "bg-purple-500" },
    { label: "Broadcasting", value: "₹2,420Cr", icon: "📡", color: "bg-pink-500" },
    { label: "Sponsorship", value: "₹2,040Cr", icon: "🤝", color: "bg-orange-500" },
  ];

  const performanceStats = [
    { label: "Total Matches", value: totalMatches, category: "Tournament" },
    { label: "Teams", value: totalTeams, category: "Participants" },
    { label: "Venues", value: totalVenues, category: "Infrastructure" },
    { label: "Top Score", value: topScorer, category: "Performance" },
    { label: "Most Wickets", value: topWicketTaker, category: "Performance" },
    { label: "Prize Money", value: `₹${championPrizeMoney}Cr`, category: "Financial" },
  ];

  return (
    <div className="space-y-8">
      {/* Primary Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {primaryStats.map((stat, index) => (
          <Card key={stat.label} className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
                <span className="text-emerald-400 text-sm font-semibold bg-emerald-500/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div className="text-slate-400 text-sm mb-1">{stat.label}</div>
              <div className="text-white text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Secondary Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondaryStats.map((stat, index) => (
          <Card key={stat.label} className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-lg`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                  <div className="text-white text-xl font-bold">{stat.value}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Performance Metrics */}
      <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="text-white text-lg font-semibold mb-6">Tournament Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {performanceStats.map((stat, index) => (
              <div key={stat.label} className="text-center p-4 bg-slate-700/30 rounded-lg border border-slate-600/20">
                <div className="text-slate-400 text-xs uppercase tracking-wide mb-2">{stat.category}</div>
                <div className="text-white text-xl font-bold mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
