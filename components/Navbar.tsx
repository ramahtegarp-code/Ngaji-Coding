
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Profil', href: '/' },
    { label: 'Tujuan', href: '/tujuan' },
    { label: 'Founder', href: '/founder' },
    { label: 'Materi', href: '/materi' },
    { label: 'Instal App', href: '/#install' },
  ];

  const handleScrollToInstall = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/#install') {
      setIsOpen(false);
      if (location.pathname !== '/') {
        // Redirect to home first if not on home page
        return;
      }
      e.preventDefault();
      const element = document.getElementById('install');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-primary tracking-tight">Ngaji<span className="text-secondary">Coding</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollToInstall(e, item.href)}
                  className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-primary' : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollToInstall(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
