import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                         Frequently Asked <br />
                        <span className="text-red-700 mt-2">Questions</span>
                    </h2>
                </div>

                <div className="flex flex-col border-t border-gray-200">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:text-red-700 transition-colors pr-8">
                                    {faq.question}
                                </h3>
                                <div className="text-red-700 flex-shrink-0 transition-transform duration-300">
                                    {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600 text-lg leading-relaxed pr-8">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
