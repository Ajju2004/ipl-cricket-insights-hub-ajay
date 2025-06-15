
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
    if (position === 1) return "bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-l-4 border-yellow-400";
    if (position <= 4) return "bg-gradient-to-r from-green-400/10 to-emerald-500/10 border-l-4 border-green-400";
    if (position <= 6) return "bg-gradient-to-r from-blue-400/10 to-indigo-500/10 border-l-4 border-blue-400";
    return "bg-gradient-to-r from-gray-400/5 to-gray-500/5 border-l-4 border-gray-400";
  };

  const getPositionBadge = (position: number) => {
    if (position === 1) return <Trophy size={16} className="text-yellow-500 mr-2" />;
    if (position <= 4) return <TrendingUp size={16} className="text-green-500 mr-2" />;
    return <TrendingDown size={16} className="text-gray-400 mr-2" />;
  };

  return (
    <>
      <Card className="shadow-xl bg-slate-800/40 backdrop-blur-md border-slate-600/30 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-slate-600/30">
          <CardTitle className="text-2xl font-black text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              🏆
            </div>
            IPL 2025 Points Table
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
              <div className="text-sm font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                  <TableRow className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 border-b-2 border-slate-600/50 hover:bg-slate-700/30">
                    <TableHead className="w-16 font-bold text-slate-200">Pos</TableHead>
                    <TableHead className="font-bold text-slate-200 min-w-[200px]">Team</TableHead>
                    <TableHead className="text-center font-bold text-slate-200">M</TableHead>
                    <TableHead className="text-center font-bold text-slate-200">W</TableHead>
                    <TableHead className="text-center font-bold text-slate-200">L</TableHead>
                    <TableHead className="text-center font-bold text-slate-200">Pts</TableHead>
                    <TableHead className="text-center font-bold text-slate-200">NRR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedTeams.map((team, index) => (
                    <TableRow 
                      key={team.id} 
                      className={`hover:bg-slate-700/50 transition-all duration-300 cursor-pointer ${getPositionColor(index + 1)}`}
                      onClick={() => handleTeamClick(team)}
                    >
                      <TableCell className="font-bold text-lg">
                        <div className="flex items-center">
                          {getPositionBadge(index + 1)}
                          {index + 1}
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12 ring-2 ring-white shadow-lg">
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
                            <div className="text-xs text-slate-300 font-medium">
                              {index === 0 ? "🏆 Champions" : index < 4 ? "✅ Qualified" : "❌ Eliminated"}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-bold text-lg text-white">{team.matches}</TableCell>
                      <TableCell className="text-center text-green-400 font-bold text-lg bg-green-900/30 rounded-md">
                        {team.wins}
                      </TableCell>
                      <TableCell className="text-center text-red-400 font-bold text-lg bg-red-900/30 rounded-md">
                        {team.losses}
                      </TableCell>
                      <TableCell className="text-center font-black text-xl text-blue-400 bg-blue-900/30 rounded-md">
                        {team.points}
                      </TableCell>
                      <TableCell className={`text-center font-bold text-lg rounded-md ${
                        team.nrr >= 0 
                          ? 'text-green-400 bg-green-900/30' 
                          : 'text-red-400 bg-red-900/30'
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
