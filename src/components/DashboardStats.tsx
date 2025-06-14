
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Teams", value: 10 },
  { label: "Matches", value: 74 },
  { label: "Venues", value: 12 },
  { label: "Players", value: 220 },
  { label: "Seasons", value: 18 },
];

const DashboardStats = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {stats.map((stat) => (
      <Card
        key={stat.label}
        className="bg-indigo-900/60 border-none shadow-lg text-center"
      >
        <CardContent className="py-4">
          <div className="text-3xl font-bold text-indigo-200">{stat.value}</div>
          <div className="text-xs md:text-sm mt-1 text-indigo-300 uppercase tracking-wider">
            {stat.label}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default DashboardStats;
