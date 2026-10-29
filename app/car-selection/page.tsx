import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CarSelectionPage() {
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
      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6"
                style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
                <span>🚗</span> Car Selection Consultancy
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                You talk to us.
                <br /><span className="gradient-text-blue">We find your car.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                No algorithms. No automated tools. You speak directly with a real automotive consultant who listens to your needs, researches your options, and negotiates with dealers on your behalf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"
                  className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all text-center"
                  style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                  Talk to a Consultant — Free
                </Link>
                <div className="flex items-center gap-2 px-6 py-4 rounded-2xl" style={{ background: 'rgba(30,64,175,0.06)' }}>
                  <span className="text-2xl font-black gradient-text-blue">$1,200</span>
                  <span className="text-sm text-gray-500">one-time fee</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">What our consultants do for you</p>
              <div className="space-y-4">
                {[
                  { icon: '📞', title: 'Start with a real conversation', desc: 'Your consultant calls or meets with you to understand your lifestyle, budget, must-haves, and deal-breakers.' },
                  { icon: '🔍', title: 'We do the research', desc: 'We research makes, models, reliability data, pricing trends, and available inventory — so you don\'t have to.' },
                  { icon: '📋', title: 'You get a clear recommendation', desc: 'We present you with our top picks and explain exactly why each one fits your situation.' },
                  { icon: '🤝', title: 'We negotiate for you', desc: 'Your consultant contacts dealers directly and negotiates the best price on your behalf.' },
                  { icon: '✅', title: 'You make the final call', desc: 'You decide. We\'re here to advise, not pressure. The choice is always yours.' },
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

      {/* Why human consultation matters */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why a real person makes all the difference
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Car buying tools and comparison websites can show you data. But they can&apos;t ask the right questions, read between the lines, or fight for you at the negotiating table.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💬', title: 'We listen, not just calculate', desc: 'A real consultant understands that "I need a reliable car" means something different to a new parent than it does to a daily commuter. We ask the questions that matter.' },
              { icon: '🧠', title: 'Experience you can\'t Google', desc: 'Our consultants have years of experience with dealer tactics, pricing patterns, and what questions to ask that most buyers never think to ask.' },
              { icon: '💪', title: 'Someone in your corner', desc: 'Dealers negotiate cars every day. Most buyers do it once every few years. Having an experienced advocate on your side levels the playing field.' },
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
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">What we help you figure out</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'New, used, or certified pre-owned?', a: 'We walk through the real trade-offs for your situation — not just the general advice you\'d find online.' },
              { q: 'Buy or lease?', a: 'We run the numbers based on how you actually drive and what matters to you financially.' },
              { q: 'Which make and model is right for me?', a: 'We narrow down the options based on your lifestyle, reliability data, and long-term ownership costs.' },
              { q: 'Am I getting a fair price?', a: 'We know what dealers pay and what fair market value looks like. We make sure you\'re not overpaying.' },
              { q: 'What should I watch out for?', a: 'From dealer add-ons to financing traps, we help you avoid the common mistakes that cost buyers thousands.' },
              { q: 'What questions should I ask?', a: 'We prep you for every conversation — whether you\'re at a dealership or buying from a private seller.' },
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
              { num: '1', title: 'Book a free consultation', desc: 'Fill out our short form and a consultant will reach out within 1 business day to schedule a call. No commitment required.' },
              { num: '2', title: 'We have a real conversation', desc: 'Your consultant spends time understanding your needs, budget, timeline, and preferences. This isn\'t a form — it\'s a conversation.' },
              { num: '3', title: 'We research and recommend', desc: 'We do the legwork — researching vehicles, comparing options, and presenting you with our top recommendations and why.' },
              { num: '4', title: 'We negotiate on your behalf', desc: 'Once you\'ve chosen a direction, we contact dealers and negotiate the best possible price. You don\'t have to set foot in a dealership until you\'re ready to sign.' },
              { num: '5', title: 'You drive away confident', desc: 'You make the final decision with full information and the confidence that you got a fair deal.' },
            ].map(step => (
              <div key={step.num} className="flex items-start gap-6 p-6 glass-card">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
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
              { q: 'Do I have to use a specific dealership?', a: 'No. We work with any dealership or private seller you choose, or we can recommend dealers in your area.' },
              { q: 'What if I already have a car in mind?', a: 'Great! We can evaluate whether it\'s the right fit and negotiate the price for you.' },
              { q: 'Do you get paid by dealerships?', a: 'Never. We work exclusively for you. We don\'t accept referral fees or commissions from dealers.' },
              { q: 'What if I\'m not ready to buy yet?', a: 'That\'s fine. We can help you plan ahead so you\'re ready when the time comes.' },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to find your next car?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free consultation and talk to a real person who will help you every step of the way.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
            Talk to a Consultant — It&apos;s Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-gray-400 mt-4">$1,200 one-time fee · No hidden costs · No dealer commissions</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
