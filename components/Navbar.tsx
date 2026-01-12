import React from 'react';

interface NavbarProps {
  onEditClick: () => void;
  onGoHome: () => void;
  onNavigate: (view: 'home' | 'bmc' | 'pitch-deck' | 'feedback') => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  onEditClick,
  onGoHome,
  onNavigate,
  isAdmin
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={onGoHome}
      >
        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-200 bg-white flex items-center justify-center">
          <img
            src="/picture/Logo.jpg"
            alt="CraveFudge Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <span className="text-2xl font-bold tracking-tight text-slate-800">
          Crave<span className="text-purple-600">Fudge</span>
        </span>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <button onClick={onGoHome} className="hover:text-purple-600">
          Home
        </button>
        <button onClick={() => onNavigate('bmc')} className="hover:text-purple-600">
          BMC
        </button>
        <button onClick={() => onNavigate('pitch-deck')} className="hover:text-purple-600">
          Pitch Deck
        </button>
        <button onClick={() => onNavigate('feedback')} className="hover:text-purple-600">
          Feedback
        </button>
      </div>

      {/* Admin Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onEditClick}
          className={`p-2 rounded-xl transition-all flex items-center gap-2 ${
            isAdmin
              ? 'bg-purple-600 text-white shadow-lg'
              : 'text-slate-700 hover:text-purple-600 bg-slate-50 hover:bg-purple-50'
          }`}
        >
          ✏️
          {isAdmin && <span className="text-xs font-bold pr-1">Admin</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;