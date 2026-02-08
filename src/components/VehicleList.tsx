import { ChevronRight, Plus } from "lucide-react";
import vehiclePlaceholder from "../assets/vehicle-placeholder.svg";

export function VehicleListItem() {
  return (
    <>
      <div className="bg-white p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="w-16 h-12 flex-shrink-0 bg-[#f8faf8] rounded-xl overflow-hidden">
          <img
            src={vehiclePlaceholder}
            alt="Vehicle"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <span className="text-lg font-semibold text-gray-900 leading-tight">
            PO 1298F
          </span>
          <span className="text-sm text-gray-500">BMW 318d</span>
        </div>

        <div className="text-gray-300">
          <ChevronRight size={24} />
        </div>
      </div>
      <div className=" plusbuttondiv">
        <button type="button" className="plusbutton">
          <Plus size={28} className="plusbuttonicon" />
        </button>

        <span className="text-default-green font-semibold text-sm tracking-wide mt-2">
          Add vehicle
        </span>
      </div>
    </>
  );
}
