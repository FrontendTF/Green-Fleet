import { ChevronRight } from "lucide-react";
import driverPlaceholder from "../assets/profile-picture-placeholder.svg";

export function DriverListItem() {
  return (
    <div className="bg-white p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="w-16 h-12 flex-shrink-0 bg-[#f8faf8] rounded-xl overflow-hidden">
        <img
          src={driverPlaceholder}
          alt="Vehicle"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-lg font-semibold text-gray-900 leading-tight">
          Cruz, Essie
        </span>
        <span className="text-sm text-gray-500">Regional Sales Manager</span>
      </div>

      <div className="text-gray-300">
        <ChevronRight size={24} />
      </div>
    </div>
  );
}
