import { Link } from 'react-router-dom';
import { Scale, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Section = ({ number, title, children }) => (
    <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{number}. {title}</h2>
        {children}
    </section>
);

const List = ({ items }) => (
    <ul className="list-disc list-outside pl-6 space-y-1.5 text-gray-700 text-sm sm:text-base leading-relaxed">
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
);

const SubList = ({ items }) => (
    <ul className="list-disc list-outside pl-10 space-y-1 text-gray-700 text-sm sm:text-base leading-relaxed mt-1.5">
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
);

const Para = ({ children, className = '' }) => (
    <p className={`text-gray-700 text-sm sm:text-base leading-relaxed ${className}`}>{children}</p>
);

const TermsAndConditions = () => (
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

        {/* ── Document Body ── */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-0 sm:px-12 py-14">

            {/* Title */}
            <div className="text-center mb-12 border-b border-gray-200 pb-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Terms and Conditions</h1>
                <p className="text-sm text-gray-500">Last updated: <span className="font-semibold text-red-700">February 25, 2026</span></p>
            </div>

            {/* 1 */}
            <Section number="1" title="General Information">
                <Para className="mb-3">
                    This website is maintained for the purpose of providing <strong>general information</strong> regarding the professional background and areas of legal expertise of <br /><strong>Adv. S. Sivakumar</strong>, Advocate practicing before the <strong>Hon'ble Madras High Court</strong> and other adjudicating forums.
                </Para>
                <Para className="mb-4">
                    The content provided on this website is for <strong>informational purposes only</strong> and shall not be construed as <strong>legal advice</strong> or <strong>solicitation of legal services</strong>.
                </Para>
                <Para className="mb-3">By accessing or using this website, you acknowledge that:</Para>
                <List items={[
                    <>You are seeking information <strong>voluntarily</strong>.</>,
                    <>There has been <strong>no form of solicitation, advertisement, or inducement</strong> by the Advocate or this website.</>,
                    <>Use of this website <strong>does not create an Advocate–Client relationship</strong>.</>,
                ]} />
            </Section>

            {/* 2 */}
            <Section number="2" title="No Legal Advice">
                <Para className="mb-3">The information provided on this website:</Para>
                <List items={[
                    <>Is <strong>general in nature</strong>.</>,
                    <><strong>Does not constitute legal opinion or advice</strong>.</>,
                    <>Should <strong>not</strong> be relied upon as a <strong>substitute for professional consultation</strong>.</>,
                ]} />
                <Para className="mt-4">
                    Users are advised to obtain <strong>independent legal advice</strong> for their specific matters before acting on any information available on this website.
                </Para>
            </Section>

            {/* 3 */}
            <Section number="3" title="Consultation Requests">
                <Para className="mb-3">Submission of any enquiry through contact forms, email, or phone communication does <strong>not</strong> automatically create:</Para>
                <List items={[
                    <>An <strong>Advocate–Client relationship</strong></>,
                    <>Any <strong>professional engagement</strong></>,
                    <>Any <strong>legal obligation</strong> on the part of the Advocate</>,
                ]} />
                <Para className="mt-4 mb-3">Such relationship shall arise <strong>only upon</strong>:</Para>
                <List items={[
                    <><strong>Formal consultation</strong>, and</>,
                    <><strong>Mutual agreement</strong> of professional engagement</>,
                ]} />
            </Section>

            {/* 4 */}
            <Section number="4" title="Confidentiality">
                <Para className="mb-3">While reasonable steps are taken to maintain <strong>confidentiality</strong> of information shared through this website:</Para>
                <List items={[
                    <>Users are advised <strong>not to submit confidential or sensitive information</strong> through online forms unless specifically requested after consultation.</>,
                    <>Transmission of information via internet communication <strong>may not be completely secure</strong>.</>,
                ]} />
            </Section>

            {/* 5 */}
            <Section number="5" title="No Guarantee of Outcome">
                <Para className="mb-3">Professional legal consultation and advisory services:</Para>
                <List items={[
                    <><strong>Do not guarantee specific legal outcomes</strong>.</>,
                    <>Are subject to <strong>judicial processes, applicable law</strong>, and <strong>factual circumstances</strong> of each case.</>,
                ]} />
                <Para className="mt-4">
                    <strong>Adv. S. Sivakumar</strong> shall not be liable for any decision taken by users based solely on information obtained through this website.
                </Para>
            </Section>

            {/* 6 */}
            <Section number="6" title="Limitation of Liability">
                <Para className="mb-3"><strong>Adv. S. Sivakumar</strong> shall not be held responsible for:</Para>
                <List items={[
                    <>Any <strong>indirect or consequential loss</strong> arising from use of this website.</>,
                    <>Any <strong>technical issues or temporary unavailability</strong> of website services.</>,
                    <><strong>Decisions taken by users without formal consultation</strong>.</>,
                ]} />
            </Section>

            {/* 7 */}
            <Section number="7" title="Intellectual Property">
                <Para className="mb-3">All content on this website — including text, design, layout, and professional profile — is the <strong>intellectual property of the website owner</strong> and shall not be reproduced, distributed, or shared without <strong>prior written consent</strong>.</Para>
            </Section>

            {/* 8 */}
            <Section number="8" title="Governing Law">
                <Para className="mb-3">These Terms and Conditions shall be governed by the <strong>laws of India</strong>. Any disputes arising out of use of this website shall be subject to the exclusive jurisdiction of:</Para>
                <List items={[<><strong>Courts of Chennai, Tamil Nadu</strong></>]} />
            </Section>

            {/* 9 */}
            <Section number="9" title="Contact Information">
                <Para className="mb-3">For consultation requests or professional enquiries:</Para>
                <List items={[
                    <><strong>Email:</strong> <a href="mailto:lawsivaias@gmail.com" className="text-red-700 hover:underline font-semibold">lawsivaias@gmail.com</a></>,
                    <><strong>Phone:</strong> <a href="tel:9790089521" className="text-red-700 hover:underline font-semibold">+91 97900 89521</a></>,
                ]} />
            </Section>

            {/* BCI Notice */}
            <div className="rounded-xl border border-red-200 bg-red-50 overflow-hidden mb-12">
                <div className="flex items-center gap-3 px-6 py-3 bg-red-700/10 border-b border-red-200">
                    <Scale className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-xs font-bold text-red-700 uppercase tracking-widest">Bar Council of India — Disclaimer</p>
                </div>
                <div className="px-6 py-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        This website is for <strong className="text-gray-900">informational purposes only</strong> and intended for <strong className="text-gray-900">professional consultancy</strong>. It <strong className="text-red-700">does not advertise legal services</strong> and <strong className="text-red-700">does not solicit work or clients</strong>.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <Link to="/" className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 active:scale-95 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-md">
                    Return to Home
                    <ArrowRight className="w-5 h-5 bg-white text-red-700 rounded-full p-1" />
                </Link>
            </div>
        </main>

        <Footer />
    </div >
);

export default TermsAndConditions;
