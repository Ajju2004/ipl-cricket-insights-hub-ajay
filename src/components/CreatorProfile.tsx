
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const CreatorProfile = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-slate-800/80 backdrop-blur-md border border-slate-600/30 rounded-2xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14 border-2 border-blue-400/30">
            <AvatarImage 
              src="/lovable-uploads/69c18168-f3fa-4623-84cf-384689108993.png" 
              alt="Creator Profile"
              className="object-cover"
            />
            <AvatarFallback className="bg-blue-500/20 text-blue-400 font-semibold">
              AJ
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="text-sm font-bold text-white mb-1">
              Dashboard by Ajay
            </div>
            <div className="text-xs text-slate-300 mb-2">
              IPL 2025 Insights
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Comprehensive analytics dashboard featuring interactive charts, 
              team statistics, player performances, and match insights for 
              IPL 2025 season with RCB's historic championship victory.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
