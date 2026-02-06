import { Search } from "lucide-react";
import { Plus } from "lucide-react";
import { VehicleListItem } from "../components/VehicleList";

export default function Vehicles() {
  const dummyVehicles = [1, 2, 3, 4, 5, 6];

  return (
    <main className="min-h-screen bg-[#f8faf8] px-4 pt-8 pb-32">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Fleet
      </h1>

      <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-2">
        <button
          className="text-lg font-semibold text-default-green border-b-2 border-default-green pb-2 -mb-[10px]">
          Vehicles
        </button>

        <button
          className="text-lg font-medium text-gray-400 hover:text-gray-600 transition-colors pb-2">
          Drivers
        </button>
      </div>

      <div className="relative w-full mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a vehicle ..."
          className="w-full h-12 pl-10 pr-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-default-green transition-all" />
      </div>

      <div className="flex flex-col">
        {dummyVehicles.map((item) => (<VehicleListItem key={item} />))}
      </div>

      <div className="fixed bottom-[64px] left-0 w-full bg-white border-t border-gray-100 px-6 pt-4 pb-6 z-40 flex flex-col items-center shadow-[0_-15px_20px_-5px_rgba(0,0,0,0.05)]">
        <button
          className="flex items-center justify-center w-14 h-14 bg-white rounded-full border-2 border-default-green shadow-sm active:scale-95 transition-all">
          <Plus
            size={28}
            className="text-default-green stroke-[3px]" />
        </button>

        <span className="text-default-green font-semibold text-sm tracking-wide mt-2">
          Add vehicle
        </span>
      </div>

    </main>
  );
}