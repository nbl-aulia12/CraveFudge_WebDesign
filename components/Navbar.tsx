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
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-200">
          C
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-800">
          Crave<span className="text-purple-600">Fudge</span>
        </span>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <button
          onClick={onGoHome}
          className="hover:text-purple-600 transition-colors"
        >
          Home
        </button>

        <button
          onClick={() => onNavigate('bmc')}
          className="hover:text-purple-600 transition-colors"
        >
          BMC
        </button>

        <button
          onClick={() => onNavigate('pitch-deck')}
          className="hover:text-purple-600 transition-colors"
        >
          Pitch Deck
        </button>

        <button
          onClick={() => onNavigate('feedback')}
          className="hover:text-purple-600 transition-colors"
        >
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
          title="Edit Website Content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
          {isAdmin && (
            <span className="text-xs font-bold pr-1">Admin</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;