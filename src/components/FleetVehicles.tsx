import { Search } from "lucide-react";
import { VehicleListItem } from "../components/VehicleList";

export default function VehiclesTab() {
  const dummyVehicles = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="relative w-full mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a vehicle ..."
          className="searchinput"
        />
      </div>

      <div className="flex flex-col">
        {dummyVehicles.map((id) => (
          <VehicleListItem key={id} />
        ))}
      </div>
    </>
  );
}
