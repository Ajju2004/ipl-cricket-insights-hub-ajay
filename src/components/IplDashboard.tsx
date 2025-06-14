
import DashboardStats from "./DashboardStats";
import ChartPlaceholder from "./ChartPlaceholder";
import { Button } from "@/components/ui/button";

const IplDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-2 lg:px-0 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">IPL 2025 Insights Hub</h1>
          <p className="text-lg text-indigo-200 max-w-xl">
            Your one-stop dashboard for IPL 2025 statistics, analytics, and insights. Dive deep into team and player performance, match trends, and more.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <Button variant="secondary" className="shadow-md">Download Report</Button>
          <Button>View Full Stats</Button>
        </div>
      </div>

      {/* Stats Row */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Top Teams */}
        <ChartPlaceholder 
          title="Top Teams" 
          description="Track standings and performance of IPL teams" 
        />
        {/* Top Players */}
        <ChartPlaceholder 
          title="Top Players"
          description="Leading run-scorers and wicket-takers"
        />
        {/* Match Insights */}
        <ChartPlaceholder 
          title="Match Insights"
          description="Upcoming: Deep dive into recent matches, stadium stats and more"
        />
      </div>
      {/* Future: Add more rows and widgets for audience, locations, etc */}
    </div>
  );
};

export default IplDashboard;
