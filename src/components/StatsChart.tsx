
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { teams } from "@/data/iplData";

const COLORS = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', 
  '#8B5CF6', '#06B6D4', '#84CC16', '#F97316',
  '#EC4899', '#6366F1'
];

const StatsChart = () => {
  const chartData = teams.map(team => ({
    name: team.shortName,
    wins: team.wins,
    losses: team.losses,
    points: team.points,
    nrr: team.nrr,
  }));

  const pieData = teams.map(team => ({
    name: team.shortName,
    value: team.points,
  }));

  const performanceData = teams.map(team => ({
    name: team.shortName,
    winPercentage: Math.round((team.wins / team.matches) * 100),
    nrr: team.nrr,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-slate-600/50">
          <p className="font-bold text-white mb-2">{`${label}`}</p>
          {payload.map((pld: any, index: number) => (
            <p key={index} style={{ color: pld.color }} className="font-semibold">
              {`${pld.dataKey}: ${pld.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Wins vs Losses Chart */}
      <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-700/50 xl:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              📊
            </div>
            Wins vs Losses Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#94A3B8', fontWeight: 'bold' }}
                axisLine={{ stroke: '#94A3B8' }}
              />
              <YAxis 
                tick={{ fill: '#94A3B8', fontWeight: 'bold' }}
                axisLine={{ stroke: '#94A3B8' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="wins" 
                fill="url(#winsGradient)" 
                name="Wins" 
                radius={[4, 4, 0, 0]}
                stroke="#10B981"
                strokeWidth={2}
              />
              <Bar 
                dataKey="losses" 
                fill="url(#lossesGradient)" 
                name="Losses" 
                radius={[4, 4, 0, 0]}
                stroke="#EF4444"
                strokeWidth={2}
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

      {/* Points Distribution Pie Chart */}
      <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              🥧
            </div>
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
                stroke="#1e293b"
                strokeWidth={3}
              >
                {pieData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Trends */}
      <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-700/50 xl:col-span-3">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              📈
            </div>
            Team Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#94A3B8', fontWeight: 'bold' }}
                axisLine={{ stroke: '#94A3B8' }}
              />
              <YAxis 
                tick={{ fill: '#94A3B8', fontWeight: 'bold' }}
                axisLine={{ stroke: '#94A3B8' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="winPercentage" 
                stroke="#F59E0B" 
                strokeWidth={4}
                dot={{ fill: '#F59E0B', strokeWidth: 3, r: 6 }}
                name="Win %"
              />
              <Line 
                type="monotone" 
                dataKey="nrr" 
                stroke="#EF4444" 
                strokeWidth={4}
                dot={{ fill: '#EF4444', strokeWidth: 3, r: 6 }}
                name="NRR"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsChart;
