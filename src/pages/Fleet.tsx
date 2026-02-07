import { useState } from "react";
import VehiclesTab from "../components/FleetVehicles";
import DriversTab from "../components/FleetDriver";

type FleetTab = "vehicles" | "drivers";

export default function Fleet() {
  const [tab, setTab] = useState<FleetTab>("vehicles");
  const isVehicles = tab === "vehicles";

  return (
    <main>
      <h1>Fleet</h1>

      <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-2">
        <button
          type="button"
          onClick={() => setTab("vehicles")}
          className={[
            "text-lg pb-2 -mb-[10px]",
            isVehicles
              ? "font-semibold text-default-green border-b-2 border-default-green"
              : "font-medium text-gray-400 hover:text-gray-600 transition-colors",
          ].join(" ")}
        >
          Vehicles
        </button>

        <button
          type="button"
          onClick={() => setTab("drivers")}
          className={[
            "text-lg pb-2 -mb-[10px]",
            !isVehicles
              ? "font-semibold text-default-green border-b-2 border-default-green"
              : "font-medium text-gray-400 hover:text-gray-600 transition-colors",
          ].join(" ")}
        >
          Drivers
        </button>
      </div>

      {isVehicles ? <VehiclesTab /> : <DriversTab />}
    </main>
  );
}
