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
      <div className="fixed bottom-[64px] left-0 right-0 z-40 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-md bg-[#f8faf8] border-t border-gray-100 pb-6 flex flex-col items-center shadow-[0_-15px_20px_-5px_rgba(0,0,0,0.05)]">
          <button
            type="button"
            className="flex items-center justify-center w-14 h-14 bg-white rounded-full border-2 border-default-green shadow-sm active:scale-95 transition-all"
          >
            <Plus size={28} className="text-default-green stroke-[3px]" />
          </button>

          <span className="text-default-green font-semibold text-sm tracking-wide mt-2">
            Add vehicle
          </span>
        </div>
      </div>
    </>
  );
}
