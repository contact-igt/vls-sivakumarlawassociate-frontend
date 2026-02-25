const AdvocateSection = () => (
    <section id="about" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">

            {/* Left Image */}
            <div className="w-full md:w-[45%] h-[650px] md:h-auto">
                <img
                    src="/assets/your-advocate.JPG"
                    alt="Lawyer reviewing documents"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[55%] p-10 md:px-16 md:py-15 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    Dr. S. Sivakumar – <br />
                    <span className="text-red-700">Legal & Policy Consultant</span>
                </h2>

                <p className="text-gray-600 text-base leading-relaxed mb-12">
                    <span className="font-bold text-gray-900">Dr. S. Sivakumar</span> is a practicing advocate at the{' '}
                    <span className="font-bold text-gray-900">Madras High Court</span> with{' '}
                    <span className="font-bold text-red-700">24+ years of experience</span> in{' '}
                    <span className="font-bold text-gray-900">civil litigation</span>,{' '}
                    <span className="font-bold text-gray-900">insolvency & bankruptcy</span>,{' '}
                    <span className="font-bold text-gray-900">real estate law</span>,{' '}
                    <span className="font-bold text-gray-900">taxation</span>, and{' '}
                    <span className="font-bold text-gray-900">non-profit organization consultancy</span>.{' '}
                    He also serves as a <span className="font-bold text-gray-900">lead mentor at VLS Law Academy</span>, guiding future advocates in practical legal training and courtroom procedures.{' '}
                    Dr. Sivakumar has successfully handled over <span className="font-bold text-red-700">1800 cases</span> across writ, original, and appellate jurisdictions in the{' '}
                    <span className="font-bold text-gray-900">Madras High Court</span>.
                    {/* <span className="font-bold text-red-700">250+ judicial service aspirants</span> and{' '}
                    <span className="font-bold text-red-700">1200+ civil services candidates</span>. */}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                    <div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">24+</div>
                        <div className="text-sm font-medium text-gray-500">Years of Legal Practice
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">250+</div>
                        <div className="text-sm font-medium text-gray-500">Judicial Service Aspirants</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">1200+</div>
                        <div className="text-sm font-medium text-gray-500">Civil Service Candidates
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AdvocateSection;
