import { Scale, BookOpen, FileText, Home, Swords, GraduationCap } from 'lucide-react';

const services = [
    {
        icon: Scale,
        title: 'Legal Consultancy',
        label: 'Structured legal advisory for professionals, individuals, and businesses in civil law and insolvency-related matters.',
    },
    {
        icon: BookOpen,
        title: 'Civil Law Advisory',
        label: 'Property, contractual & recovery disputesAdvisory services for property disputes, contractual agreements, and recovery cases.',
    },
    {
        icon: Swords,
        title: 'Insolvency Law Consultation',
        label: 'Legal advisory related to Insolvency and Bankruptcy Code (IBC) proceedings and financial dispute resolution.',
    },
    {
        icon: FileText,
        title: 'Documentation & Legal Review',
        label: 'Assistance in reviewing, drafting, and ensuring compliance in legal documents.',
    },
    {
        icon: Home,
        title: 'Litigation Strategy Support',
        label: 'Helping clients with courtroom preparation and litigation strategies.',
    },
    {
        icon: GraduationCap,
        title: 'Professional Legal Mentorship',
        label: 'Training and professional development for junior advocates and law graduates.',
    },
];

const VideoSection = () => (
    <section className="relative py-28 bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img
                src="/assets/legal-support.png"
                alt="Legal Background"
                className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-red-700/50 text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">
                    Areas of Practice
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Legal Support <span className="text-red-500">Made Simple</span>
                </h2>
                <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
                    Comprehensive legal services delivered with clarity, strategy, and decades of courtroom experience.
                </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={index}
                            className="group relative flex flex-col gap-4 p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-red-700/50 transition-all duration-300 cursor-default"
                        >
                            {/* Top row: icon + number */}
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/30 flex items-center justify-center group-hover:bg-red-700/40 transition-colors">
                                    <Icon className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" strokeWidth={1.5} />
                                </div>
                                <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors leading-none select-none">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors leading-snug">
                                {service.title}
                            </h3>

                            {/* Label */}
                            <p className="text-sm text-gray-400 leading-relaxed">{service.label}</p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-red-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default VideoSection;
