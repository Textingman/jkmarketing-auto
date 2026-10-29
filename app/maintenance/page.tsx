import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-700 mb-6"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
                <span>🔧</span> Vehicle Maintenance Reminders
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                A real person keeps
                <br /><span className="gradient-text-blue">your car on track.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Forget generic maintenance apps. We learn your specific vehicle, your driving habits, and your service history — then send you personalized reminders from a real team that actually knows your car.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"
                  className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all text-center"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
                  Get Started — Free Consultation
                </Link>
                <div className="flex items-center gap-2 px-6 py-4 rounded-2xl" style={{ background: 'rgba(124,58,237,0.08)' }}>
                  <span className="text-2xl font-black" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$30</span>
                  <span className="text-sm text-gray-500">/month · cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">What you get every month</p>
              <div className="space-y-4">
                {[
                  { icon: '📞', title: 'We start by learning your car', desc: 'When you sign up, we talk with you about your vehicle, mileage, service history, and how you drive. This isn\'t a form — it\'s a real conversation.' },
                  { icon: '📅', title: 'Personalized reminders, not generic ones', desc: 'We build a maintenance schedule specific to your car and your driving patterns — not the one-size-fits-all schedule in your owner\'s manual.' },
                  { icon: '📱', title: 'Timely alerts via SMS or email', desc: 'We reach out before services are due so you have time to plan — not after you\'ve already missed them.' },
                  { icon: '🔔', title: 'Recall and safety alerts', desc: 'We monitor for recalls and safety notices on your vehicle and let you know right away.' },
                  { icon: '💬', title: 'Real people to answer questions', desc: 'Have a question about a service? Not sure if something is urgent? You can reach our team directly — no chatbots.' },
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
              Why this is different from a maintenance app
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Apps give you generic reminders based on mileage averages. We give you personalized guidance based on your actual vehicle, your actual driving, and your actual service history.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🧑‍🔧', title: 'We know your car', desc: 'A real person on our team learns your vehicle — its make, model, year, mileage, and quirks. When we send you a reminder, it\'s because your car actually needs it.' },
              { icon: '📊', title: 'Personalized, not generic', desc: 'A 2019 Honda Civic driven 20,000 miles a year in a hot climate needs different maintenance than the same car driven 8,000 miles in a mild one. We account for that.' },
              { icon: '🤝', title: 'We\'re here when you have questions', desc: 'Got a weird noise? Not sure if that service is really necessary? You can reach a real person on our team — not a FAQ page or a chatbot.' },
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

      {/* What we remind you about */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">What we keep track of for you</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🛢️', title: 'Oil & Filter Changes', desc: 'Based on your actual mileage and driving conditions — not just a generic 3,000-mile rule.' },
              { icon: '🛞', title: 'Tire Rotation & Alignment', desc: 'We track when your tires were last rotated and remind you before uneven wear becomes a problem.' },
              { icon: '🔋', title: 'Battery Health', desc: 'We remind you to get your battery tested before it leaves you stranded — especially before winter.' },
              { icon: '🌡️', title: 'Coolant & Fluid Checks', desc: 'Coolant, brake fluid, transmission fluid, power steering — we track them all.' },
              { icon: '🔦', title: 'Brake Inspection', desc: 'We remind you to have your brakes inspected before they become a safety issue.' },
              { icon: '❄️', title: 'Seasonal Maintenance', desc: 'Winter prep, summer AC checks, wiper blade replacements — we remind you at the right time of year.' },
              { icon: '🔧', title: 'Spark Plugs & Tune-Ups', desc: 'We track your engine tune-up schedule so you don\'t have to remember when it was last done.' },
              { icon: '🚨', title: 'Recall Alerts', desc: 'We monitor for safety recalls on your vehicle and notify you immediately if one is issued.' },
              { icon: '📋', title: 'Inspection Due Dates', desc: 'State inspections, emissions tests — we remind you before they expire.' },
            ].map(item => (
              <div key={item.title} className="glass-card p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
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
              { num: '1', title: 'Book a free consultation', desc: 'Fill out our form and a consultant will reach out within 1 business day to get started.' },
              { num: '2', title: 'We learn your vehicle', desc: 'We have a quick conversation about your car — make, model, year, current mileage, and any recent services you\'ve had done. This takes about 15 minutes.' },
              { num: '3', title: 'We build your maintenance schedule', desc: 'Based on your vehicle and driving habits, we create a personalized maintenance calendar — not a generic one.' },
              { num: '4', title: 'You get timely reminders', desc: 'We send you reminders via SMS or email before services are due, with enough lead time to schedule an appointment.' },
              { num: '5', title: 'We\'re here when you need us', desc: 'Have a question? Not sure if a service is urgent? Reach out to our team directly. We\'re real people who know your car.' },
            ].map(step => (
              <div key={step.num} className="flex items-start gap-6 p-6 glass-card">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
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

      {/* Value */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The cost of skipping maintenance</h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              A missed oil change can lead to engine damage. A worn brake pad can become a rotor replacement. Staying on top of maintenance isn&apos;t just about keeping your car running — it&apos;s about avoiding expensive repairs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: '🛢️', title: 'Skipped oil change', cost: 'Up to $4,000+', desc: 'Engine damage from oil breakdown' },
                { icon: '🛞', title: 'Ignored tire wear', cost: 'Up to $800+', desc: 'Premature tire replacement or accident' },
                { icon: '🔋', title: 'Dead battery', cost: '$150–$300', desc: 'Emergency replacement + towing' },
              ].map(item => (
                <div key={item.title} className="p-5 rounded-2xl" style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.1)' }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-lg font-black text-red-500 mb-1">{item.cost}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-6">At $30/month, our service pays for itself the first time it helps you avoid a major repair.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Common questions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes. There are no contracts or cancellation fees. Cancel anytime with no questions asked.' },
              { q: 'Do you work with all vehicle types?', a: 'Yes — cars, trucks, SUVs, and most other personal vehicles. We\'ll let you know if we can\'t support your specific vehicle.' },
              { q: 'What if I don\'t know my service history?', a: 'That\'s fine. We\'ll work with what you know and build a schedule from there. We can also help you request records from past mechanics.' },
              { q: 'Can I add multiple vehicles?', a: 'Yes. We can manage maintenance reminders for multiple vehicles. Contact us for multi-vehicle pricing.' },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Keep your car running at its best.</h2>
          <p className="text-lg text-gray-500 mb-8">
            Start with a free consultation and we&apos;ll set up a personalized maintenance plan for your vehicle.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
            Get Started — Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-gray-400 mt-4">$30/month · Cancel anytime · No contracts</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
