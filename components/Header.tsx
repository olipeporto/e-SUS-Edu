import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  onGoHome: () => void;
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ onGoHome, isHome }) => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button
            className="flex items-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 -ml-1"
            onClick={onGoHome}
            aria-label="Ir para a página inicial"
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-slate-800 tracking-tight">
              e-SUS <span className="text-blue-600">Edu</span>
            </span>
          </button>

          {!isHome && (
            <button
              onClick={onGoHome}
              className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors px-3 py-2 rounded-md hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Voltar ao Menu
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;