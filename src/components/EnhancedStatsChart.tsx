
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { teams } from "@/data/iplData";
import CustomTooltip from "./CustomTooltip";
import { useState } from "react";

const COLORS = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', 
  '#8B5CF6', '#06B6D4', '#84CC16', '#F97316',
  '#EC4899', '#6366F1'
];

interface EnhancedStatsChartProps {
  filteredTeams: typeof teams;
  onDrillDown: (type: string, id: string, title: string) => void;
}

const EnhancedStatsChart = ({ filteredTeams, onDrillDown }: EnhancedStatsChartProps) => {
  const [activeChart, setActiveChart] = useState("performance");

  const chartData = filteredTeams.map(team => ({
    name: team.shortName,
    wins: team.wins,
    losses: team.losses,
    points: team.points,
    nrr: team.nrr,
    id: team.id,
    fullName: team.name,
    winPercentage: Math.round((team.wins / team.matches) * 100),
  }));

  const pieData = filteredTeams.map(team => ({
    name: team.shortName,
    value: team.points,
    id: team.id,
    fullName: team.name,
  }));

  const CustomChartTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-900/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-gray-700 text-white">
          <p className="font-bold text-lg mb-2">{data.fullName}</p>
          {payload.map((pld: any, index: number) => (
            <p key={index} style={{ color: pld.color }} className="font-semibold">
              {`${pld.dataKey}: ${pld.value}`}
            </p>
          ))}
          <div className="mt-2 pt-2 border-t border-gray-600">
            <p className="text-xs text-gray-300">Click to view detailed analysis</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleBarClick = (data: any) => {
    onDrillDown("team", data.id, data.fullName);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Enhanced Performance Chart */}
      <Card className="shadow-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-md border-white/20 xl:col-span-2">
        <CardHeader className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border-b border-white/10">
          <CardTitle className="text-xl font-black text-gray-800 dark:text-white flex items-center gap-3">
            <CustomTooltip 
              data={{
                title: "Performance Analysis",
                value: `${filteredTeams.length} Teams`,
                description: "Interactive chart showing wins vs losses. Click on any bar to drill down into team details.",
                additionalInfo: [
                  { label: "Total Matches", value: "74" },
                  { label: "Avg Points", value: Math.round(filteredTeams.reduce((acc, t) => acc + t.points, 0) / filteredTeams.length) },
                  { label: "Best NRR", value: Math.max(...filteredTeams.map(t => t.nrr)).toFixed(2) }
                ]
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center cursor-help">
                📊
              </div>
            </CustomTooltip>
            Team Performance Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6B7280', fontWeight: 'bold' }}
                axisLine={{ stroke: '#6B7280' }}
              />
              <YAxis 
                tick={{ fill: '#6B7280', fontWeight: 'bold' }}
                axisLine={{ stroke: '#6B7280' }}
              />
              <Tooltip content={<CustomChartTooltip />} />
              <Bar 
                dataKey="wins" 
                fill="url(#winsGradient)" 
                name="Wins" 
                radius={[4, 4, 0, 0]}
                stroke="#10B981"
                strokeWidth={2}
                onClick={handleBarClick}
                style={{ cursor: 'pointer' }}
              />
              <Bar 
                dataKey="losses" 
                fill="url(#lossesGradient)" 
                name="Losses" 
                radius={[4, 4, 0, 0]}
                stroke="#EF4444"
                strokeWidth={2}
                onClick={handleBarClick}
                style={{ cursor: 'pointer' }}
              />
              <defs>
                <linearGradient id="winsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0.4}/>
                </linearGradient>
                <linearGradient id="lossesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#EF4444" stopOpacity={0.4}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Enhanced Points Distribution */}
      <Card className="shadow-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-md border-white/20">
        <CardHeader className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-b border-white/10">
          <CardTitle className="text-xl font-black text-gray-800 dark:text-white flex items-center gap-3">
            <CustomTooltip 
              data={{
                title: "Points Distribution",
                value: `${filteredTeams.reduce((acc, t) => acc + t.points, 0)} Total`,
                description: "Distribution of points across all teams in the tournament",
                additionalInfo: [
                  { label: "Highest", value: Math.max(...filteredTeams.map(t => t.points)) },
                  { label: "Lowest", value: Math.min(...filteredTeams.map(t => t.points)) },
                  { label: "Average", value: Math.round(filteredTeams.reduce((acc, t) => acc + t.points, 0) / filteredTeams.length) }
                ]
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center cursor-help">
                🥧
              </div>
            </CustomTooltip>
            Points Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                stroke="#fff"
                strokeWidth={3}
                onClick={handleBarClick}
                style={{ cursor: 'pointer' }}
              >
                {pieData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedStatsChart;
