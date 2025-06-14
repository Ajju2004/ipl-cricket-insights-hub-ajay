
import DashboardStats from "./DashboardStats";
import PointsTable from "./PointsTable";
import TopPerformers from "./TopPerformers";
import RecentMatches from "./RecentMatches";
import StatsChart from "./StatsChart";
import VenueStats from "./VenueStats";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download, TrendingUp } from "lucide-react";

const IplDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 lg:px-0 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">IPL 2025 Insights Hub</h1>
          <p className="text-lg text-indigo-200 max-w-xl">
            Comprehensive analytics and insights for IPL 2025. Track team performance, player statistics, match results, and tournament trends.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <Button variant="secondary" className="shadow-md flex items-center gap-2">
            <Download size={16} />
            Export Data
          </Button>
          <Button className="flex items-center gap-2">
            <TrendingUp size={16} />
            Live Updates
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="mt-8 space-y-8">
        {/* Points Table and Top Performers */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <PointsTable />
          <TopPerformers />
        </div>

        {/* Charts Section */}
        <StatsChart />

        {/* Recent Matches and Venue Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RecentMatches />
          <VenueStats />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-indigo-300 text-sm">
          Last updated: {new Date().toLocaleString()} | Data refreshes every 5 minutes
        </p>
        <Button variant="ghost" size="sm" className="mt-2 text-indigo-300 hover:text-white">
          <RefreshCw size={14} className="mr-2" />
          Refresh Data
        </Button>
      </div>
    </div>
  );
};

export default IplDashboard;
