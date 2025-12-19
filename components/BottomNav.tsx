
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const active = location.pathname;

  const NavItem = ({ to, icon, label, fillOnActive = true }: { to: string, icon: string, label: string, fillOnActive?: boolean }) => {
    const isActive = active === to;
    return (
      <Link to={to} className="flex flex-col items-center justify-center flex-1 h-full py-1">
        <span className={`material-symbols-outlined text-[24px] ${isActive && fillOnActive ? 'filled' : ''}`}>
          {icon}
        </span>
        <span className={`text-[10px] mt-0.5 ${isActive ? 'font-medium text-zinc-900' : 'font-normal text-zinc-600'}`}>
          {label}
        </span>
      </Link>
    );
  };

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 z-50 flex items-center justify-around h-[52px] pb-safe">
      <NavItem to="/" icon="home" label="Home" />
      
      <NavItem to="/shorts" icon="slow_motion_video" label="Shorts" />
      
      <Link to="/upload" className="flex flex-col items-center justify-center flex-1 h-full">
        <div className="flex items-center justify-center w-10 h-10 active:bg-zinc-100 rounded-full transition-colors">
          <span className="material-symbols-outlined text-[34px] font-light">add_circle</span>
        </div>
      </Link>
      
      <NavItem to="/subscriptions" icon="subscriptions" label="Subscriptions" />
      
      <Link to="/profile" className="flex flex-col items-center justify-center flex-1 h-full py-1">
        <div className={`w-6 h-6 rounded-full overflow-hidden border ${active === '/profile' ? 'border-zinc-900 ring-1 ring-zinc-900 ring-offset-1' : 'border-transparent'}`}>
          <img 
            src="https://picsum.photos/seed/me/48/48" 
            className="w-full h-full object-cover" 
            alt="You"
          />
        </div>
        <span className={`text-[10px] mt-0.5 ${active === '/profile' ? 'font-medium text-zinc-900' : 'font-normal text-zinc-600'}`}>
          You
        </span>
      </Link>
    </nav>
  );
};
