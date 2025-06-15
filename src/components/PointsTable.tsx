
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { teams } from "@/data/iplData";
import { Trophy, TrendingUp, TrendingDown, BarChart3, Grid3X3, Boxes } from "lucide-react";
import { useState } from "react";
import PointsTable3D from "./dashboard3d/PointsTable3D";
import PictorialPointsTable from "./PictorialPointsTable";
import WebGLErrorBoundary from "./dashboard3d/WebGLErrorBoundary";
import WebGLFallback from "./dashboard3d/WebGLFallback";
import { checkWebGLSupport } from "@/utils/webglUtils";
import DrillThroughModal from "./DrillThroughModal";

interface DrillThroughData {
  type: "team" | "player" | "match";
  id: string;
  title: string;
}

const PointsTable = () => {
  const [viewMode, setViewMode] = useState<"table" | "pictorial" | "3d">("pictorial");
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [drillThroughData, setDrillThroughData] = useState<DrillThroughData | null>(null);

  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return b.nrr - a.nrr;
  });

  const toggle3D = async () => {
    if (viewMode !== "3d" && webglSupported === null) {
      const isSupported = checkWebGLSupport();
      setWebglSupported(isSupported);
    }
    setViewMode("3d");
  };

  const handleTeamClick = (team: typeof teams[0]) => {
    setDrillThroughData({
      type: "team",
      id: team.id,
      title: team.name
    });
  };

  const getPositionColor = (position: number) => {
    if (position === 1) return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-l-4 border-yellow-400";
    if (position <= 4) return "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400";
    if (position <= 6) return "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-400";
    return "bg-gradient-to-r from-slate-500/5 to-slate-600/5 border-l-4 border-slate-400";
  };

  const getPositionBadge = (position: number) => {
    if (position === 1) return <Trophy size={16} className="text-yellow-400 mr-2" />;
    if (position <= 4) return <TrendingUp size={16} className="text-green-400 mr-2" />;
    return <TrendingDown size={16} className="text-slate-400 mr-2" />;
  };

  return (
    <>
      <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            🏆 IPL 2025 Points Table
            <div className="ml-auto flex items-center gap-2">
              <Button
                onClick={() => setViewMode("pictorial")}
                variant={viewMode === "pictorial" ? "default" : "outline"}
                size="sm"
                className="font-semibold"
              >
                <Grid3X3 size={16} className="mr-1" />
                Pictorial
              </Button>
              <Button
                onClick={() => setViewMode("table")}
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                className="font-semibold"
              >
                <BarChart3 size={16} className="mr-1" />
                Table
              </Button>
              <Button
                onClick={toggle3D}
                variant={viewMode === "3d" ? "default" : "outline"}
                size="sm"
                className="font-semibold"
              >
                <Boxes size={16} className="mr-1" />
                3D View
              </Button>
              <div className="text-sm font-normal text-purple-300">
                Final Standings
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {viewMode === "3d" ? (
            webglSupported === false ? (
              <WebGLFallback />
            ) : (
              <WebGLErrorBoundary>
                <PointsTable3D />
              </WebGLErrorBoundary>
            )
          ) : viewMode === "pictorial" ? (
            <div className="p-6">
              <PictorialPointsTable onTeamClick={handleTeamClick} />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-700/40 border-b-2 border-slate-600/50">
                    <TableHead className="w-16 font-bold text-slate-300">Pos</TableHead>
                    <TableHead className="font-bold text-slate-300 min-w-[200px]">Team</TableHead>
                    <TableHead className="text-center font-bold text-slate-300">M</TableHead>
                    <TableHead className="text-center font-bold text-slate-300">W</TableHead>
                    <TableHead className="text-center font-bold text-slate-300">L</TableHead>
                    <TableHead className="text-center font-bold text-slate-300">Pts</TableHead>
                    <TableHead className="text-center font-bold text-slate-300">NRR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedTeams.map((team, index) => (
                    <TableRow 
                      key={team.id} 
                      className={`hover:bg-slate-700/40 transition-all duration-300 cursor-pointer ${getPositionColor(index + 1)}`}
                      onClick={() => handleTeamClick(team)}
                    >
                      <TableCell className="font-bold text-lg text-white">
                        <div className="flex items-center">
                          {getPositionBadge(index + 1)}
                          {index + 1}
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12 ring-2 ring-slate-600 shadow-lg">
                            <AvatarImage 
                              src={team.logoUrl} 
                              alt={`${team.name} logo`}
                              className="object-contain p-1"
                            />
                            <AvatarFallback className="text-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                              {team.logo}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="hidden sm:block font-bold text-lg text-white">
                              {team.name}
                            </div>
                            <div className="sm:hidden font-bold text-lg text-white">
                              {team.shortName}
                            </div>
                            <div className="text-xs text-slate-400 font-medium">
                              {index === 0 ? "🏆 Champions" : index < 4 ? "✅ Qualified" : "❌ Eliminated"}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-bold text-lg text-white">{team.matches}</TableCell>
                      <TableCell className="text-center text-green-400 font-bold text-lg bg-green-500/20 rounded-md">
                        {team.wins}
                      </TableCell>
                      <TableCell className="text-center text-red-400 font-bold text-lg bg-red-500/20 rounded-md">
                        {team.losses}
                      </TableCell>
                      <TableCell className="text-center font-black text-xl text-blue-400 bg-blue-500/20 rounded-md">
                        {team.points}
                      </TableCell>
                      <TableCell className={`text-center font-bold text-lg rounded-md ${
                        team.nrr >= 0 
                          ? 'text-green-400 bg-green-500/20' 
                          : 'text-red-400 bg-red-500/20'
                      }`}>
                        {team.nrr >= 0 ? '+' : ''}{team.nrr.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <DrillThroughModal 
        data={drillThroughData}
        onClose={() => setDrillThroughData(null)}
      />
    </>
  );
};

export default PointsTable;
