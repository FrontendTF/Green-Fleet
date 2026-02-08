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
          className="searchinput"
        />
      </div>
      <div className="flex flex-col gap-4">
        {dummyDrivers.map((id) => (
          <DriverListItem key={id} />
        ))}
      </div>

      <div className="plusbuttondiv">
        <button type="button" className="plusbutton">
          <Plus size={28} className="plusbuttonicon" />
        </button>

        <span className="text-default-green font-semibold text-sm tracking-wide mt-2">
          Add driver
        </span>
      </div>
    </>
  );
}
