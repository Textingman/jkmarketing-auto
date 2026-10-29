import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function SmsPolicyPage() {
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
            <span>📱</span>
            SMS Policy
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">SMS Policy</h1>
          <p className="text-lg text-gray-500">Last Updated: October 29, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              JKAuto is committed to responsible and transparent SMS communications. This page describes how and when we use SMS (text messaging) to communicate with our users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Send</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              JKAuto sends <strong>promotional marketing</strong> (special offers, service updates, and promotions), <strong>customer care</strong> (consultation follow-ups, support, and service-related communications), and <strong>transactional account notifications</strong> (booking confirmations, appointment reminders, and account alerts) related text messages. These messages may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Consultation appointment confirmations and reminders</li>
              <li>Account access and onboarding confirmations</li>
              <li>Follow-up information related to your consultancy requests</li>
              <li>Account security and access notifications</li>
              <li>Special offers, promotions, and service updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-In</h2>
            <p className="text-gray-600 leading-relaxed">
              SMS notifications are optional. You may opt in to receive these text messages during the consultation booking or account registration process by checking the SMS opt-in box. Opting in is not required to use the JKAuto platform or receive our consultancy services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-Out</h2>
            <p className="text-gray-600 leading-relaxed">
              You may opt out of SMS notifications at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will no longer receive SMS messages from JKAuto. To re-enable SMS notifications, contact us at <a href="mailto:support@jkauto.com" className="text-blue-600 hover:underline">support@jkauto.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Help</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For help with SMS messages, reply <strong>HELP</strong> to any message or contact us at:
            </p>
            <div className="glass-card p-6">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@jkauto.com" className="text-blue-600 hover:underline">support@jkauto.com</a></p>
              <p className="text-gray-600"><strong>Phone:</strong> <a href="tel:+15054780022" className="text-blue-600 hover:underline">(505) 478-0022</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message &amp; Data Rates</h2>
            <p className="text-gray-600 leading-relaxed">
              Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies based on your account activity. JKAuto is not responsible for any charges incurred from your mobile carrier.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Privacy</h2>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <p className="text-sm font-bold text-red-800 mb-1">No Mobile Data Sharing</p>
              <p className="text-sm text-red-700">
                <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> Your phone number and SMS opt-in status are used solely to deliver the text messages described in this policy and our{' '}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Carrier Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              Carriers are not liable for delayed or undelivered messages. Delivery of SMS messages is subject to your mobile carrier&apos;s network availability and coverage.
            </p>
          </div>

          <div className="pt-4 flex gap-6">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              ← Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              Terms of Service →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
