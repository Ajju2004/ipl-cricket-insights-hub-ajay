
import IplDashboard from "@/components/IplDashboard";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* New warm-themed background with orange and red gradients */}
      <div className="fixed inset-0 bg-gradient-to-b from-orange-950 via-red-900 to-amber-800"></div>
      
      {/* Updated cricket-themed background pattern with warm colors */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-orange-200/20 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-full border border-red-200/15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-28 h-28 rounded-full border border-amber-200/10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full border-2 border-orange-300/25 animate-pulse delay-500"></div>
        
        {/* Cricket pitch lines pattern with warm tones */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200/10 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200/5 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200/5 to-transparent"></div>
      </div>
      
      {/* Updated glowing orbs with warm theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <IplDashboard />
      </div>
    </div>
  );
};

export default Index;
