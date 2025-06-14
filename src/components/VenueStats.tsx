
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { venues } from "@/data/iplData";
import { MapPin, BarChart3 } from "lucide-react";

const VenueStats = () => {
  return (
    <Card className="shadow-xl bg-white/95 dark:bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          🏟️ Venue Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {venues.map((venue, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-purple-600" />
                <h3 className="font-semibold text-gray-800 dark:text-white">{venue.name}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{venue.city}</p>
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{venue.matches}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">{venue.avgScore}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Avg Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VenueStats;
