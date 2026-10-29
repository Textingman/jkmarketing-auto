import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6"
            style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Pay for what you need.
            <br /><span className="gradient-text-blue">Nothing more.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            No subscriptions required for our core services. Pay once, get expert guidance. Only our maintenance reminders are subscription-based.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Car Selection */}
            <div className="glass-card p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: 'rgba(30,64,175,0.1)' }}>
                🚗
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Car Selection</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Car Finder & Negotiation</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-black gradient-text-blue">$1,200</span>
                <span className="text-gray-400 mb-2 text-sm">one-time</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">
                We find the exact make and model that fits your needs and budget, then negotiate directly with dealerships on your behalf to get you the best possible price.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Personalized vehicle needs assessment',
                  'Make & model recommendation',
                  'Dealer research & comparison',
                  'Price negotiation on your behalf',
                  'Final deal review & guidance',
                  'No hidden fees or commissions',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/consultation"
                className="block w-full py-4 text-center text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                Get Started
              </Link>
            </div>

            {/* Insurance */}
            <div className="glass-card p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-semibold text-amber-700 rounded-full"
                  style={{ background: 'rgba(245,158,11,0.15)' }}>
                  Most Affordable
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: 'rgba(8,145,178,0.1)' }}>
                🛡️
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-cyan-600 uppercase tracking-widest">Auto Insurance</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Insurance Finder</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-black" style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$300</span>
                <span className="text-gray-400 mb-2 text-sm">one-time</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">
                We analyze your situation and find the right auto insurance coverage for you — comparing providers, identifying discounts, and making sure you&apos;re not overpaying.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Coverage needs analysis',
                  'Multi-provider rate comparison',
                  'Discount identification',
                  'Coverage gap review',
                  'Policy recommendation report',
                  'No sales commissions — ever',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(8,145,178,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/consultation"
                className="block w-full py-4 text-center text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
                Get Started
              </Link>
            </div>

            {/* Maintenance */}
            <div className="glass-card p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: 'rgba(124,58,237,0.1)' }}>
                🔧
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-widest">Maintenance</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Maintenance Reminders</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-black" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$30</span>
                <span className="text-gray-400 mb-2 text-sm">/month</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">
                Never miss a service again. We send you personalized maintenance reminders based on your vehicle, mileage, and service history — keeping your car running at its best.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Personalized maintenance schedule',
                  'Timely service reminders via SMS/email',
                  'Oil change, tire rotation & more',
                  'Seasonal maintenance alerts',
                  'Recall & safety notice alerts',
                  'Cancel anytime',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(124,58,237,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/consultation"
                className="block w-full py-4 text-center text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
                Subscribe Now
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Value callout */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why our pricing makes sense</h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              The average car buyer overpays by <strong className="text-gray-900">$1,500–$3,000</strong> at the dealership. Our $1,200 car finder service typically pays for itself — and then some.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: '🚗', title: 'Car Selection', value: 'Avg. savings: $1,500–$3,000', desc: 'vs. negotiating alone at a dealership' },
                { icon: '🛡️', title: 'Insurance', value: 'Avg. savings: $400–$800/yr', desc: 'by finding the right coverage at the right price' },
                { icon: '🔧', title: 'Maintenance', value: 'Avg. savings: $500–$1,200/yr', desc: 'by catching issues early and staying on schedule' },
              ].map(item => (
                <div key={item.title} className="p-5 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm font-semibold text-blue-600 mb-1">{item.value}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Pricing FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'Is there a free consultation?', a: 'Yes! We offer a free initial consultation to understand your needs before you commit to any service.' },
              { q: 'Do you earn commissions from dealers or insurers?', a: 'Never. We are a pure consultancy. We don\'t accept referral fees or commissions from any third party.' },
              { q: 'What if I\'m not satisfied?', a: 'We stand behind our work. If you\'re not satisfied with our car selection or insurance service, contact us and we\'ll make it right.' },
              { q: 'Can I cancel the maintenance subscription?', a: 'Yes, you can cancel your maintenance reminder subscription at any time with no penalties or fees.' },
            ].map(item => (
              <div key={item.q} className="glass-card p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free consultation and we&apos;ll help you figure out which service is right for you.
          </p>
          <Link href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
            Book a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
