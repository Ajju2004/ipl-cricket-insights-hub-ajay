
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface TooltipData {
  title: string;
  value: string | number;
  description?: string;
  additionalInfo?: Array<{ label: string; value: string | number }>;
  trend?: "up" | "down" | "stable";
}

interface CustomTooltipProps {
  data: TooltipData;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const CustomTooltip = ({ data, children, position = "top" }: CustomTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const getTrendIcon = (trend?: "up" | "down" | "stable") => {
    switch (trend) {
      case "up": return "📈";
      case "down": return "📉";
      case "stable": return "➖";
      default: return "";
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className={`absolute ${getPositionClasses()} z-50 w-64`}>
          <Card className="bg-gray-900/95 border-gray-700 text-white shadow-2xl backdrop-blur-md">
            <div className="p-4 space-y-3">
              {/* Header */}
              <div className="border-b border-gray-700 pb-2">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  {data.title}
                  {data.trend && <span>{getTrendIcon(data.trend)}</span>}
                </h4>
                <div className="text-2xl font-black text-blue-400">
                  {data.value}
                </div>
              </div>

              {/* Description */}
              {data.description && (
                <p className="text-gray-300 text-sm leading-relaxed">
                  {data.description}
                </p>
              )}

              {/* Additional Info */}
              {data.additionalInfo && data.additionalInfo.length > 0 && (
                <div className="space-y-1">
                  {data.additionalInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{info.label}:</span>
                      <span className="text-white font-semibold">{info.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tooltip Arrow */}
              <div className={`absolute w-3 h-3 bg-gray-900 border-gray-700 transform rotate-45 ${
                position === "top" ? "top-full left-1/2 -translate-x-1/2 -mt-1.5 border-b border-r" :
                position === "bottom" ? "bottom-full left-1/2 -translate-x-1/2 -mb-1.5 border-t border-l" :
                position === "left" ? "left-full top-1/2 -translate-y-1/2 -ml-1.5 border-t border-r" :
                "right-full top-1/2 -translate-y-1/2 -mr-1.5 border-b border-l"
              }`}></div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
