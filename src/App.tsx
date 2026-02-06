import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

const Fleet = () => <div className="p-10">Fleet</div>
const History = () => <div className="p-10">History</div>
const Reports = () => <div className="p-10">Reports</div>
const Settings = () => <div className="p-10">Settings</div>

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 pb-20">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/history" element={<History />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

      </div>

      <Navbar />

    </BrowserRouter>
  );
}

export default App;