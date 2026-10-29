import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
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
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Your trusted auto
            <br /><span className="gradient-text-blue">consultancy partner.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We&apos;re a team of automotive and insurance experts dedicated to helping everyday drivers make smarter, more confident decisions about their vehicles.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Buying a car and choosing auto insurance are two of the biggest financial decisions most people make — yet most people feel unprepared and overwhelmed when doing it.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                We exist to change that. Our mission is to give every driver access to the same expert knowledge that industry insiders have — so you can make decisions with confidence, not guesswork.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                We don&apos;t sell cars. We don&apos;t sell insurance. We work exclusively for you.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="space-y-6">
                {[
                  { icon: '🎯', title: 'Client-First', desc: 'Every recommendation we make is in your best interest — not a dealer\'s or insurer\'s.' },
                  { icon: '🔍', title: 'Transparent', desc: 'We explain our reasoning clearly so you understand exactly why we recommend what we do.' },
                  { icon: '💡', title: 'Expert-Led', desc: 'Our team has decades of combined experience in automotive, insurance, and consumer advocacy.' },
                  { icon: '🤝', title: 'Accessible', desc: 'Expert guidance shouldn\'t be reserved for the wealthy. We make it available to everyone.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚗',
                title: 'Automotive Consulting',
                desc: 'Deep knowledge of vehicle makes, models, reliability ratings, resale values, and market pricing across new, used, and leased vehicles.',
                skills: ['Vehicle Comparison', 'Market Pricing', 'Reliability Analysis', 'Lease vs. Buy'],
              },
              {
                icon: '🛡️',
                title: 'Insurance Analysis',
                desc: 'Expert understanding of auto insurance products, coverage types, state requirements, and how to find the best value for your specific situation.',
                skills: ['Coverage Review', 'Rate Comparison', 'Discount Identification', 'Claims Guidance'],
              },
              {
                icon: '🔧',
                title: 'Vehicle Maintenance',
                desc: 'Comprehensive knowledge of preventive maintenance, service schedules, common repairs, and how to find trustworthy mechanics.',
                skills: ['Maintenance Schedules', 'Service Recommendations', 'Cost Estimates', 'DIY vs. Shop'],
              },
            ].map(area => (
              <div key={area.title} className="glass-card p-6">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{area.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map(skill => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full font-medium text-blue-700"
                      style={{ background: 'rgba(30,64,175,0.08)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '10,000+', label: 'Clients Served' },
                { value: '$2,400', label: 'Avg. Annual Savings' },
                { value: '15+', label: 'Years Experience' },
                { value: '98%', label: 'Satisfaction Rate' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-3xl font-black gradient-text-blue mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to work with us?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Get a free consultation and discover how we can help you make smarter auto decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/consultation"
              className="px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
              Get a Free Consultation
            </Link>
            <Link href="/services"
              className="px-8 py-4 text-sm font-semibold text-gray-700 rounded-2xl glass-button">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
