
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const CreatorProfile = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-slate-800/80 backdrop-blur-md border border-slate-600/30 rounded-2xl p-4 shadow-2xl">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-blue-400/30">
            <AvatarImage 
              src="/lovable-uploads/69c18168-f3fa-4623-84cf-384689108993.png" 
              alt="Creator Profile"
              className="object-cover"
            />
            <AvatarFallback className="bg-blue-500/20 text-blue-400 font-semibold">
              AJ
            </AvatarFallback>
          </Avatar>
          <div className="text-right">
            <div className="text-sm font-semibold text-white">
              Dashboard by Ajay
            </div>
            <div className="text-xs text-slate-300">
              IPL 2025 Insights
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
