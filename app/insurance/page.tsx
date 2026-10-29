import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-700 mb-6"
                style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)' }}>
                <span>🛡️</span> Auto Insurance Consultancy
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                A real expert reviews
                <br /><span className="gradient-text-blue">your insurance.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Insurance is designed to be confusing. We cut through it — a real consultant reviews your situation, explains your options in plain English, and helps you find the right coverage at the right price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation"
                  className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all text-center"
                  style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
                  Talk to a Consultant — Free
                </Link>
                <div className="flex items-center gap-2 px-6 py-4 rounded-2xl" style={{ background: 'rgba(8,145,178,0.08)' }}>
                  <span className="text-2xl font-black" style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$300</span>
                  <span className="text-sm text-gray-500">one-time fee</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">What your consultant does</p>
              <div className="space-y-4">
                {[
                  { icon: '📞', title: 'We start with a conversation', desc: 'Your consultant talks with you about your vehicle, driving habits, financial situation, and what matters most to you.' },
                  { icon: '🔍', title: 'We review your current policy', desc: 'If you have existing coverage, we go through it line by line and identify what\'s working, what\'s missing, and what you might be overpaying for.' },
                  { icon: '📊', title: 'We compare real options', desc: 'We look at multiple providers and coverage levels — not just the ones that pay the highest commissions.' },
                  { icon: '💡', title: 'We explain it in plain English', desc: 'No jargon. We tell you exactly what each coverage type means and whether you actually need it.' },
                  { icon: '✅', title: 'You choose with confidence', desc: 'You make the final decision. We\'re here to inform, not to sell you anything.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why human matters */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why you need a person, not a price comparison tool
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Online quote tools show you prices. They don&apos;t tell you if you&apos;re actually covered when something goes wrong — or if you&apos;re paying for coverage you don&apos;t need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🗣️', title: 'Context matters', desc: 'Your insurance needs depend on your specific situation — your car, your commute, your assets, your risk tolerance. A real consultant understands nuance. A form doesn\'t.' },
              { icon: '🔎', title: 'The fine print is everything', desc: 'Two policies can look identical in price but be very different in what they actually cover. We read the fine print so you don\'t have to find out the hard way.' },
              { icon: '🚫', title: 'We don\'t earn commissions', desc: 'Insurance agents earn commissions from the policies they sell. We charge a flat fee and work only for you — so our advice is never influenced by what pays us more.' },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">Questions we help you answer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'How much coverage do I actually need?', a: 'We look at your assets, your vehicle value, and your risk profile to recommend coverage that actually protects you — without over-insuring.' },
              { q: 'Am I overpaying for my current policy?', a: 'We compare your current rate against what\'s available in the market and identify where you might be leaving money on the table.' },
              { q: 'What\'s the difference between all these coverage types?', a: 'Liability, collision, comprehensive, uninsured motorist — we explain each one in plain language and tell you which ones matter for your situation.' },
              { q: 'What discounts am I missing?', a: 'Safe driver, multi-policy, good student, low mileage — we identify every discount you might qualify for that your current insurer may not have mentioned.' },
              { q: 'Should I raise or lower my deductible?', a: 'We run the math based on your financial situation and help you find the right balance between monthly cost and out-of-pocket risk.' },
              { q: 'What happens if I get in an accident?', a: 'We walk you through exactly what your coverage means in real-world scenarios so you know what to expect before something happens.' },
            ].map(item => (
              <div key={item.q} className="glass-card p-6">
                <p className="font-bold text-gray-900 mb-2">❓ {item.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">✅ {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">How it works</h2>
          <div className="space-y-6">
            {[
              { num: '1', title: 'Book a free consultation', desc: 'Fill out our form and a consultant will reach out within 1 business day. No commitment, no pressure.' },
              { num: '2', title: 'We talk through your situation', desc: 'Your consultant asks about your vehicle, driving habits, current coverage, and what you\'re hoping to achieve. This is a real conversation, not a questionnaire.' },
              { num: '3', title: 'We do the research', desc: 'We review your current policy (if you have one), compare options from multiple providers, and identify the best fit for your needs and budget.' },
              { num: '4', title: 'We walk you through our findings', desc: 'We present our recommendations clearly — what we found, why we recommend it, and what it means for you in plain English.' },
              { num: '5', title: 'You decide', desc: 'You choose the coverage that feels right. We can help you get set up, or simply give you the information you need to do it yourself.' },
            ].map(step => (
              <div key={step.num} className="flex items-start gap-6 p-6 glass-card">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
                  {step.num}
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Common questions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'Do you sell insurance?', a: 'No. We are a consultancy. We give you advice and help you find the right coverage — we don\'t sell policies or earn commissions.' },
              { q: 'Can you help if I just got a new car?', a: 'Absolutely. New car purchases are one of the best times to review your coverage and make sure you\'re properly protected.' },
              { q: 'What if I\'m happy with my current insurer?', a: 'That\'s great! We can still review your policy to make sure you have the right coverage and aren\'t missing any discounts.' },
              { q: 'How long does the consultation take?', a: 'Most consultations take 30–60 minutes. We\'ll follow up with a written summary of our recommendations.' },
            ].map(item => (
              <div key={item.q} className="glass-card p-6">
                <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                <p className="text-sm text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to stop overpaying for insurance?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free consultation and talk to a real person who will review your coverage and help you find the right policy.
          </p>
          <Link href="/consultation"
            className="inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
            Talk to a Consultant — It&apos;s Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-gray-400 mt-4">$300 one-time fee · No commissions · No hidden costs</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
