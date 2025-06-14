
import DashboardStats from "./DashboardStats";
import PointsTable from "./PointsTable";
import TopPerformers from "./TopPerformers";
import RecentMatches from "./RecentMatches";
import EnhancedStatsChart from "./EnhancedStatsChart";
import VenueStats from "./VenueStats";
import AuctionInsights from "./AuctionInsights";
import AwardsShowcase from "./AwardsShowcase";
import WinnersPage from "./WinnersPage";
import NaturalLanguageQuery from "./NaturalLanguageQuery";

interface SectionRendererProps {
  activeSection: string;
  filteredTeams: any[];
  onDrillDown: (type: "team" | "player" | "match", id: string, title: string) => void;
}

const SectionRenderer = ({ activeSection, filteredTeams, onDrillDown }: SectionRendererProps) => {
  switch (activeSection) {
    case "winners":
      return <WinnersPage />;
    case "teams":
      return <PointsTable />;
    case "players":
      return <TopPerformers />;
    case "matches":
      return <RecentMatches />;
    case "venues":
      return <VenueStats />;
    case "auction":
      return <AuctionInsights />;
    case "awards":
      return <AwardsShowcase />;
    case "analytics":
      return <EnhancedStatsChart filteredTeams={filteredTeams} onDrillDown={onDrillDown} />;
    case "qa":
      return <NaturalLanguageQuery />;
    default:
      return (
        <>
          <DashboardStats />
          <div className="mt-16 space-y-12">
            <NaturalLanguageQuery />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <PointsTable />
              <TopPerformers />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <AwardsShowcase />
              <AuctionInsights />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl -z-10 rounded-3xl"></div>
              <EnhancedStatsChart filteredTeams={filteredTeams} onDrillDown={onDrillDown} />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <RecentMatches />
              <VenueStats />
            </div>
          </div>
        </>
      );
  }
};

export default SectionRenderer;
