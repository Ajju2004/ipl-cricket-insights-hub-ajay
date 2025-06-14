
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { teams } from "@/data/iplData";

const PointsTable = () => {
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return b.nrr - a.nrr;
  });

  return (
    <Card className="shadow-xl bg-white/95 dark:bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          🏆 IPL 2025 Points Table
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Pos</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-center">M</TableHead>
              <TableHead className="text-center">W</TableHead>
              <TableHead className="text-center">L</TableHead>
              <TableHead className="text-center">Pts</TableHead>
              <TableHead className="text-center">NRR</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTeams.map((team, index) => (
              <TableRow key={team.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{team.logo}</span>
                    <span className="hidden sm:inline">{team.name}</span>
                    <span className="sm:hidden font-bold">{team.shortName}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{team.matches}</TableCell>
                <TableCell className="text-center text-green-600 font-semibold">{team.wins}</TableCell>
                <TableCell className="text-center text-red-600 font-semibold">{team.losses}</TableCell>
                <TableCell className="text-center font-bold text-blue-600">{team.points}</TableCell>
                <TableCell className={`text-center font-semibold ${team.nrr >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {team.nrr.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PointsTable;
