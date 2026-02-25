import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star, User } from 'lucide-react';

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'Law Student, VLS Academy',
        image: '',
        text: 'Dr. Sivakumar’s mentorship helped me transition from law school to real court practice with ease. His approach to teaching is practical and hands-on.',
        rating: 5,
    },
    {
        name: 'Priya Venkatesh',
        role: 'Real Estate Developer',
        image: '',
        text: 'With Dr. Sivakumar’s legal guidance, our real estate projects were handled efficiently, ensuring that we were always compliant and ahead of the competition.',
        rating: 5,
    },
    // {
    //     name: 'Arun Prakash',
    //     role: 'Law Graduate',
    //     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    //     text: 'As a young advocate, the mentorship I received through the Decoding of Law Practice program was invaluable. It bridged the gap between law school and actual courtroom practice.',
    //     rating: 5,
    // },
    // {
    //     name: 'Meena Sundaram',
    //     role: 'Retired Teacher',
    //     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    //     text: 'Dr. Sivakumar guided me through a complex insolvency matter with patience and professionalism. His experience in the Madras High Court made all the difference in my case.',
    //     rating: 5,
    // },
];

const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

    const t = testimonials[current];

    return (
        <section id="testimonial" className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                            Client <span className="text-red-700">Reviews</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-md">
                            Real Stories from Those Who’ve Worked with Me.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prev}
                            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-red-700 hover:text-red-700 hover:bg-red-50 transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-bold text-gray-900 min-w-[3rem] text-center tabular-nums">
                            {String(current + 1).padStart(2, '0')}{' '}
                            <span className="text-gray-300 font-normal">/ {String(testimonials.length).padStart(2, '0')}</span>
                        </span>
                        <button
                            onClick={next}
                            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-red-700 hover:text-red-700 hover:bg-red-50 transition-all"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="relative bg-gray-50 rounded-3xl border border-gray-100 p-10 md:p-14">
                    {/* Large quote watermark */}
                    <Quote
                        className="absolute top-8 right-10 w-24 h-24 text-red-700/[0.06]"
                        fill="currentColor"
                    />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-red-700 fill-red-700" />
                        ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-3xl relative z-10">
                        "{t.text}"
                    </p>

                    {/* Author row */}
                    <div className="flex items-center gap-4 relative z-10">
                        {/* <img
                            src={t.image}
                            alt={t.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-red-700/20"
                        /> */}
                        <div>
                            <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center text-white font-bold">
                                {t.name.charAt(0)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-base">{t.name}</h4>
                            <p className="text-gray-500 text-sm">{t.role}</p>
                        </div>
                        {/* <div className="hidden sm:block ml-auto">
                            <div className="w-10 h-1 bg-red-700 rounded-full"></div>
                        </div> */}
                    </div>

                    {/* Slide indicator dots */}
                    <div className="flex gap-2 justify-center mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-red-700' : 'w-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
