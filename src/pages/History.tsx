import { Search } from "lucide-react";
import { HistoryCard } from "../components/HistoryCard";

export default function History() {
  const dummyHistory = [1, 2, 3, 4];

  return (
    <main className="min-h-screen bg-[#f8faf8] px-4 pt-8 pb-32">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        History
      </h1>

      <div className="relative w-full mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          placeholder="Filter ..."
          className="w-full h-12 pl-10 pr-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-default-green transition-all" />
      </div>

      <div className="flex flex-col gap-1">
        {dummyHistory.map((item) => (<HistoryCard key={item} />))}
      </div>
    </main>
  );
}