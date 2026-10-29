import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-8"
            style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
            <span>🔐</span>
            Privacy Policy
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-500">Last Updated: October 29, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">

          {/* Privacy principles */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🔐', title: 'Your Data', desc: 'Your personal information belongs to you. We collect only what we need to provide our consultancy services.' },
                { icon: '⚙️', title: 'Your Control', desc: 'You can request access, correction, or deletion of your personal information at any time.' },
                { icon: '✋', title: 'No Selling', desc: 'We never sell your personal information to third parties. Your data is used only to serve you.' },
              ].map(item => (
                <div key={item.title} className="text-center p-4">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                JKAuto (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our auto insurance consultancy platform and services at jkauto.com.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We provide consultancy services related to car selection, auto insurance guidance, and vehicle maintenance planning. This policy describes how we handle the information you share with us in the course of receiving these services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-600 mb-3">When you use our services or contact us, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Vehicle information (make, model, year, current mileage)</li>
                <li>Insurance information (current provider, coverage details)</li>
                <li>Budget and financial preferences related to vehicle decisions</li>
                <li>Geographic location (state/region for insurance requirements)</li>
                <li>Account credentials if you create an account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Mobile Information Sharing</h3>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p className="text-sm font-bold text-red-800 mb-1">No Mobile Data Sharing Policy</p>
                <p className="text-sm text-red-700">
                  <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> All categories of mobile information are excluded from sharing with third-party marketers. We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy, such as providing our consultancy services and communicating with you about your account via alert related text messages.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and general location data</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide personalized auto consultancy services and recommendations</li>
                <li>Respond to your inquiries and consultation requests</li>
                <li>Schedule and manage consultation appointments</li>
                <li>Send service-related communications and follow-ups</li>
                <li>Improve our services and user experience</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. SMS Communications</h2>
              <p className="text-gray-600 mb-4">
                JKAuto may send SMS (text message) communications to users who have opted in. Our SMS program is limited exclusively to <strong>alert related text messages</strong>, which may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Consultation appointment confirmations and reminders</li>
                <li>Account access and onboarding confirmations</li>
                <li>Follow-up information related to your consultancy requests</li>
                <li>Account security and access notifications</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>We do not send marketing or promotional SMS messages.</strong> No mobile information will be shared with or sold to third parties for marketing or promotional purposes.
              </p>
              <p className="text-gray-600 mt-4">
                Message and data rates may apply. Message frequency varies based on account activity. To opt out of SMS notifications at any time, reply <strong>STOP</strong> to any message. For help, reply <strong>HELP</strong> or contact us at <a href="mailto:support@jkauto.com" className="text-blue-600 hover:underline">support@jkauto.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We may share your information with:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.1 Service Providers</h3>
              <p className="text-gray-600">Third-party vendors who perform services on our behalf, such as hosting, analytics, and customer support. These providers are contractually obligated to protect your information and may not use it for their own purposes.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.2 Legal Requirements</h3>
              <p className="text-gray-600">When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights or the safety of others.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.3 Business Transfers</h3>
              <p className="text-gray-600">In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(30,64,175,0.06)', border: '1px solid rgba(30,64,175,0.15)' }}>
                <p className="text-sm text-blue-800 font-semibold">We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Opt out of SMS communications by replying STOP to any message</li>
                <li><strong>Cookies:</strong> Manage cookie preferences through your browser settings</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, contact us at <a href="mailto:support@jkauto.com" className="text-blue-600 hover:underline">support@jkauto.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit (HTTPS/TLS), secure hosting infrastructure, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you request deletion of your account or information, we will delete or anonymize your data within a reasonable timeframe, except where retention is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <div className="glass-card p-6">
                <p className="text-gray-600 mb-2">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@jkauto.com" className="text-blue-600 hover:underline">support@jkauto.com</a></p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> <a href="tel:+15054780022" className="text-blue-600 hover:underline">(505) 478-0022</a></p>
                <p className="text-gray-600"><strong>Address:</strong> 1209 Mountain Rd PL NE, Ste N, Albuquerque, NM 87110</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/terms" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                ← View Terms of Service
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
