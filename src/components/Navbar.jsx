import { useState } from 'react';
import { Scale, CalendarCheck, Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { href: '#about',       label: 'About'       },
    { href: '#service',     label: 'Service'     },
    { href: '#testimonial', label: 'Testimonial' },
    { href: '#contact',     label: 'Contact'     },
];

const Navbar = ({ onBookConsultation }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const close = () => setMenuOpen(false);

    return (
        <nav className="absolute top-0 left-0 right-0 z-20 w-full">
            {/* ── Main bar ── */}
            <div className="flex items-center justify-between py-5 px-5 sm:px-8 max-w-[1360px] mx-auto">

                {/* Logo */}
                <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
                    <Scale className="text-red-700 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    <span className="leading-tight">Sivakumar Law Associates</span>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-700">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a key={href} href={href} className="hover:text-red-700 transition-colors">
                            {label}
                        </a>
                    ))}
                    <button
                        onClick={onBookConsultation}
                        className="flex items-center gap-2 bg-red-700 hover:bg-red-800 active:scale-95 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm"
                    >
                        <CalendarCheck className="w-4 h-4" />
                        Book Consultation
                    </button>
                </div>

                {/* Mobile right side: CTA + hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={onBookConsultation}
                        className="flex items-center gap-1.5 bg-red-700 hover:bg-red-800 text-white px-3.5 py-2 rounded-full text-xs font-semibold transition-all"
                    >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        Book Now
                    </button>
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="p-2 rounded-lg bg-white/80 hover:bg-red-50 text-gray-700 hover:text-red-700 transition-colors border border-gray-200"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown menu ── */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="flex flex-col px-5 py-4 gap-1">
                        {NAV_LINKS.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={close}
                                className="py-3 text-sm font-semibold text-gray-700 hover:text-red-700 border-b border-gray-50 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                        <button
                            onClick={() => { close(); onBookConsultation(); }}
                            className="mt-3 flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
                        >
                            <CalendarCheck className="w-4 h-4" />
                            Book Consultation
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
