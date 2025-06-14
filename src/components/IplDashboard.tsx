
import DashboardStats from "./DashboardStats";
import PointsTable from "./PointsTable";
import TopPerformers from "./TopPerformers";
import RecentMatches from "./RecentMatches";
import StatsChart from "./StatsChart";
import VenueStats from "./VenueStats";
import AuctionInsights from "./AuctionInsights";
import AwardsShowcase from "./AwardsShowcase";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download, TrendingUp, Calendar, Trophy, Users, BarChart3, MapPin } from "lucide-react";

const IplDashboard = () => {
  return (
    <div className="max-w-8xl mx-auto py-12 px-6 lg:px-8 animate-fade-in">
      {/* Enhanced Header with Better Typography */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl -z-10 rounded-full"></div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight leading-none">
            IPL 2025
            <span className="block text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
              Insights Hub
            </span>
          </h1>
          <p className="text-xl text-indigo-200 max-w-2xl leading-relaxed font-medium">
            Complete analytics for IPL 2025 season featuring RCB's historic maiden title victory, 
            record-breaking mega auction insights, and comprehensive tournament analytics.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-indigo-300">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={16} />
              <span className="font-semibold">March 22 - June 3, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Trophy size={16} />
              <span className="font-semibold">Champions: Royal Challengers Bengaluru</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-lg">💰</span>
              <span className="font-semibold">Prize Pool: ₹20 crore</span>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col gap-4">
          <Button variant="secondary" className="shadow-2xl flex items-center gap-3 h-12 px-6 text-base font-semibold bg-white/15 backdrop-blur-md border-white/20 hover:bg-white/25 transition-all duration-300">
            <Download size={18} />
            Export Analytics
          </Button>
          <Button className="flex items-center gap-3 h-12 px-6 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl transition-all duration-300">
            <TrendingUp size={18} />
            Final Statistics
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Overview */}
      <DashboardStats />

      {/* Main Content Grid with Enhanced Spacing */}
      <div className="mt-16 space-y-12">
        {/* Points Table and Top Performers */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <PointsTable />
          <TopPerformers />
        </div>

        {/* Awards and Auction Insights */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <AwardsShowcase />
          <AuctionInsights />
        </div>

        {/* Enhanced Charts Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 rounded-3xl"></div>
          <StatsChart />
        </div>

        {/* Recent Matches and Venue Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <RecentMatches />
          <VenueStats />
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="mt-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl -z-10 rounded-full"></div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-400" size={24} />
            IPL 2025 Season Complete
          </h3>
          <p className="text-indigo-300 text-lg mb-6 max-w-2xl mx-auto">
            Historic season concluded with RCB's maiden championship victory. 
            Final updated on June 3, 2025 with comprehensive tournament analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-indigo-200">
              <Users size={16} />
              <span>74 Total Matches</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-200">
              <BarChart3 size={16} />
              <span>10 Teams Competed</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-200">
              <MapPin size={16} />
              <span>13 Venues</span>
            </div>
          </div>
          <Button variant="ghost" size="lg" className="mt-6 text-indigo-300 hover:text-white hover:bg-white/10 transition-all duration-300">
            <RefreshCw size={16} className="mr-3" />
            View Historical Seasons
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IplDashboard;
