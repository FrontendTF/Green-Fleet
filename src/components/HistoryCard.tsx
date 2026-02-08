import { Calendar, MapPin, Flag, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function HistoryCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 relative">
      <div className="flex items-start gap-4 mb-4">
        <span className="text-lg font-bold text-gray-900 bg-green-300 px-3 py-1 rounded-lg">
          PO 1298F
        </span>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">BMW 318d</span>
          <span className="text-xs text-gray-500">135 g/km CO2</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Calendar size={30} className="text-default-green" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-gray-400" />
            <span className="text-xs text-gray-600">Wien</span>
          </div>
          <div className="flex items-center gap-2">
            <Flag size={14} className="text-gray-400" />
            <span className="text-xs text-gray-600">Prag</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Details ausblenden" : "Details anzeigen"}
        className="absolute bottom-4 top-20 right-4 h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
      >
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-1">
          <div>Driver: Markus Rossmann</div>
          <div>Start: Wien, 8700 Graz, Weggasse 2</div>
          <div>End: Prag, 8700 Wien, Weggasse 2</div>
          <div>Distance: 116 km</div>
          <div>Duration: 1h</div>
          <div>Idle: 1h</div>
        </div>
      )}
    </div>
  );
}
