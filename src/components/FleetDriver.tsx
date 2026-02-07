import { Plus, Search } from "lucide-react";
import { DriverListItem } from "./DriverList";

export default function DriversTab() {
  const dummyDrivers = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="relative w-full mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a driver ..."
          className="w-full h-12 pl-10 pr-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-default-green transition-all"
        />
      </div>
      <div className="flex flex-col gap-4">
        {dummyDrivers.map((id) => (
          <DriverListItem key={id} />
        ))}
      </div>

      <div className="fixed bottom-[64px] left-0 w-full bg-[#f8faf8] border-t border-gray-100 px-6 pb-6 z-40 flex flex-col items-center shadow-[0_-15px_20px_-5px_rgba(0,0,0,0.05)]">
        <button
          type="button"
          className="flex items-center justify-center w-14 h-14 bg-white rounded-full border-2 border-default-green shadow-sm active:scale-95 transition-all"
        >
          <Plus size={28} className="text-default-green stroke-[3px]" />
        </button>

        <span className="text-default-green font-semibold text-sm tracking-wide mt-2">
          Add driver
        </span>
      </div>
    </>
  );
}
