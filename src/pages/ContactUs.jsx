import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Scale, ArrowRight, Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';

const YouTubeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const CONTACT_CARDS = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 97900 89521',
        href: 'tel:9790089521',
        sub: 'Mon – Sat, 9 AM – 6 PM',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'lawsivaias@gmail.com',
        href: 'mailto:lawsivaias@gmail.com',
        sub: 'We respond within 24 hours',
    },
    {
        icon: MapPin,
        label: 'Office',
        value: 'Madras High Court',
        href: 'https://maps.google.com/?q=Madras+High+Court+Chennai',
        sub: 'Chennai, Tamil Nadu – 600 104',
    },
    {
        icon: Clock,
        label: 'Office Hours',
        value: 'Mon – Sat',
        href: null,
        sub: '9:00 AM – 6:00 PM IST',
    },
];

const SOCIALS = [
    { href: 'https://www.facebook.com/profile.php?id=61588323268881', label: 'Facebook', Icon: Facebook },
    { href: 'https://www.instagram.com/advocate.sivakumar/', label: 'Instagram', Icon: Instagram },
    { href: 'https://www.youtube.com/channel/UC_BrR7z2UPCGaK6Gvadk-bw', label: 'YouTube', Icon: YouTubeIcon },
];

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Enquiry from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
        window.location.href = `mailto:lawsivaias@gmail.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">

            {/* ── Nav ── */}
            <nav className="w-full py-5 px-6 sm:px-10 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-20 shadow-sm">
                <Link to="/" className="flex items-center gap-2 text-gray-900 font-bold text-lg tracking-tight">
                    <Scale className="w-5 h-5 text-red-700" />
                    Sivakumar Law Associates
                </Link>
                <Link to="/" className="text-sm font-semibold text-red-700 hover:text-red-800 flex items-center gap-1 transition-colors">
                    Back to Home <ArrowRight className="w-4 h-4" />
                </Link>
            </nav>

            {/* ── Hero Banner ── */}
            <div className="bg-black text-white py-16 px-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-700/20 border border-red-700/30 text-red-400 text-xs font-semibold mb-5">
                    <Scale className="w-3.5 h-3.5" />
                    Get in Touch
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                    Contact <span className="text-red-500">Us</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                    Reach out for a consultation or any enquiry. Dr. Sivakumar's team will respond within <span className="text-white font-semibold">24 hours</span>.
                </p>
            </div>

            <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-14">

                {/* ── Contact Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {CONTACT_CARDS.map(({ icon: Icon, label, value, href, sub }) => (
                        <div key={label} className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all text-left">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                                <Icon className="w-5 h-5 text-red-700 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-1">{label}</p>
                            {href ? (
                                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                                    className="font-bold text-gray-900 hover:text-red-700 transition-colors text-sm block mb-1">
                                    {value}
                                </a>
                            ) : (
                                <p className="font-bold text-gray-900 text-sm mb-1">{value}</p>
                            )}
                            <p className="text-xs text-gray-500">{sub}</p>
                        </div>
                    ))}
                </div>

                {/* ── Form + Map ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Enquiry Form */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Send an Enquiry</h2>
                        <p className="text-sm text-gray-500 mb-6">Fill out the form below and we'll be in touch shortly.</p>

                        {sent ? (
                            <div className="text-center py-12">
                                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-6 h-6 text-red-700" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">Message sent!</h3>
                                <p className="text-sm text-gray-500">Thank you, we'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-700/30 focus:border-red-700 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-700/30 focus:border-red-700 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your legal matter..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-700/30 focus:border-red-700 transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 active:scale-95 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md"
                                >
                                    Send Enquiry
                                    <ArrowRight className="w-5 h-5 bg-white text-red-700 rounded-full p-1" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Map + Socials */}
                    <div className="flex flex-col gap-5">
                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-1 min-h-[280px]">
                            <iframe
                                title="Madras High Court Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.393894671878!2d80.27295431482244!3d13.054832990793776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526614c8b3b9eb%3A0x72e1b78f6c9c9b4!2sMadras%20High%20Court!5e0!3m2!1sen!2sin!4v1677000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ minHeight: 280, border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="bg-black rounded-2xl p-6">
                            <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">Follow Us</p>
                            <div className="flex gap-3">
                                {SOCIALS.map(({ href, label, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                                Stay updated with legal insights, case updates, and important announcements from Dr. Sivakumar.
                            </p>
                        </div>
                    </div>
                </div>

                {/* BCI Box */}
                <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-3 bg-red-700/10 border-b border-red-200">
                        <Scale className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <p className="text-xs font-bold text-red-700 uppercase tracking-widest">Bar Council of India — Disclaimer</p>
                    </div>
                    <div className="px-6 py-5">
                        <p className="text-sm text-gray-600 leading-relaxed">
                            This website is for <strong className="text-gray-900">informational purposes only</strong>. Contacting us does not create an advocate-client relationship. It <strong className="text-red-700">does not advertise legal services</strong> and <strong className="text-red-700">does not solicit work or clients</strong>.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactUs;
