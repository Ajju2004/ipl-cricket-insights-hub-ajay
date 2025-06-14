
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, MapPin, Crown, Sparkles, Star } from "lucide-react";
import CustomTooltip from "./CustomTooltip";

const WinnersPage = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section with Trophy Celebration */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-yellow-500/20 to-red-600/20 blur-3xl -z-10 rounded-3xl"></div>
        
        <Card className="shadow-2xl bg-white/95 backdrop-blur-md border-white/20 overflow-hidden">
          <CardContent className="p-0">
            {/* Hero Image Section with RCB Championship Photo */}
            <div className="relative h-96 overflow-hidden">
              {/* RCB Championship Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/c5073d17-7922-4a80-8add-ea9ef69441f8.png" 
                  alt="RCB Championship Celebration" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
              </div>
              
              {/* Trophy and Text Overlay */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <Trophy size={120} className="text-yellow-300 drop-shadow-2xl" />
                      <Crown size={40} className="absolute -top-4 -right-2 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                    CHAMPIONS
                  </h1>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
                    Royal Challengers Bengaluru
                  </p>
                  <p className="text-lg text-yellow-200">
                    IPL 2025 - Historic First Title
                  </p>
                </div>

                {/* Celebration Effects */}
                <div className="absolute top-4 left-4">
                  <Sparkles size={24} className="text-yellow-300 animate-pulse" />
                </div>
                <div className="absolute top-8 right-8">
                  <Star size={20} className="text-yellow-400 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-8">
                  <Star size={16} className="text-yellow-300 animate-pulse" />
                </div>
                <div className="absolute bottom-8 right-4">
                  <Sparkles size={20} className="text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Victory Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <CustomTooltip
                    data={{
                      title: "Final Match Details",
                      value: "June 3, 2025",
                      description: "Historic final at Narendra Modi Stadium, Ahmedabad",
                      additionalInfo: [
                        { label: "RCB Score", value: "190/9 (20 overs)" },
                        { label: "Opponent Score", value: "184/7 (20 overs)" },
                        { label: "Margin", value: "6 runs" }
                      ]
                    }}
                  >
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-shadow cursor-help">
                      <CardHeader className="pb-3">
                        <Calendar className="mx-auto text-blue-600 mb-2" size={24} />
                        <CardTitle className="text-lg text-blue-800">Final Date</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-2xl font-bold text-blue-900">June 3, 2025</p>
                        <p className="text-sm text-blue-600">Historic Victory</p>
                      </CardContent>
                    </Card>
                  </CustomTooltip>
                </div>

                <div className="text-center">
                  <CustomTooltip
                    data={{
                      title: "Match Venue",
                      value: "Narendra Modi Stadium",
                      description: "World's largest cricket stadium hosted the final",
                      additionalInfo: [
                        { label: "Capacity", value: "132,000" },
                        { label: "Location", value: "Ahmedabad, Gujarat" },
                        { label: "Previous Finals", value: "2022, 2023" }
                      ]
                    }}
                  >
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-shadow cursor-help">
                      <CardHeader className="pb-3">
                        <MapPin className="mx-auto text-green-600 mb-2" size={24} />
                        <CardTitle className="text-lg text-green-800">Venue</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xl font-bold text-green-900">Narendra Modi</p>
                        <p className="text-xl font-bold text-green-900">Stadium</p>
                        <p className="text-sm text-green-600">Ahmedabad</p>
                      </CardContent>
                    </Card>
                  </CustomTooltip>
                </div>

                <div className="text-center">
                  <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                    <CardHeader className="pb-3">
                      <Trophy className="mx-auto text-yellow-600 mb-2" size={24} />
                      <CardTitle className="text-lg text-yellow-800">Prize Money</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-2xl font-bold text-yellow-900">₹20 Crore</p>
                      <p className="text-sm text-yellow-600">Champions</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Match Summary */}
              <Card className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 border-red-200">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-gray-800 flex items-center justify-center gap-3">
                    <Trophy className="text-yellow-600" size={28} />
                    Final Match Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <Badge className="mb-4 bg-red-600 text-white text-lg px-6 py-2">
                        WINNERS - RCB
                      </Badge>
                      <div className="space-y-2">
                        <p className="text-3xl font-black text-red-700">190/9</p>
                        <p className="text-lg text-gray-600">20 overs</p>
                        <div className="mt-4 space-y-1 text-sm text-gray-600">
                          <p><strong>Virat Kohli:</strong> 73* (47)</p>
                          <p><strong>Faf du Plessis:</strong> 42 (31)</p>
                          <p><strong>Glenn Maxwell:</strong> 31 (18)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Badge className="mb-4 bg-gray-600 text-white text-lg px-6 py-2">
                        RUNNERS-UP
                      </Badge>
                      <div className="space-y-2">
                        <p className="text-3xl font-black text-gray-700">184/7</p>
                        <p className="text-lg text-gray-600">20 overs</p>
                        <div className="mt-4 space-y-1 text-sm text-gray-600">
                          <p>Fell short by 6 runs</p>
                          <p>Valiant effort in the final</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-lg text-gray-700 mb-4">
                      <strong>Man of the Match:</strong> Virat Kohli (73* off 47 balls)
                    </p>
                    <p className="text-base text-gray-600 italic">
                      "After 17 years of playing for RCB, finally bringing the trophy home. 
                      This is for every RCB fan who believed in us." - Virat Kohli
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tournament Journey */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
                  <Crown className="text-yellow-600" size={24} />
                  Championship Journey
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold text-blue-800">League Stage</p>
                      <p className="text-2xl font-bold text-blue-900">2nd Place</p>
                      <p className="text-sm text-blue-600">9 wins, 5 losses</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold text-green-800">Qualifier 1</p>
                      <p className="text-2xl font-bold text-green-900">Won</p>
                      <p className="text-sm text-green-600">vs MI by 7 runs</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold text-orange-800">Final</p>
                      <p className="text-2xl font-bold text-orange-900">Won</p>
                      <p className="text-sm text-orange-600">vs CSK by 6 runs</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold text-yellow-800">Trophy</p>
                      <p className="text-2xl font-bold text-yellow-900">🏆</p>
                      <p className="text-sm text-yellow-600">First Ever!</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WinnersPage;
