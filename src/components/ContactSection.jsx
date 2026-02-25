import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowRight, ChevronDown, CheckCircle2, Loader2, Lock } from 'lucide-react';

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

/* ─── Field style helpers ─── */
const baseCls =
    'w-full px-5 py-4 rounded-xl border text-sm text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all';
const validCls = baseCls + ' border-gray-200';
const invalidCls = baseCls + ' border-red-400 bg-red-50 focus:ring-red-400';
const errCls = 'text-xs text-red-500 mt-1';

/* ─── Google Sheets helper ─── */
const postToSheet = async (payload) => {
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) =>
        params.append(k, v != null ? String(v) : '')
    );
    const res = await fetch(SHEET_URL, { method: 'POST', body: params });
    return res.ok || res.type === 'opaque';
};

const ContactSection = () => {
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

    const cls = (field, extra = '') =>
        (errors[field] ? invalidCls : validCls) + (extra ? ' ' + extra : '');

    const onSubmit = async (data) => {
        setSubmitError('');

        /* Fetch visitor IP */
        let ip = '';
        try {
            const r = await fetch('https://api.ipify.org?format=json');
            const j = await r.json();
            ip = j.ip;
        } catch { /* non-blocking */ }

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
                window.location.href = '/thank-you';
                // navigate('/thank-you');
            } else {
                setSubmitError('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setSubmitError('An error occurred. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">

                {/* Left Image */}
                <div className="w-full md:w-[45%] h-auto">
                    <img
                        src="/assets/contact.jpg"
                        alt="Lawyer in office"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right — Form or Success */}
                <div className="w-full md:w-[55%] p-10 md:p-16">
                    {submitted ? (
                        /* ── Success State ── */
                        <div className="h-full flex flex-col items-center justify-center text-center py-10">
                            <div className="bg-green-50 p-4 rounded-full mb-5">
                                <CheckCircle2 className="w-12 h-12 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-500 text-sm max-w-xs mb-8">
                                Thank you,{' '}
                                <span className="font-semibold text-gray-800">{submittedName}</span>.
                                We&apos;ll be in touch within 24 hours to follow up on your enquiry.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold text-sm transition-colors"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        /* ── Form ── */
                        <>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
                                Get in <span className="text-red-700">Touch for Legal Consultancy</span>
                            </h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

                                {/* Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className={cls('name')}
                                            {...register('name', {
                                                required: 'Name is required',
                                                minLength: { value: 2, message: 'At least 2 characters' },
                                            })}
                                        />
                                        {errors.name && <p className={errCls}>{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your email"
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Your phone number"
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
                                    <div>
                                        <div className="relative">
                                            <select
                                                defaultValue=""
                                                className={cls('service', 'appearance-none pr-10 text-gray-500')}
                                                {...register('service', {
                                                    required: 'Please select a service',
                                                })}
                                            >
                                                <option value="" disabled>Select a service</option>
                                                {SERVICES.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                        {errors.service && <p className={errCls}>{errors.service.message}</p>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        placeholder="Enter your message"
                                        rows={5}
                                        className={cls('message', 'resize-none')}
                                        {...register('message', {
                                            required: 'Please enter your message',
                                            minLength: { value: 10, message: 'At least 10 characters' },
                                        })}
                                    />
                                    {errors.message && <p className={errCls}>{errors.message.message}</p>}
                                </div>

                                {/* Privacy note */}
                                <p className="text-xs text-gray-400 flex items-start gap-1.5">
                                    <Lock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
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
                                    className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-semibold transition-all shadow-sm"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight className="w-5 h-5 bg-white text-red-700 rounded-full p-1 ml-1" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
