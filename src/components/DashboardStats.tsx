
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
    { 
      label: "Total Matches", 
      value: totalMatches, 
      icon: "⚾", 
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/10"
    },
    { 
      label: "Teams", 
      value: totalTeams, 
      icon: "🏏", 
      color: "from-green-500 to-green-600",
      bgGradient: "from-green-500/10 to-green-600/10"
    },
    { 
      label: "Venues", 
      value: totalVenues, 
      icon: "🏟️", 
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/10"
    },
    { 
      label: "Champions", 
      value: "RCB", 
      icon: "🏆", 
      color: "from-yellow-500 to-yellow-600",
      bgGradient: "from-yellow-500/10 to-yellow-600/10"
    },
    { 
      label: "Prize Money", 
      value: `₹${championPrizeMoney}cr`, 
      icon: "💰", 
      color: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-500/10 to-emerald-600/10"
    },
    { 
      label: "Top Score", 
      value: topScorer, 
      icon: "🔥", 
      color: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-500/10 to-orange-600/10"
    },
    { 
      label: "Most Wickets", 
      value: topWicketTaker, 
      icon: "🎯", 
      color: "from-red-500 to-red-600",
      bgGradient: "from-red-500/10 to-red-600/10"
    },
    { 
      label: "Season", 
      value: "2025", 
      icon: "📅", 
      color: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-500/10 to-indigo-600/10"
    },
  ];

  return (
    <div>
      {/* Enhanced Tournament Header */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 blur-2xl rounded-full"></div>
          <div className="relative bg-white/15 backdrop-blur-md rounded-2xl px-8 py-4 mb-6 border border-white/20">
            <span className="text-white font-black text-2xl tracking-wide">
              🏆 IPL 2025 SEASON COMPLETE 🏆
            </span>
          </div>
        </div>
        <div className="text-indigo-200 text-lg font-medium max-w-4xl mx-auto leading-relaxed">
          March 22 - June 3, 2025 • Extended Season Due to Suspension • 74 Matches Across 13 Premier Venues
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            className="group bg-white/15 border-white/20 shadow-2xl backdrop-blur-md hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
            
            <CardContent className="py-6 text-center relative z-10">
              {/* Enhanced Icon */}
              <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                {stat.icon}
              </div>
              
              {/* Enhanced Value */}
              <div className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight leading-none">
                {stat.value}
              </div>
              
              {/* Enhanced Label */}
              <div className="text-xs text-indigo-200 uppercase tracking-widest font-bold leading-tight">
                {stat.label}
              </div>
              
              {/* Highlight Effect */}
              {index < 4 && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
