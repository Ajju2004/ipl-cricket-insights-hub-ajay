
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { awards } from "@/data/iplData";
import { useState } from "react";
import DrillThroughModal from "./DrillThroughModal";

interface DrillThroughData {
  type: "team" | "player" | "match";
  id: string;
  title: string;
}

const AwardsShowcase = () => {
  const [drillThroughData, setDrillThroughData] = useState<DrillThroughData | null>(null);

  const handleAwardClick = (award: typeof awards[0]) => {
    setDrillThroughData({
      type: "player",
      id: award.id,
      title: `${award.title} - ${award.winner}`
    });
  };

  return (
    <>
      <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-600/30">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            🏆 IPL 2025 Awards & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award) => (
              <div 
                key={award.id} 
                className="bg-gradient-to-br from-slate-700/40 to-slate-600/40 p-4 rounded-lg border border-slate-500/30 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleAwardClick(award)}
              >
                <div className="text-center mb-3">
                  <div className="text-3xl mb-2">{award.icon}</div>
                  <h3 className="font-bold text-sm text-white">{award.title}</h3>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-blue-400">{award.winner}</div>
                  {award.team && <div className="text-sm text-slate-300">{award.team}</div>}
                  <div className="text-lg font-bold text-purple-400 mt-1">{award.value}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <DrillThroughModal 
        data={drillThroughData}
        onClose={() => setDrillThroughData(null)}
      />
    </>
  );
};

export default AwardsShowcase;
