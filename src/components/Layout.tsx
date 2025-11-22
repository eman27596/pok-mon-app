import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-pink-50">
            <header className="bg-white shadow-card sticky top-0 z-50 border-b-2 border-primary-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <span className="text-4xl transition-transform group-hover:scale-110 duration-300">⚡</span>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent">
                                Pokédex
                            </h1>
                        </Link>
                        <nav className="flex space-x-3">
                            <Link
                                to="/"
                                className={`lg:px-5 px-1 lg:py-2.5 py-2 rounded-xl font-semibold  text-xs lg:text-sm transition-all duration-300 ${isActive('/')
                                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-300'
                                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                                    }`}
                            >
                                Page Controls
                            </Link>
                            <Link
                                to="/infinite-scroll"
                                className={`lg:px-5 px-1 lg:py-2.5 py-2 rounded-xl font-semibold  text-xs lg:text-sm transition-all duration-300 ${isActive('/')
                                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-300'
                                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                                }`}
                            >
                            Infinite Scroll
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <footer className="bg-white border-t-2 border-primary-100 mt-12 shadow-inner-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p className="text-gray-600 font-medium">Discover and explore Pokémon with page controls</p>
                    <p className="text-sm text-gray-500 mt-2">Powered by PokéAPI • Built with React + TypeScript</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

