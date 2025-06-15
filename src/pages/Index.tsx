
import IplDashboard from "@/components/IplDashboard";
import CreatorProfile from "@/components/CreatorProfile";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Modern Dark Financial Dashboard Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Ambient Lighting Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/2 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <IplDashboard />
      </div>
      
      {/* Creator Profile */}
      <CreatorProfile />
    </div>
  );
};

export default Index;
