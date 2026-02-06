import { Calendar, MapPin, Flag, ChevronDown } from "lucide-react";

export function HistoryCard() {
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

            <div className="absolute bottom-4 right-4 text-gray-400">
                <ChevronDown size={20} />
            </div>
        </div>
    );
}