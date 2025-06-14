
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, AlertCircle } from 'lucide-react';
import { getWebGLErrorMessage } from '@/utils/webglUtils';

const WebGLFallback = () => {
  return (
    <Card className="bg-black/95 border-gray-700 h-[500px] shadow-2xl">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-3">
          <Monitor className="text-blue-400" size={28} />
          3D Analytics - Compatibility Mode
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-full text-center">
        <AlertCircle className="text-yellow-400 mb-4" size={64} />
        <div className="text-gray-300 mb-6 max-w-md">
          <p className="text-lg mb-2">3D Visualization Unavailable</p>
          <p className="text-sm text-gray-400">
            {getWebGLErrorMessage()}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-blue-400 font-semibold">Revenue</div>
            <div className="text-white text-2xl">₹5,230Cr</div>
            <div className="text-green-400">+12.5%</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-red-400 font-semibold">Attendance</div>
            <div className="text-white text-2xl">2.8M</div>
            <div className="text-green-400">+8.2%</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-teal-400 font-semibold">Viewership</div>
            <div className="text-white text-2xl">462M</div>
            <div className="text-green-400">+15.3%</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-blue-400 font-semibold">Engagement</div>
            <div className="text-white text-2xl">94.2%</div>
            <div className="text-green-400">+5.7%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebGLFallback;
