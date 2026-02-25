import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
    X,
    Scale,
    ArrowRight,
    ChevronDown,
    Shield,
    Lock,
    Clock,
    CheckCircle2,
    Star,
    Award,
    CalendarCheck,
    Loader2,
} from 'lucide-react';

/* ─── Constants ─── */
const SHEET_URL =
    'https://script.google.com/macros/s/AKfycbw-sd5eFdy4Vw6nRRAze11K_8V8qNQc4ULDppQNonsMZDClsiK6827LW0gQ6L8zhifEuw/exec';

const SERVICES = [
    'Legal Consultation',
    'Insolvency & Bankruptcy Advisory',
    'Contractual Disputes Consultation',
    'Corporate & Commercial Legal Advice',
    'Property & Real Estate Legal Advice',
    'Family Law Advisory',
    'General Legal Advisory & Compliance'
];

const TRUST_POINTS = [
    { icon: Shield, text: '100% Confidential' },
    { icon: Lock, text: 'Secure & Private' },
    // { icon: Clock, text: 'Reply in 24 hrs' },
    { icon: Award, text: '20+ Yrs Experience' },
];

/* ─── Style helpers ─── */
const baseCls =
    'w-full px-4 py-3 rounded-xl bg-gray-50 border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all';
const validCls = baseCls + ' border-gray-200';
const invalidCls = baseCls + ' border-red-400 bg-red-50 focus:ring-red-400';
const labelCls = 'text-xs font-semibold text-gray-600 uppercase tracking-wider';
const errCls = 'text-xs text-red-500 mt-1';

/* ─── Google Sheets helper ─── */
const postToSheet = async (payload) => {
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) =>
        params.append(k, v != null ? String(v) : '')
    );
    const res = await fetch(SHEET_URL, { method: 'POST', body: params });
    return res.ok || res.type === 'opaque'; // no-cors returns opaque
};

