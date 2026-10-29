'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ── BACKGROUND GRADIENT BLOBS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, rgba(59,130,246,0.15) 50%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(245,158,11,0.1) 50%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.3) 0%, rgba(167,139,250,0.1) 50%, transparent 70%)' }} />
      </div>

      {/* ── NAVIGATION ── */}
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-8"
              style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Auto Insurance Consulting Experts
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Drive Smarter.{' '}
              <span className="gradient-text-blue">Save More.</span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
              Expert guidance on selecting the right car, finding the best auto insurance, and keeping your vehicle in peak condition — all in one place.
            </p>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
              We help you make confident decisions at every stage of car ownership.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/contact"
                className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                Get a Free Consultation
              </Link>
              <Link href="/services"
                className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                Explore Services
              </Link>
            </div>

            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Unbiased advice. No hidden fees. Your best interests first.
            </p>
          </div>

          {/* Hero Visual — Service Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: '🚗',
                title: 'Car Selection',
                desc: 'Find the perfect vehicle for your lifestyle, budget, and needs. We compare makes, models, and deals.',
                color: '#1e40af',
                href: '/car-selection',
              },
              {
                icon: '🛡️',
                title: 'Insurance Guidance',
                desc: 'Navigate auto insurance options with confidence. We help you compare coverage and find the best rates.',
                color: '#0891b2',
                href: '/insurance',
              },
              {
                icon: '🔧',
                title: 'Vehicle Maintenance',
                desc: 'Keep your car running longer with expert maintenance schedules, tips, and service recommendations.',
                color: '#7c3aed',
                href: '/maintenance',
              },
            ].map(card => (
              <Link key={card.title} href={card.href} className="glass-card p-8 text-center group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ background: `${card.color}15` }}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{card.desc}</p>
                <span className="text-sm font-semibold transition-colors" style={{ color: card.color }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Why Work With Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Decisions you can feel
              <br /><span className="gradient-text-blue">confident about.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Buying a car and choosing insurance shouldn&apos;t be stressful. We simplify the process with expert, unbiased guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Unbiased Advice', desc: 'We work for you, not dealerships or insurers. Our recommendations are always in your best interest.' },
              { icon: '💡', title: 'Expert Knowledge', desc: 'Years of experience in automotive consulting, insurance analysis, and vehicle maintenance guidance.' },
              { icon: '⚡', title: 'Fast Results', desc: 'Get clear, actionable recommendations quickly — no endless research or confusing jargon.' },
              { icon: '💰', title: 'Save Money', desc: 'Our clients save an average of thousands of dollars on car purchases and insurance premiums.' },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAR SELECTION SECTION ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Car Selection</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Find the right car
                <br /><span className="gradient-text-blue">for your life.</span>
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Whether you&apos;re buying new, used, or leasing — we help you evaluate your options, negotiate better deals, and avoid costly mistakes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '✅', title: 'Needs Assessment', desc: 'We start by understanding your lifestyle, commute, family size, and budget.' },
                  { icon: '📊', title: 'Model Comparison', desc: 'Side-by-side comparisons of vehicles that match your criteria.' },
                  { icon: '🤝', title: 'Deal Negotiation Tips', desc: 'Know what to say and what to avoid when talking to dealers.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/car-selection"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                Explore Car Selection
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Car Selection Visual */}
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">Vehicle Comparison</p>
              <div className="space-y-4">
                {[
                  { name: 'Sedan', score: 88, icon: '🚗', tag: 'Best Value', color: '#1e40af' },
                  { name: 'SUV', score: 76, icon: '🚙', tag: 'Most Popular', color: '#0891b2' },
                  { name: 'Hybrid', score: 92, icon: '⚡', tag: 'Top Pick', color: '#059669' },
                  { name: 'Truck', score: 65, icon: '🛻', tag: 'Work Ready', color: '#7c3aed' },
                ].map(v => (
                  <div key={v.name} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{v.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{v.name}</p>
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${v.color}15`, color: v.color }}>{v.tag}</span>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{v.score}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full transition-all" style={{ width: `${v.score}%`, background: `linear-gradient(to right, ${v.color}, ${v.color}99)` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">Match scores based on your profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSURANCE SECTION ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Insurance Visual */}
            <div className="glass-card p-8 order-2 md:order-1">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">Coverage Comparison</p>
              <div className="space-y-3">
                {[
                  { label: 'Liability Coverage', included: true, note: 'Required in all states' },
                  { label: 'Collision Coverage', included: true, note: 'Covers your vehicle' },
                  { label: 'Comprehensive', included: true, note: 'Theft, weather, more' },
                  { label: 'Uninsured Motorist', included: true, note: 'Highly recommended' },
                  { label: 'Roadside Assistance', included: false, note: 'Optional add-on' },
                  { label: 'Rental Reimbursement', included: false, note: 'Optional add-on' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${item.included ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                        {item.included ? '✓' : '○'}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-400">{item.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(30,64,175,0.06)', border: '1px solid rgba(30,64,175,0.15)' }}>
                <p className="text-sm text-blue-800 font-semibold">💡 We help you find the right balance of coverage and cost.</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Auto Insurance</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Stop overpaying for
                <br /><span className="gradient-text-blue">auto insurance.</span>
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Insurance is complex. We break it down — helping you understand what coverage you actually need and how to find the best rates without sacrificing protection.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '🔍', title: 'Coverage Analysis', desc: 'We review your current policy and identify gaps or unnecessary coverage.' },
                  { icon: '📋', title: 'Provider Comparison', desc: 'Compare quotes from top insurers side by side with our guidance.' },
                  { icon: '💸', title: 'Discount Discovery', desc: 'Uncover discounts you may be missing — safe driver, bundling, and more.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/insurance"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                Explore Insurance Guidance
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAINTENANCE SECTION ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Vehicle Maintenance</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Keep your car running
              <br /><span className="gradient-text-blue">at its best.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Regular maintenance extends the life of your vehicle and prevents costly repairs. We provide personalized maintenance schedules and expert advice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🛢️', title: 'Oil & Fluids', desc: 'Know when to change your oil, coolant, brake fluid, and transmission fluid to keep your engine healthy.', freq: 'Every 3,000–7,500 miles' },
              { icon: '🔋', title: 'Battery & Electrical', desc: 'Prevent unexpected breakdowns with regular battery checks and electrical system inspections.', freq: 'Every 2–3 years' },
              { icon: '🛞', title: 'Tires & Brakes', desc: 'Tire rotation, alignment, and brake inspections keep you safe and improve fuel efficiency.', freq: 'Every 5,000–7,500 miles' },
              { icon: '🌡️', title: 'Engine Tune-Up', desc: 'Spark plugs, air filters, and fuel system maintenance keep your engine performing at peak efficiency.', freq: 'Every 30,000 miles' },
              { icon: '❄️', title: 'AC & Heating', desc: 'Stay comfortable year-round with regular HVAC system checks and refrigerant top-offs.', freq: 'Annually' },
              { icon: '🔦', title: 'Lights & Safety', desc: 'Ensure all lights, wipers, and safety systems are functioning properly for safe driving.', freq: 'Every 6 months' },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                <span className="text-xs font-semibold text-blue-600 px-2 py-1 rounded-full" style={{ background: 'rgba(30,64,175,0.08)' }}>
                  {item.freq}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/maintenance"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
              Get Your Maintenance Schedule
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              How our consultancy
              <br /><span className="gradient-text-blue">works for you.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Tell Us Your Needs', desc: 'Share your situation — budget, lifestyle, current vehicle, and goals. No judgment, just facts.', icon: '💬', color: '#1e40af' },
              { num: '02', title: 'We Analyze Options', desc: 'Our experts research and compare vehicles, insurance plans, or maintenance needs tailored to you.', icon: '🔍', color: '#0891b2' },
              { num: '03', title: 'Get Clear Guidance', desc: 'Receive straightforward recommendations with pros, cons, and our expert opinion.', icon: '📋', color: '#7c3aed' },
              { num: '04', title: 'Make Confident Decisions', desc: 'Move forward knowing you have the best information to make the right choice for your situation.', icon: '✅', color: '#059669' },
            ].map((step, i) => (
              <div key={step.num} className="glass-card p-6 relative">
                <div className="text-5xl font-black mb-4" style={{ color: `${step.color}20` }}>{step.num}</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${step.color}15` }}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '10,000+', label: 'Clients Helped', icon: '👥' },
                { value: '$2,400', label: 'Avg. Annual Savings', icon: '💰' },
                { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { value: '15+', label: 'Years of Experience', icon: '🏆' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-4xl font-black gradient-text-blue mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 30%, #e0f2fe 60%, #f0f9ff 100%)' }}>
            <div className="absolute top-0 left-0 w-64 h-64 blob opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.5) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 blob opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Ready to make smarter
                <br />auto decisions?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you&apos;re buying a car, shopping for insurance, or planning your next service — our experts are here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact"
                  className="px-10 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                  Get a Free Consultation
                </Link>
                <Link href="/services"
                  className="px-10 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
