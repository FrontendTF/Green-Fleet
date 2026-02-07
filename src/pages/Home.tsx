import { TrackButton } from "../components/TrackButton";
import vehiclePlaceholder from "../assets/vehicle-placeholder.svg";
import profilePlaceholder from "../assets/profile-picture-placeholder.svg";
import { Play } from "lucide-react";

// In Typescript immer mit export default function
export default function Home() {
  return (
    <main>
      <header className="mb-8 flex items-center gap-4 justify-center">
        <div className="flex-shrink-0">
          <img
            src={profilePlaceholder}
            alt="Profile Picture Placeholder"
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>

        <div>
          <h1 className="text-2xl">Welcome, Olaf</h1>
        </div>
      </header>

      {/* Vehicle */}
      <section>
        <h3 className="text-xl font-medium mb-4">Available vehicle</h3>

        <div className="flex items-start gap-6">
          <div className="w-1/3 flex flex-col items-center gap-3">
            <img
              src={vehiclePlaceholder}
              alt="Vehicle Placeholder"
              className="w-full h-auto object-contain"
            />

            <button className="w-full py-2 bg-white text-default-green text-sm font-semibold rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              Choose vehicle
            </button>
          </div>

          <div className="flex flex-col">
            <span className="text-xl  text-gray-900 leading-tight">
              PO 1298F
            </span>
            <span className="text-sm font-medium text-gray-500">BMW 318d</span>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <TrackButton
          label="Start tracking"
          onClick={() => console.log("Start ride")}
          variant="primary"
          icon={Play}
        />
      </div>
    </main>
  );
}
