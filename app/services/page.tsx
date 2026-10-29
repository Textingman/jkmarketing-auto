import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
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
            Our Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Everything you need for
            <br /><span className="gradient-text-blue">smarter car ownership.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From buying your first car to optimizing your insurance and keeping your vehicle in top shape — we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Car Selection */}
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #1e40af15, #2563eb15)' }}>
                  🚗
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Car Selection Consultancy</h2>
                  <span className="px-3 py-1 text-xs font-semibold text-blue-700 rounded-full"
                    style={{ background: 'rgba(30,64,175,0.1)' }}>Most Popular</span>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Choosing the right car is one of the most important financial decisions you&apos;ll make. We help you navigate the process from start to finish — understanding your needs, comparing options, and making a confident purchase.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {['Needs Assessment', 'Budget Planning', 'New vs. Used Analysis', 'Model Comparison', 'Dealer Negotiation Tips', 'Lease vs. Buy Guidance'].map(item => (
                    <div key={item} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/car-selection"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Learn more about Car Selection
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #0891b215, #0e749015)' }}>
                  🛡️
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Auto Insurance Guidance</h2>
                  <span className="px-3 py-1 text-xs font-semibold text-cyan-700 rounded-full"
                    style={{ background: 'rgba(8,145,178,0.1)' }}>Save Money</span>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Auto insurance is confusing by design. We cut through the complexity to help you understand exactly what coverage you need, what you can skip, and how to find the best rates from reputable providers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {['Coverage Review', 'Policy Comparison', 'Rate Shopping', 'Discount Identification', 'Claims Guidance', 'State Requirements'].map(item => (
                    <div key={item} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/insurance"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Learn more about Insurance Guidance
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #7c3aed15, #6d28d915)' }}>
                  🔧
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Vehicle Maintenance Planning</h2>
                  <span className="px-3 py-1 text-xs font-semibold text-purple-700 rounded-full"
                    style={{ background: 'rgba(124,58,237,0.1)' }}>Extend Vehicle Life</span>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Proper maintenance is the key to a long-lasting, reliable vehicle. We create personalized maintenance schedules, explain what services are truly necessary, and help you find trustworthy mechanics.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {['Maintenance Schedules', 'Service Prioritization', 'Cost Estimates', 'Mechanic Selection', 'DIY vs. Shop Guidance', 'Recall Monitoring'].map(item => (
                    <div key={item} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/maintenance"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Learn more about Maintenance Planning
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not sure where to start?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free consultation and we&apos;ll help you figure out exactly what you need.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
            Get a Free Consultation
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
