import { Link } from 'react-router-dom';
import {
    Scale,
    Clock,
    Phone,
    Mail,
    ArrowRight,
    Shield,
    Star,
} from 'lucide-react';

const NEXT_STEPS = [
    {
        step: '01',
        title: 'Confirmation Call',
        desc: 'Our team will call you within 24 hours to confirm your consultation slot.',
        icon: Phone,
    },
    {
        step: '02',
        title: 'Case Review',
        desc: 'Dr. Sivakumar will review the details of your case before the session.',
        icon: Shield,
    },
    {
        step: '03',
        title: 'Your Consultation',
        desc: 'Receive clear, structured legal guidance tailored to your situation.',
        icon: Star,
    },
];

const ThankYou = () => {

    return (
        <div className="min-h-screen bg-white flex flex-col">

            {/* ── Navbar ── */}
            <nav className="w-full py-5 px-6 sm:px-10 border-b border-gray-100 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-gray-900 font-bold text-lg tracking-tight">
                    <Scale className="w-5 h-5 text-red-700" />
                    Sivakumar Law Associates
                </Link>
                <Link
                    to="/"
                    className="text-sm font-semibold text-red-700 hover:text-red-800 flex items-center gap-1 transition-colors"
                >
                    Back to Home <ArrowRight className="w-4 h-4" />
                </Link>
            </nav>

            {/* ── Hero ── */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">

                {/* ── Premium animated tick ── */}
                <div className="relative flex items-center justify-center mb-10" style={{ width: 180, height: 180 }}>

                    {/* Layered concentric glow rings */}
                    <div className="absolute inset-0 rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)', animation: 'pulseRing 2.4s ease-in-out infinite' }} />
                    <div className="absolute rounded-full border border-green-200/60"
                        style={{ inset: 8, animation: 'spinSlow 12s linear infinite' }} />
                    <div className="absolute rounded-full border border-green-300/40"
                        style={{ inset: 20, animation: 'spinSlow 8s linear infinite reverse' }} />

                    {/* SVG tick */}
                    <svg viewBox="0 0 160 160" width="160" height="160" style={{ animation: 'fadeUp 0.4s ease both' }}>
                        <defs>
                            <radialGradient id="circleGrad" cx="50%" cy="35%" r="65%">
                                <stop offset="0%" stopColor="#4ade80" />
                                <stop offset="100%" stopColor="#16a34a" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>

                        {/* Outer decorative ring */}
                        <circle cx="80" cy="80" r="74" fill="none" stroke="#bbf7d0" strokeWidth="1.5" strokeDasharray="6 5" />

                        {/* Main filled circle */}
                        <circle cx="80" cy="80" r="58" fill="url(#circleGrad)" filter="url(#glow)"
                            style={{ animation: 'scaleIn 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.1s both', transformOrigin: '80px 80px' }} />

                        {/* Inner highlight ring */}
                        <circle cx="80" cy="80" r="58" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />

                        {/* Animated checkmark stroke */}
                        <polyline
                            points="52,82 70,100 108,62"
                            fill="none"
                            stroke="white"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="80"
                            strokeDashoffset="80"
                            style={{ animation: 'drawTick 0.45s cubic-bezier(0.65,0,0.35,1) 0.5s forwards' }}
                        />
                    </svg>
                </div>

                {/* Heading */}
                <div style={{ animation: 'fadeUp 0.5s 0.15s ease both', opacity: 0 }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-5">
                        <Scale className="w-3.5 h-3.5" />
                        Justice · Expertise · Results
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
                        Thank You for <br className="hidden sm:block" />
                        <span className="text-red-700">Reaching Out!</span>
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-3">
                        Your consultation request has been received. Dr. S. Sivakumar's team will review your case and get in touch shortly.
                    </p>
                    <p className="flex items-center justify-center gap-1.5 text-sm text-gray-400">
                        <Clock className="w-4 h-4 text-red-500" />
                        Typical response time: <span className="font-semibold text-gray-700 ml-1">within 24 hours</span>
                    </p>
                </div>

                {/* Divider */}
                <div className="w-16 h-px bg-gray-200 my-12" />

                {/* ── Next Steps ── */}
                <div style={{ animation: 'fadeUp 0.5s 0.3s ease both', opacity: 0 }} className="w-full max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-700 mb-6">What Happens Next</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                        {NEXT_STEPS.map(({ step, title, desc, icon: Icon }) => (
                            <div
                                key={step}
                                className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
                            >
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-red-700 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    {step}
                                </div>
                                <div className="bg-red-100 p-2 rounded-lg w-fit mb-4">
                                    <Icon className="w-4 h-4 text-red-700" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Contact strip ── */}
                <div
                    style={{ animation: 'fadeUp 0.5s 0.45s ease both', opacity: 0 }}
                    className="mt-12 flex flex-col sm:flex-row items-center gap-4"
                >
                    <a
                        href="mailto:sivakumar@example.com"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-700 transition-colors"
                    >
                        <Mail className="w-4 h-4 text-red-500" />
                        sivakumar@example.com
                    </a>
                    <span className="hidden sm:block w-px h-4 bg-gray-200" />
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-700 transition-colors"
                    >
                        <Phone className="w-4 h-4 text-red-500" />
                        +91 98765 43210
                    </a>
                </div>

                {/* ── CTA ── */}
                <div style={{ animation: 'fadeUp 0.5s 0.55s ease both', opacity: 0 }} className="mt-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 active:scale-95 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-md"
                    >
                        Return to Home
                        <ArrowRight className="w-5 h-5 bg-white text-red-700 rounded-full p-1" />
                    </Link>
                </div>
            </main>

            {/* ── Footer strip ── */}
            <footer className="text-center py-5 text-xs text-gray-400 border-t border-gray-100">
                © {new Date().getFullYear()} Dr. S. Sivakumar | Legal Consultant · All Rights Reserved
            </footer>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0);    }
                }
                @keyframes scaleIn {
                    from { transform: scale(0); opacity: 0; }
                    to   { transform: scale(1); opacity: 1; }
                }
                @keyframes drawTick {
                    to { stroke-dashoffset: 0; }
                }
                @keyframes pulseRing {
                    0%, 100% { transform: scale(1);    opacity: 0.7; }
                    50%      { transform: scale(1.12); opacity: 1;   }
                }
                @keyframes spinSlow {
                    from { transform: rotate(0deg);   }
                    to   { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default ThankYou;
