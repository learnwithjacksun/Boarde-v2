import { Bell, ChevronLeft, Settings } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/home";
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <nav className="layout flex items-center justify-between h-[70px]">
        {isHome ? (
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        ) : (
          <button
            onClick={() => navigate(-1)}
            className="h-10 w-10 rounded-full bg-primary/10"
          >
            <ChevronLeft />
          </button>
        )}
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 center bg-primary/10 dark:text-primary rounded-full dark:bg-primary/10 relative">
            <Bell size={20} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <Link to="/settings" className="p-3 center">
            <Settings size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
