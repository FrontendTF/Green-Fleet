import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Drive from "./pages/Fleet";
import History from "./pages/History";
import Tasks from "./pages/Reports";
import Settings from "./pages/Settings";

/* Nicht in die App.tsx schreiben sondern in Layout, App.tsx nur für Routing, hätte ich zuerst erstellen sollen
const Fleet = () => <div className="p-10">Fleet</div>
const History = () => <div className="p-10">History</div>
const Reports = () => <div className="p-10">Reports</div>
const Settings = () => <div className="p-10">Settings</div>
*/

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/history" element={<History />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
