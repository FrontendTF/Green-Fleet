import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/icons/home.svg";
import SteeringWheel from "../assets/icons/steering-wheel.svg";
import HistoryIcon from "../assets/icons/history.svg";
import ReportIcon from "../assets/icons/reports.svg";
import SettingsIcon from "../assets/icons/settings.svg";

const items = [
  { to: "/", label: "Home", imgSrc: HomeIcon },
  { to: "/fleet", label: "Fleet", imgSrc: SteeringWheel },
  { to: "/history", label: "History", imgSrc: HistoryIcon },
  { to: "/reports", label: "Reports", imgSrc: ReportIcon },
  { to: "/settings", label: "Settings", imgSrc: SettingsIcon },
] as const;

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-0">
        <div className="bg-[#f8faf8] shadow-sm ring-1 ring-black/5">
          <ul className="grid grid-cols-5 py-3">
            {items.map((item) => (
              <li key={item.to} className="flex items-center justify-center">
                <NavLink
                  to={item.to}
                  className={[
                    "flex w-full flex-col items-center justify-center gap-1",
                    "outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-2xl",
                  ].join(" ")}
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={[
                          "flex h-11 w-14 items-center justify-center rounded-full transition",
                          isActive ? "bg-[#e6d8ff]" : "bg-transparent",
                        ].join(" ")}
                      >
                        <img
                          src={item.imgSrc}
                          alt=""
                          className={[
                            "h-6 w-6",
                            isActive ? "opacity-100" : "opacity-55",
                          ].join(" ")}
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
                        {item.label}
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
