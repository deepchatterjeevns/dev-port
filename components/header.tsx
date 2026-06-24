'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/#home', sectionId: 'home' },
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  { label: 'Case Studies', href: '/#case-studies', sectionId: 'case-studies' },
  { label: 'Certifications', href: '/#certifications', sectionId: 'certifications' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
  { label: 'Resume', href: '/resume', sectionId: '' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const sectionIds = ['home', 'projects', 'case-studies', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80;
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (!isHomePage) {
      return pathname === item.href;
    }
    if (item.sectionId) {
      return activeSection === item.sectionId;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? theme === 'dark'
          ? 'bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800'
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-xl font-bold transition-colors ${theme === 'dark'
              ? 'text-white hover:text-emerald-400'
              : 'text-gray-900 hover:text-emerald-600'
              }`}
          >
            DevOps<span className="text-emerald-500">byDC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${isActive(item)
                  ? theme === 'dark'
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-emerald-600 bg-emerald-500/10'
                  : theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                {item.label}
                {isActive(item) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full" />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-lg transition-colors ${theme === 'dark'
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 border-t ${theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'
              }`}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(item)
                    ? theme === 'dark'
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-emerald-600 bg-emerald-500/10'
                    : theme === 'dark'
                      ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
