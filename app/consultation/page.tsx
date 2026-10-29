'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SERVICES = [
  {
    id: 'car-selection',
    icon: '🚗',
    label: 'Car Finder & Negotiation',
    price: '$1,200 one-time',
    color: '#1e40af',
  },
  {
    id: 'insurance',
    icon: '🛡️',
    label: 'Insurance Finder',
    price: '$300 one-time',
    color: '#0891b2',
  },
  {
    id: 'maintenance',
    icon: '🔧',
    label: 'Maintenance Reminders',
    price: '$30/month',
    color: '#7c3aed',
  },
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0 || !agreedToTerms) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

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
      <section className="pt-32 pb-12 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6"
            style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Free Consultation — No Commitment
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Book Your Free
            <br /><span className="gradient-text-blue">Consultation</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Select the services you need, fill in your details, and we&apos;ll reach out within 1 business day. Completely free — no pressure, no commitment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-8 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="glass-card p-12 text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Consultation Booked!</h2>
              <p className="text-lg text-gray-500 mb-4 max-w-md mx-auto">
                Thanks, <strong>{formData.name}</strong>! We&apos;ve received your request.
              </p>
              <p className="text-gray-500 mb-8">
                A consultant will reach out to <strong>{formData.email}</strong> within 1 business day.
              </p>
              <button onClick={() => { setSubmitted(false); setSelectedServices([]); setFormData({ name: '', email: '', phone: '', message: '' }); setSmsOptIn(false); setAgreedToTerms(false); }}
                className="px-6 py-3 text-sm font-semibold text-white rounded-xl"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                Book Another Consultation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-8">

              {/* Services */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">What do you need help with? *</h2>
                <p className="text-sm text-gray-500 mb-4">Select one or more services.</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {SERVICES.map(service => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`p-4 rounded-2xl text-left transition-all border-2 ${
                          isSelected ? 'border-blue-500 shadow-md' : 'border-transparent hover:border-gray-200'
                        }`}
                        style={{ background: isSelected ? `${service.color}0d` : 'rgba(0,0,0,0.03)' }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-2xl">{service.icon}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                          }`}>
                            {isSelected && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <p className="font-bold text-gray-900 text-sm mb-0.5">{service.label}</p>
                        <p className="text-xs font-semibold" style={{ color: service.color }}>{service.price}</p>
                      </button>
                    );
                  })}
                </div>
                {selectedServices.length === 0 && (
                  <p className="text-xs text-amber-600 mt-2">Please select at least one service.</p>
                )}
              </div>

              <div className="border-t border-gray-100" />

              {/* Personal Info */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">Your Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="jane@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span className="text-gray-400">(optional)</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your situation <span className="text-gray-400">(optional)</span></label>
                  <textarea name="message" rows={3} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="e.g. Looking for a family SUV under $40k, or I think I'm overpaying for insurance..." />
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Consents */}
              <div className="space-y-4">
                {/* SMS Opt-In */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      smsOptIn ? 'bg-blue-600 border-blue-600' : 'border-gray-300 group-hover:border-blue-400'
                    }`} onClick={() => setSmsOptIn(!smsOptIn)}>
                      {smsOptIn && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      I consent to receive SMS text messages from JKAuto <span className="text-gray-400 font-normal">(optional)</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      By checking this box, you expressly consent to receive text messages from JKAuto for the following purposes: <strong>promotional marketing</strong> (special offers, service updates, and promotions), <strong>customer care</strong> (consultation follow-ups, support, and service-related communications), and <strong>transactional account notifications</strong> (booking confirmations, appointment reminders, and account alerts). Message and data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help. <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong>
                    </p>
                  </div>
                </label>

                {/* Terms & Privacy */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      agreedToTerms ? 'bg-blue-600 border-blue-600' : 'border-gray-300 group-hover:border-blue-400'
                    }`} onClick={() => setAgreedToTerms(!agreedToTerms)}>
                      {agreedToTerms && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      I agree to the{' '}
                      <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>
                      {' '}<span className="text-red-500">*</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">Required to proceed.</p>
                  </div>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || selectedServices.length === 0 || !agreedToTerms}
                className="w-full py-4 text-base font-semibold text-white rounded-2xl shadow-xl transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
                {submitting ? 'Booking Your Consultation...' : 'Book My Free Consultation →'}
              </button>
              <p className="text-center text-sm text-gray-400">
                Free consultation. No commitment. We&apos;ll reach out within 1 business day.
              </p>

            </form>
          )}
        </div>
      </section>

      {/* Contact info strip */}
      <section className="py-12 px-6 border-t border-gray-100 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '📧', label: 'Email Us', value: 'support@jkauto.com', href: 'mailto:support@jkauto.com' },
              { icon: '📞', label: 'Call Us', value: '(505) 478-0022', href: 'tel:+15054780022' },
              { icon: '🕐', label: 'Business Hours', value: 'Mon–Fri, 9am–6pm MST', href: null },
            ].map(item => (
              <div key={item.label} className="p-5 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-blue-600 hover:text-blue-700 font-medium">{item.value}</a>
                ) : (
                  <p className="text-sm text-gray-600 font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
