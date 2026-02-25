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

const PrivacyPolicy = () => (
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
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
                <p className="text-sm text-gray-500">Last updated: <span className="font-semibold text-red-700">February 25, 2026</span></p>
            </div>

            {/* 1 */}
            <Section number="1" title="Introduction">
                <Para className="mb-3">
                    This Privacy Policy outlines how <strong>personal information</strong> may be collected, used, and protected when users access or interact with this website maintained for informational purposes regarding the professional profile and areas of legal expertise of <strong>Adv. S. Sivakumar</strong>, Advocate practicing before the <strong>Hon'ble Madras High Court</strong> and other adjudicating forums.
                </Para>
                <Para>
                    By using this website or submitting any enquiry through available communication channels, you agree to the collection and use of information in accordance with this <strong>Privacy Policy</strong>.
                </Para>
            </Section>

            {/* 2 */}
            <Section number="2" title="Nature of Website Usage">
                <Para className="mb-3">This website is intended solely for:</Para>
                <List items={[
                    <>Providing <strong>general information</strong> about professional qualifications</>,
                    <>Areas of <strong>legal expertise</strong></>,
                    <>Enabling <strong>voluntary consultation requests</strong></>,
                ]} />
                <Para className="mt-4 mb-3">Accessing or using this website:</Para>
                <List items={[
                    <><strong>Does not create an Advocate–Client relationship</strong></>,
                    <><strong>Does not constitute solicitation or advertisement</strong></>,
                    <><strong>Does not amount to legal advice</strong></>,
                ]} />
            </Section>

            {/* 3 */}
            <Section number="3" title="Information That May Be Collected">
                <Para className="mb-3">When users voluntarily submit enquiries through this website, the following information may be collected:</Para>
                <List items={['Name', 'Email Address', 'Contact Number', 'Nature of Enquiry', 'Any information voluntarily shared in message fields']} />
                <Para className="mt-4 mb-3">Additionally, certain <strong>technical information</strong> may be collected automatically, including:</Para>
                <List items={[
                    'Internet Protocol (IP) Address',
                    'Browser Type',
                    'Device Information',
                    'Usage Data such as pages visited and session duration',
                ]} />
            </Section>

            {/* 4 */}
            <Section number="4" title="Use of Personal Information">
                <Para className="mb-3">Personal information submitted through this website may be used <strong>solely for</strong>:</Para>
                <List items={[
                    <>Responding to <strong>consultation enquiries</strong></>,
                    <>Establishing communication regarding requested <strong>professional services</strong></>,
                    <>Maintaining <strong>internal records</strong></>,
                    <>Improving <strong>website functionality</strong> and user experience</>,
                ]} />
                <Para className="mt-4">
                    Personal information will <strong>not</strong> be used for <strong>unsolicited marketing or promotional communication</strong>.
                </Para>
            </Section>

            {/* 5 */}
            <Section number="5" title="Confidentiality of Information">
                <Para className="mb-3">Reasonable steps are taken to maintain <strong>confidentiality</strong> of user information. However:</Para>
                <List items={[
                    <>Users are advised <strong>not to share confidential or sensitive legal information</strong> through online enquiry forms.</>,
                    <>Information shared via electronic communication <strong>may not be fully secure</strong>.</>,
                    <><strong>Adv. S. Sivakumar</strong> shall not be responsible for confidentiality of information shared voluntarily <strong>prior to formal professional engagement</strong>.</>,
                ]} />
            </Section>

            {/* 6 */}
            <Section number="6" title="Sharing of Information">
                <Para className="mb-3">Personal information collected through this website:</Para>
                <List items={[
                    <><strong>Will not be sold or rented</strong> to third parties.</>,
                    <>May be disclosed <strong>only when required</strong> under applicable law, by court order, or by lawful request of government authorities.</>,
                ]} />
            </Section>

            {/* 7 */}
            <Section number="7" title="Data Retention">
                <Para className="mb-3">Personal data shall be retained <strong>only for</strong>:</Para>
                <List items={[
                    <>The period necessary to <strong>respond to user enquiries</strong></>,
                    <>Compliance with applicable <strong>legal obligations</strong></>,
                    'Resolution of disputes, if any',
                ]} />
            </Section>

            {/* 8 */}
            <Section number="8" title="Cookies and Tracking Technologies">
                <Para className="mb-3">This website may use cookies or similar tracking technologies for website performance monitoring, user experience improvement, and analytical purposes.</Para>
                <Para>Users may configure their browser settings to <strong>refuse cookies</strong> if desired.</Para>
            </Section>

            {/* 9 */}
            <Section number="9" title="Security of Information">
                <Para className="mb-3">While commercially reasonable safeguards are implemented to protect personal data:</Para>
                <List items={[
                    <>No method of <strong>electronic transmission or storage is entirely secure</strong>.</>,
                    <><strong>Absolute data security cannot be guaranteed</strong>.</>,
                ]} />
            </Section>

            {/* 10 */}
            <Section number="10" title="External Links">
                <Para className="mb-3">This website may contain links to <strong>third-party websites</strong>. Adv. S. Sivakumar shall not be responsible for the content, privacy practices, or policies of any external websites accessed through such links.</Para>
            </Section>

            {/* 11 */}
            <Section number="11" title="Children's Privacy">
                <List items={[
                    <>This website is <strong>not intended for use by individuals below the age of 18</strong>.</>,
                    <>No personal information is <strong>knowingly collected from minors</strong>.</>,
                ]} />
            </Section>

            {/* 12 */}
            <Section number="12" title="Changes to Privacy Policy">
                <List items={[
                    <>This Privacy Policy may be <strong>updated from time to time</strong>.</>,
                    <>Users are advised to <strong>review this page periodically</strong> for any changes.</>,
                ]} />
            </Section>

            {/* 13 */}
            <Section number="13" title="Governing Law">
                <Para className="mb-3">This Privacy Policy shall be governed by the <strong>laws of India</strong>. Any disputes arising shall be subject to the jurisdiction of:</Para>
                <List items={[<><strong>Courts of Chennai, Tamil Nadu</strong></>]} />
            </Section>

            {/* 14 */}
            <Section number="14" title="Contact Information">
                <Para className="mb-3">For any privacy-related queries or consultation requests:</Para>
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
    </div>
);

export default PrivacyPolicy;
