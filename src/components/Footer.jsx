import { Link } from 'react-router-dom';
import { Scale, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

/* YouTube SVG — lucide dropped this icon due to trademark */
const YouTubeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const Footer = () => (
    <footer className="relative bg-black text-white pt-32 pb-10 overflow-hidden">
        {/* Background Image Overlay */}
        {/* <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=2000"
                alt="Office Background"
                className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-8">
                    Lets Work Together
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/20 pb-8 mb-2">
                <div className="text-3xl font-bold tracking-tight mb-6 md:mb-0 flex items-center gap-2">
                    <Scale className="text-red-600 h-8 w-8" />
                    Sivakumar Law Associates
                </div>
                <div className="flex gap-3">
                    <a
                        href="https://www.facebook.com/profile.php?id=61588323268881"
                        target='_blank'
                        className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors"
                    >
                        <Facebook className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                    </a>
                    <a
                        href="https://www.instagram.com/advocate.sivakumar/"
                        target='_blank'
                        className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors"
                    >
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC_BrR7z2UPCGaK6Gvadk-bw"
                        target='_blank'
                        className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors"
                    >
                        <YouTubeIcon className="w-4 h-4" />
                    </a>
                    <a
                        href="https://x.com/Advo_Sivakumar"
                        target='_blank'
                        className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors"
                    >
                        <Twitter className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                    </a>
                </div>
            </div>

            {/* ── Contact Details ── */}
            <div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-white/20 mb-8 mt-2">
                <a
                    href="tel:9790089521"
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-full bg-red-700/20 border border-red-700/30 flex items-center justify-center group-hover:bg-red-700 transition-colors">
                        <Phone className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone</p>
                        <p className="text-white font-semibold">+91 97900 89521</p>
                    </div>
                </a>
                <a
                    href="mailto:lawsivaias@gmail.com"
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-full bg-red-700/20 border border-red-700/30 flex items-center justify-center group-hover:bg-red-700 transition-colors">
                        <Mail className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                        <p className="text-white font-semibold">lawsivaias@gmail.com</p>
                    </div>
                </a>
                <a
                    href="https://maps.google.com/?q=No.1910,+2nd+Floor,+H+Block,+5th+Street,+11th+Main+Road,+Anna+Nagar+West,+Chennai+600040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-full bg-red-700/20 border border-red-700/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 transition-colors">
                        <MapPin className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Office</p>
                        <p className="text-white font-semibold leading-snug">
                            No. 1910, 2nd Floor, H Block, 5th Street,
                            11th Main Road, Anna Nagar West,<br />
                            Chennai – 600 040, Tamil Nadu
                        </p>
                    </div>
                </a>
            </div>


            {/* ── BCI Disclaimer ── */}
            <div className="mb-10">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
                    {/* Header bar */}
                    <div className="flex items-center gap-3 px-6 py-3 bg-red-700/15 border-b border-red-700/30">
                        <Scale className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <p className="text-xs font-bold text-red-400 uppercase tracking-widest">
                            Bar Council of India — Disclaimer
                        </p>
                    </div>
                    {/* Body */}
                    <div className="px-6 py-5">
                        <p className="text-sm text-gray-400 leading-relaxed">
                            This website is for <span className="text-gray-200 font-bold">informational purposes only</span> and is intended for <span className="text-gray-200 font-bold">professional consultancy</span>. It <span className="text-red-400 font-bold">does not advertise legal services</span> and <span className="text-red-400 font-bold">does not solicit work or clients</span>.
                            In accordance with the rules of the <span className="text-gray-200 font-bold">Bar Council of India</span>, this website <span className="text-red-400 font-bold">does not engage in legal advertising or solicitation</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium">
                <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <Link to="/#about" className="hover:text-white transition-colors">About</Link>
                    <Link to="/#service" className="hover:text-white transition-colors">Service</Link>
                    <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
                    <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
                    <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
                <p>© {new Date().getFullYear()} Sivakumar Law Associates. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;