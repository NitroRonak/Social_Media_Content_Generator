import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
const PointsDisplay = ({userPoints}:{
    userPoints: number | null
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl flex items-center justify-between">
      <div className="flex items-center">
        <Zap className="h-8 w-8 text-yellow-400 mr-3" />
        <div>
          <p className="text-sm text-gray-400">Available Points</p>
          <p className="text-2xl font-bold text-yellow-400">
            {userPoints !== null ? userPoints : "Loading..."}
          </p>
        </div>
      </div>
      <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 px-4 rounded-full transition-colors">
        <Link href="/pricing">Get More Points</Link>
      </Button>
    </div>
  );
};

export default PointsDisplay;
