import React from 'react';
import { Scale, GraduationCap, Briefcase } from 'lucide-react';

const achievements = [
    {
        title: 'Adjudication Experience',
        description: '24+ years of experience in Madras High Court, handling writ, original, and appellate matters.',
        icon: Scale,
    },
    {
        title: 'Mentorship Legacy',
        description: 'Successfully guided 250+ judicial aspirants and 1200+ civil service candidates.',
        icon: GraduationCap,
    },
    {
        title: 'Consultancy Work',
        description: 'Expertise in IBC, real estate law, tax law, and non-profit organizations.',
        icon: Briefcase,
    },
];

const AchievementSection = () => (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                    Professional <span className="text-red-700">Achievements</span>
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    A glimpse into a legacy of legal excellence, professional mentorship, and strategic consultancy spanning over two decades.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-red-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/5 flex flex-col items-center text-center"
                    >
                        {/* Icon Container */}
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="w-8 h-8 text-red-700" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            {item.description}
                        </p>

                        {/* Background subtle decoration */}
                        <div className="absolute top-0 right-0 -m-2 w-24 h-24 bg-red-100/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default AchievementSection;
