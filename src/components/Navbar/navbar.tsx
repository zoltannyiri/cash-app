import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { path } from 'framer-motion/client';
// import { path } from 'framer-motion/client';
// import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', name: 'Kezdőlap', icon: '🏠', path: '/home' },
        { id: 'about', name: 'Rólunk', icon: '🌟', path: '/about' },
        { id: 'services', name: 'Szolgáltatások', icon: '🛠️', path: '/services' },
        { id: 'portfolio', name: 'Portfólió', icon: '🎨', path: '/portfolio' },
        { id: 'contact', name: 'Kapcsolat', icon: '📩', path: '/contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gradient-to-r from-purple-900 via-pink-700 to-rose-600 shadow-2xl' : 'bg-transparent'}`}>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo rész - extra design elemekkel */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-0 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            <span className="hover:rotate-45 transition-transform">⚡</span>
                        </div>
                        <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-400 tracking-tight">
                            Design<span className="text-white">Mágia</span>
                        </span>
                    </motion.div>

                    {/* Desktop navigáció - extra effektekkel */}
                    <nav className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to={item.path}
                                    onClick={() => setActiveLink(item.id)}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeLink === item.id
                                            ? 'bg-white text-purple-900 shadow-lg'
                                            : 'text-black hover:bg-white/20 hover:shadow-md'
                                        }`}
                                >
                                    <span className="mr-2">{item.icon}</span>
                                    {item.name}
                                    {activeLink === item.id && (
                                        <motion.span
                                            layoutId="activeLink"
                                            className="absolute inset-0 rounded-full border-2 border-white/30"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>


                    {/* Extra CTA gomb */}
                    <div className="hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(236, 72, 153, 0.7)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10 cursor-pointer">Kapcsolat</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </motion.button>
                    </div>

                    {/* Mobil menü gomb */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none transition-all"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Főmenü megnyitása</span>
                            {!isOpen ? (
                                <motion.div
                                    animate={{ rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </motion.div>
                            ) : (
                                <motion.div
                                    animate={{ rotate: 180 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobil menü - extra animációkkal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-4 space-y-1 bg-gradient-to-b from-purple-900 to-pink-800 shadow-xl">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        onClick={() => {
                                            setActiveLink(item.id);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center px-3 py-3 rounded-md text-base font-medium ${activeLink === item.id
                                                ? 'bg-white text-purple-900'
                                                : 'text-white hover:bg-white/20'
                                            }`}
                                    >
                                        <span className="mr-3 text-lg">{item.icon}</span>
                                        {item.name}
                                    </button>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                className="pt-2"
                            >
                                <button className="w-full flex items-center justify-center px-4 py-3 rounded-md bg-gradient-to-r from-amber-400 to-pink-500 text-white font-bold shadow-lg">
                                    Kapcsolat
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Extra design elem - vízszintes csík animáció */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70"
            />
        </header>
    );
};

export default Navbar;