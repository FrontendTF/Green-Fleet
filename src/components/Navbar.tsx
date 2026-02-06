import { NavLink } from 'react-router-dom';
import HomeIcon from '../assets/icons/home.svg';
import WheelIcon from '../assets/icons/steering-wheel.svg';
import HistoryIcon from '../assets/icons/history.svg';
import ReportIcon from '../assets/icons/reports.svg';
import SettingsIcon from '../assets/icons/settings.svg';

export const Navbar = () => {

    const linkClasses = ({ isActive }: { isActive: boolean }) => {
        return `flex flex-col items-center justify-center w-full h-full transition-colors duration-200 
    ${isActive ? 'bg-blue-50 border-t-2 border-blue-500' : 'text-gray-500 hover:bg-gray-50'}`;
    };

    return (
        <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 flex justify-between items-center z-50">

            <NavLink to="/" className={linkClasses}>
                <img src={HomeIcon} alt="Home" className="w-6 h-6" />
                <span className="text-xs mt-1">Home</span>
            </NavLink>

            <NavLink to="/fleet" className={linkClasses}>
                <img src={WheelIcon} alt="Fleet" className="w-6 h-6" />
                <span className="text-xs mt-1">Fleet</span>
            </NavLink>

            <NavLink to="/history" className={linkClasses}>
                <img src={HistoryIcon} alt="History" className="w-6 h-6" />
                <span className="text-xs mt-1">History</span>
            </NavLink>

            <NavLink to="/reports" className={linkClasses}>
                <img src={ReportIcon} alt="Reports" className="w-6 h-6" />
                <span className="text-xs mt-1">Reports</span>
            </NavLink>

            <NavLink to="/settings" className={linkClasses}>
                <img src={SettingsIcon} alt="Settings" className="w-6 h-6" />
                <span className="text-xs mt-1">Settings</span>
            </NavLink>

        </nav>
    );
};