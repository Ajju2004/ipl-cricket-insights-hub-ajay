
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { venues } from "@/data/iplData";
import { MapPin } from "lucide-react";

const VenueStats = () => {
  return (
    <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-600/30">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          🏟️ Venue Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {venues.map((venue, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-700/40 to-slate-600/40 p-4 rounded-lg border border-slate-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-purple-400" />
                <h3 className="font-semibold text-white">{venue.name}</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">{venue.city}</p>
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{venue.matches}</div>
                  <div className="text-xs text-slate-400">Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{venue.avgScore}</div>
                  <div className="text-xs text-slate-400">Avg Score</div>
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
