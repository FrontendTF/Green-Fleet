import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#f8faf8] px-4 pt-8 pb-40">
      <main className="mx-auto max-w-md">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
