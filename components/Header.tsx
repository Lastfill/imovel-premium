import React, { useState } from 'react';
import { Menu, Search, User, Heart, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              {/* Simulated Logo */}
              <div className="w-8 h-8 bg-brand-navy rounded-sm"></div>
              <span className="font-heading font-bold text-xl text-brand-navy tracking-tight">
                BRASIL<span className="font-light">BROKERS</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a href="#" className="font-heading text-sm font-medium text-gray-500 hover:text-brand-blue border-b-2 border-transparent hover:border-brand-green transition-colors pb-1">COMPRAR</a>
              <a href="#" className="font-heading text-sm font-medium text-gray-500 hover:text-brand-blue border-b-2 border-transparent hover:border-brand-green transition-colors pb-1">ALUGAR</a>
              <a href="#" className="font-heading text-sm font-medium text-gray-500 hover:text-brand-blue border-b-2 border-transparent hover:border-brand-green transition-colors pb-1">LANÇAMENTOS</a>
              <a href="#" className="font-heading text-sm font-medium text-gray-500 hover:text-brand-blue border-b-2 border-transparent hover:border-brand-green transition-colors pb-1">BLOG</a>
            </nav>
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-400 hover:text-brand-blue transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-brand-blue transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-blue transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm">Entrar</span>
            </button>
            <button className="bg-brand-green hover:bg-opacity-90 text-white px-4 py-2 rounded text-sm font-bold font-heading uppercase tracking-wide transition-all">
              Anuncie seu Imóvel
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-brand-navy focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-brand-navy hover:bg-gray-50">Comprar</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-brand-navy hover:bg-gray-50">Alugar</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-brand-navy hover:bg-gray-50">Lançamentos</a>
            <div className="border-t border-gray-100 my-2"></div>
            <a href="#" className="block px-3 py-2 text-base font-medium text-brand-blue">Entrar na conta</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
