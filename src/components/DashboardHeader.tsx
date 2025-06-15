
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Calendar, Trophy, DollarSign } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import NaturalLanguageQuery from "./NaturalLanguageQuery";

const DashboardHeader = () => {
  return (
    <div className="mb-8 relative">
      {/* Modern Dark Background with Subtle Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10"></div>
      </div>

      <div className="relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 p-8">
          {/* Left Section - Title and Stats */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                IPL Analytics Hub
              </h1>
              <p className="text-lg text-slate-300 font-medium">
                Personal Finance Tracker Style Dashboard
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Sunday, June 3, 2025
              </p>
            </div>

            {/* Available Balance Style Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-6 max-w-md">
              <h2 className="text-white text-lg font-semibold mb-2">Tournament Revenue</h2>
              <div className="text-white text-4xl font-bold">₹5,230Cr</div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Trophy size={16} className="text-white" />
                  </div>
                  <span className="text-slate-400 text-sm">Matches</span>
                </div>
                <div className="text-white text-xl font-bold">74</div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp size={16} className="text-white" />
                  </div>
                  <span className="text-slate-400 text-sm">Teams</span>
                </div>
                <div className="text-white text-xl font-bold">10</div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <span className="text-slate-400 text-sm">Venues</span>
                </div>
                <div className="text-white text-xl font-bold">13</div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <DollarSign size={16} className="text-white" />
                  </div>
                  <span className="text-slate-400 text-sm">Prize</span>
                </div>
                <div className="text-white text-xl font-bold">₹20Cr</div>
              </div>
            </div>
          </div>

          {/* Right Section - User Profile & Actions */}
          <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col items-end">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-right">
                <div className="text-white font-semibold">IPL Analytics</div>
                <div className="text-slate-400 text-sm">Data Analyst</div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">IA</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="secondary" className="bg-slate-700/80 backdrop-blur-md border-slate-600/50 hover:bg-slate-600/80 text-slate-200">
                <Download size={16} />
                Export Data
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <TrendingUp size={16} />
                View Reports
              </Button>
            </div>
          </div>
        </div>

        {/* Modern Query Interface */}
        <div className="mx-8 mb-4">
          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 border border-slate-700/30">
            <NaturalLanguageQuery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
