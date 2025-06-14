
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";

interface ChartPlaceholderProps {
  title: string;
  description?: string;
}

const ChartPlaceholder = ({ title, description }: ChartPlaceholderProps) => (
  <Card className="shadow-xl bg-white/90 dark:bg-background hover:scale-105 transition-transform cursor-pointer">
    <CardHeader className="flex flex-row items-center gap-2 pb-2">
      <BarChart2 className="text-indigo-600 dark:text-indigo-400" size={22} />
      <CardTitle className="text-base">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="mb-2">{description}</CardDescription>
      <div className="h-40 flex items-center justify-center text-indigo-300 text-xs font-semibold border-2 border-dashed border-indigo-100 rounded-md bg-indigo-50/80 dark:bg-indigo-950/20">
        Chart coming soon
      </div>
    </CardContent>
  </Card>
);

export default ChartPlaceholder;
