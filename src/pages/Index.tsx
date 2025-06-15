
import IplDashboard from "@/components/IplDashboard";
import CreatorProfile from "@/components/CreatorProfile";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dark aesthetic background with deep grays and subtle blues */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
      
      {/* Subtle geometric pattern overlay */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-blue-400/20 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-full border border-purple-400/15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-28 h-28 rounded-full border border-indigo-400/10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full border border-slate-400/25 animate-pulse delay-500"></div>
        
        {/* Elegant line patterns */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/10 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/5 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/5 to-transparent"></div>
      </div>
      
      {/* Atmospheric glowing orbs with cool tones */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <IplDashboard />
      </div>
      
      {/* Creator Profile - positioned in bottom-right corner */}
      <CreatorProfile />
    </div>
  );
};

export default Index;
