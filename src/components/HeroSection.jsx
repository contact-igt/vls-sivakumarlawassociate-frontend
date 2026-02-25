import { Phone, ArrowRight, Scale } from 'lucide-react';

const HeroSection = ({ onBookConsultation }) => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-auto md:min-h-screen flex flex-col lg:flex-row bg-white pt-24 md:pt-0">
            {/* Left Side (Content) */}
            <div className="w-full lg:w-1/2 flex items-center justify-start lg:justify-center p-8 md:p-16 lg:p-24 bg-gray-50">
                <div className="max-w-lg w-full mt-12 md:mt-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-6">
                        <Scale className="w-4 h-4" />
                        <span>Justice, Expertise, Results</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                        Your  Trusted <br />
                        <span className="text-red-700">Legal Consultant</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl font-bold text-gray-900 mb-4 max-w-md leading-tight">
                        Expert in <span className="text-red-700">Insolvency</span>,{' '}
                        <span className="text-red-700">Civil Law</span>, <span className="text-red-700">Real Estate</span>, <span className="text-red-700">Taxation</span> &amp; <span className="text-red-700">Legal Systems</span>
                    </p>
                    <p className="text-base text-gray-700 mb-10 max-w-lg leading-relaxed font-medium">
                        With over <span className="font-bold text-red-700">24 years of experience</span> in the legal domain.<br />
                        <span className="font-bold text-gray-900">Dr. S. Sivakumar</span> is a practicing Advocate at the{' '}
                        <span className="font-bold text-gray-900">Madras High Court</span>.
                        He specializes in<span className="font-bold text-black"> Insolvency & Bankruptcy Law</span>,{' '}
                        <span className="font-bold text-black">Civil Law</span>,<span className="font-bold text-black"> Real Estate Law,</span> <span className="font-bold text-black">Taxation</span> and
                        <span className='font-bold text-black'> Non-Profit Organizations (Trusts & Societies)</span>. Dr. Sivakumar also offers professional mentorship and consultancy services to law students, young advocates, and organizations.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={onBookConsultation} className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all">
                            Get Consultation

                            <ArrowRight className="w-5 h-5 bg-white text-red-700 rounded-full p-1" />
                        </button>
                        <a
                            href="tel:9790089521"
                            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all"
                        >
                            Contact Us

                            <div className="bg-red-100 text-red-700 p-1.5 rounded-full flex items-center justify-center">
                                <Phone className="w-4 h-4" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side (Image) */}
            <div className="w-full lg:w-1/2 flex items-end justify-center bg-gray-200 md:p-0">
                <img
                    src="/assets/mr-shiva-kumar.webp"
                    alt="Professional Lawyer"
                    className="w-full h-auto md:min-h-screen object-contain md:object-cover object-[50%_50%]"
                />
            </div>
        </section>
    );
};

export default HeroSection;