/* ─── Component ─── */
const BookConsultationModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ mode: 'onTouched' });

    if (!isOpen) return null;

    const handleClose = () => {
        setSubmitted(false);
        setSubmitError('');
        reset();
        onClose();
    };

    const onSubmit = async (data) => {
        setSubmitError('');

        let ip = '';
        try {
            const r = await fetch('https://api.ipify.org?format=json');
            const j = await r.json();
            ip = j.ip;
        } catch {
            // non-blocking
        }

        const payload = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            service: data.service,
            message: data.message,
            ip_address: ip,
            utm_source: localStorage.getItem('utm_source') || 'Direct',
        };

        try {
            const ok = await postToSheet(payload);
            if (ok) {
                setSubmittedName(data.name);
                reset();
                setSubmitted(true);
                // navigate('/thank-you');
                window.location.href = '/thank-you';
            } else {
                setSubmitError('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setSubmitError('An error occurred. Please try again.');
        }
    };

    /* ── Field cls helper ── */
    const cls = (field, extra = '') =>
        (errors[field] ? invalidCls : validCls) + (extra ? ' ' + extra : '');

    return (
        /* ── Backdrop ── */
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
            style={{ backgroundColor: 'rgba(17,24,39,0.70)', backdropFilter: 'blur(6px)' }}
            onClick={handleClose}
        >
            {/* ── Modal Shell ── */}
            <div
                className="
                    relative w-full sm:max-w-4xl bg-white
                    flex flex-col md:flex-row
                    rounded-t-2xl sm:rounded-2xl
                    shadow-2xl overflow-hidden
                    max-h-[95dvh] sm:max-h-[92vh]
                "
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'modalIn 0.32s cubic-bezier(0.34,1.4,0.64,1) both' }}
            >

                {/* ════════════════════════════════════════
                    LEFT PANEL — full on md+, compact on mobile
                ════════════════════════════════════════ */}

                {/* Mobile header strip */}
                <div className="md:hidden relative bg-gray-900 text-white overflow-hidden flex-shrink-0">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-red-700/25 blur-2xl pointer-events-none" />

                    <div className="relative z-10 px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 mt-2">
                            <div className="bg-red-700 p-1.5 rounded-lg">
                                <Scale className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="text-[15.5px] mb-1 font-bold leading-tight">Book Consultation</p>
                                <p className="text-xs text-gray-400 leading-tight">Dr. S. Sivakumar · Legal Consultant</p>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile trust strip */}
                    <div className="relative z-10 m-2 px-5 pb-4 grid grid-cols-2 gap-x-4 gap-y-2">
                        {TRUST_POINTS.map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-1.5">
                                <Icon className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                                <span className="text-xs text-gray-400">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop left panel */}
                <div className="hidden md:flex relative w-[40%] bg-gray-900 text-white p-10 flex-col justify-between overflow-hidden flex-shrink-0">
                    <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-red-700/20 blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-10 w-56 h-56 rounded-full bg-red-700/15 blur-2xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="bg-red-700 p-2 rounded-lg">
                                <Scale className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-gray-300">Dr. S. Sivakumar</span>
                        </div>

                        <h2 className="text-3xl font-bold leading-tight tracking-tight mb-3">
                            Book Your <span className="text-red-500"></span> Legal Consultation
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Share your concerns and receive expert legal guidance tailored to your specific situation.
                        </p>

                        <ul className="space-y-4">
                            {TRUST_POINTS.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 bg-red-700/20 p-1.5 rounded-lg">
                                        <Icon className="w-4 h-4 text-red-400" />
                                    </div>
                                    <span className="text-sm text-gray-300">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-400">
                            Trusted by <span className="text-white font-semibold">500+</span> clients
                        </span>
                    </div>
                </div>

                {/* ════════════════════════════════════════
                    RIGHT PANEL — scrollable form
                ════════════════════════════════════════ */}
                <div className="relative flex flex-col w-full md:w-[60%] overflow-y-auto overscroll-contain">

                    {/* Desktop close */}
                    <button
                        onClick={handleClose}
                        className="hidden md:flex absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-700 text-gray-500 transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="flex-1 px-6 py-7 sm:p-8 md:p-10">
                            <>
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Your Details</h3>
                                    <p className="text-sm text-gray-500">
                                        All fields are required. We handle your data with strict confidentiality.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className={labelCls}>Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Ravi Kumar"
                                                className={cls('name')}
                                                {...register('name', {
                                                    required: 'Name is required',
                                                    minLength: { value: 2, message: 'At least 2 characters' },
                                                })}
                                            />
                                            {errors.name && <p className={errCls}>{errors.name.message}</p>}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className={labelCls}>Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                className={cls('email')}
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: 'Invalid email address',
                                                    },
                                                })}
                                            />
                                            {errors.email && <p className={errCls}>{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    {/* Phone & Service */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className={labelCls}>Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className={cls('phone')}
                                                {...register('phone', {
                                                    required: 'Phone number is required',
                                                    pattern: {
                                                        value: /^[+\d\s\-()]{7,15}$/,
                                                        message: 'Invalid phone number',
                                                    },
                                                })}
                                            />
                                            {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className={labelCls}>Legal Service</label>
                                            <div className="relative">
                                                <select
                                                    className={cls('service', 'appearance-none pr-10')}
                                                    defaultValue=""
                                                    {...register('service', {
                                                        required: 'Please select a service',
                                                    })}
                                                >
                                                    <option value="" disabled>Select a service</option>
                                                    {SERVICES.map((s) => (
                                                        <option key={s} value={s}>{s}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                            </div>
                                            {errors.service && <p className={errCls}>{errors.service.message}</p>}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1">
                                        <label className={labelCls}>Brief Description of Your Case</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Briefly describe your legal matter so we can prepare for the consultation..."
                                            className={cls('message', 'resize-none')}
                                            {...register('message', {
                                                required: 'Please describe your case',
                                                minLength: { value: 10, message: 'At least 10 characters' },
                                            })}
                                        />
                                        {errors.message && <p className={errCls}>{errors.message.message}</p>}
                                    </div>

                                    {/* Privacy note */}
                                    <p className="text-xs text-gray-400 flex items-start gap-1.5">
                                        <Lock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-400" />
                                        Your information is encrypted and will never be shared with third parties.
                                    </p>

                                    {/* Server error */}
                                    {submitError && (
                                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                                            {submitError}
                                        </p>
                                    )}

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-md"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Submitting…
                                            </>
                                        ) : (
                                            <>
                                                <CalendarCheck className="w-4 h-4" />
                                                Book Consultation
                                                <ArrowRight className="w-5 h-5 bg-white text-red-700 rounded-full p-1" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: translateY(24px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0)    scale(1);    }
                }
                @media (min-width: 640px) {
                    @keyframes modalIn {
                        from { opacity: 0; transform: scale(0.93) translateY(12px); }
                        to   { opacity: 1; transform: scale(1)    translateY(0);    }
                    }
                }
            `}</style>
        </div>
    );
};

export default BookConsultationModal;
