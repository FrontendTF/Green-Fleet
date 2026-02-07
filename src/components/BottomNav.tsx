import { NavLink } from "react-router-dom";
import { Home, LifeBuoy, Clock, ClipboardList, Settings } from "lucide-react";

// Navigation items for the bottom navigation bar from https://lucide.dev/icons/
const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/fleet", label: "Fleet", icon: LifeBuoy },
  { to: "/history", label: "History", icon: Clock },
  { to: "/reports", label: "Reports", icon: ClipboardList },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-0">
        <div className="bg-[#f8faf8] shadow-sm ring-1 ring-black/5">
          <ul className="grid grid-cols-5 py-3">
            {items.map(({ to, label, icon: Icon }) => (
              <li key={to} className="flex items-center justify-center">
                <NavLink
                  to={to}
                  className={({}) =>
                    [
                      "flex w-full flex-col items-center justify-center gap-1",
                      "outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-2xl",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={[
                          "flex h-11 w-14 items-center justify-center rounded-full transition",
                          isActive ? "bg-[#e6d8ff]" : "bg-transparent",
                        ].join(" ")}
                      >
                        <Icon
                          className={[
                            "h-6 w-6",
                            isActive ? "text-black" : "text-black/55",
                          ].join(" ")}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span
                        className={[
                          "text-xs font-semibold",
                          isActive
                            ? "text-black"
                            : "text-transparent select-none",
                        ].join(" ")}
                      >
                        {label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
