
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { teams } from "@/data/iplData";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C', '#8DD1E1', '#D084D0'];

const StatsChart = () => {
  const chartData = teams.map(team => ({
    name: team.shortName,
    wins: team.wins,
    losses: team.losses,
    points: team.points,
  }));

  const pieData = teams.map(team => ({
    name: team.shortName,
    value: team.points,
  }));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <Card className="shadow-xl bg-white/95 dark:bg-background">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800 dark:text-white">
            📊 Wins vs Losses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="wins" fill="#10B981" name="Wins" />
              <Bar dataKey="losses" fill="#EF4444" name="Losses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-xl bg-white/95 dark:bg-background">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800 dark:text-white">
            🥧 Points Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsChart;
