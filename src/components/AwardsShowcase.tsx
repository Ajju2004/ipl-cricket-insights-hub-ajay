
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { awards } from "@/data/iplData";

const AwardsShowcase = () => {
  return (
    <Card className="shadow-xl bg-white/95 dark:bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          🏆 IPL 2025 Awards & Recognition
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award) => (
            <div key={award.id} className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
              <div className="text-center mb-3">
                <div className="text-3xl mb-2">{award.icon}</div>
                <h3 className="font-bold text-sm text-gray-800 dark:text-white">{award.title}</h3>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-blue-600">{award.winner}</div>
                {award.team && <div className="text-sm text-gray-600 dark:text-gray-300">{award.team}</div>}
                <div className="text-lg font-bold text-orange-600 mt-1">{award.value}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AwardsShowcase;

