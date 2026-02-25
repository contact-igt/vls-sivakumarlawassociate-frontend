import { ArrowUpRight } from 'lucide-react';
import { expertiseData } from '../data';

const ExpertiseSection = () => (
    <section id="service" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    My Areas Of <span className="text-red-700">Expertise</span>
                </h2>
            </div>

            <div className="flex flex-col">
                {expertiseData.map((item, index) => (
                    <div
                        key={index}
                        className="group flex flex-col md:flex-row items-start md:items-center py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg cursor-pointer"
                    >
                        {/* Title */}
                        <div className="w-full md:w-2/5 mb-4 md:mb-0 pr-8">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                                {item.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="w-full md:w-1/2 pr-8">
                            <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                        </div>

                        {/* Icon */}
                        <div className="w-full md:w-1/10 flex justify-end mt-4 md:mt-0">
                            <ArrowUpRight
                                className="w-8 h-8 text-gray-400 group-hover:text-red-700 transition-colors"
                                strokeWidth={1.5}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ExpertiseSection;
