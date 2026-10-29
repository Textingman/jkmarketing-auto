import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-8"
            style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
            <span>📋</span>
            Terms of Service
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-500">Last Updated: October 29, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the JKAuto consultancy platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              These Terms apply to all users of the Service, including individuals seeking consultancy on car selection, auto insurance, and vehicle maintenance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              JKAuto provides consultancy services related to automotive decisions, including guidance on selecting vehicles, comparing auto insurance options, and planning vehicle maintenance. Our services are informational and advisory in nature. We do not sell vehicles, insurance policies, or automotive parts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Consultancy Nature of Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our consultancy services are provided for informational and educational purposes. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Our guidance does not constitute legal, financial, or professional advice</li>
              <li>Final decisions regarding vehicle purchases, insurance selection, and maintenance are yours alone</li>
              <li>We do not guarantee specific outcomes, savings, or results from following our recommendations</li>
              <li>Market conditions, insurance rates, and vehicle prices may change and vary by location</li>
              <li>You should independently verify all information before making significant financial decisions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h2>
            <p className="text-gray-600 leading-relaxed">
              To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS Communications — Alert Related Text Messages</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By providing your phone number and checking the SMS opt-in box during registration or consultation scheduling, you expressly consent to receive <strong>promotional marketing</strong> (special offers, service updates, and promotions), <strong>customer care</strong> (consultation follow-ups, support, and service-related communications), and <strong>transactional account notifications</strong> (booking confirmations, appointment reminders, and account alerts) related text messages from JKAuto. These messages are limited to account-related notifications, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Consultation appointment confirmations and reminders</li>
              <li>Account access and onboarding instructions</li>
              <li>Follow-up information related to your consultancy requests</li>
              <li>Account security and access notifications</li>
            </ul>
            <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(30,64,175,0.06)', border: '1px solid rgba(30,64,175,0.15)' }}>
              <p className="text-sm text-blue-800 font-semibold mb-2">Important SMS Disclosures:</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Message and data rates may apply.</strong></li>
                <li>• Message frequency varies based on your account activity.</li>
                <li>• To opt out at any time, reply <strong>STOP</strong> to any message.</li>
                <li>• For help, reply <strong>HELP</strong> or contact <a href="mailto:support@jkauto.com" className="underline">support@jkauto.com</a>.</li>
                <li>• Opting in to SMS is optional and not required to use the Service.</li>
                <li>• <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong></li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Use the Service to harass, abuse, or harm others</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content, features, and functionality are owned by JKAuto and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. JKAUTO DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The consultancy information provided through the Service is for general informational purposes only and should not be relied upon as the sole basis for making significant financial decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, JKAUTO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE OR RELIANCE ON OUR CONSULTANCY GUIDANCE.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Service is also governed by our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Service at any time for violation of these Terms or for any other reason at our discretion. You may also terminate your account at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
            <div className="glass-card p-6">
              <p className="text-gray-600 mb-2">If you have questions about these Terms, please contact us:</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@jkauto.com" className="text-blue-600 hover:underline">support@jkauto.com</a></p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> <a href="tel:+15054780022" className="text-blue-600 hover:underline">(505) 478-0022</a></p>
              <p className="text-gray-600"><strong>Address:</strong> 1209 Mountain Rd PL NE, Ste N, Albuquerque, NM 87110</p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              ← View Privacy Policy
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
