import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-4">JKAuto</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert auto insurance consulting — helping you choose the right car, find the best coverage, and keep your vehicle running at its best.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/car-selection" className="hover:text-white transition-colors">Car Selection</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors">Insurance Guidance</Link></li>
              <li><Link href="/maintenance" className="hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/consultation" className="hover:text-white transition-colors">Get a Consultation</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sms-policy" className="hover:text-white transition-colors">SMS Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+15054780022" className="hover:text-white transition-colors">(505) 478-0022</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:support@jkauto.com" className="hover:text-white transition-colors">support@jkauto.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>1209 Mountain Rd PL NE, Ste N<br />Albuquerque, NM 87110</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon–Fri, 9am–6pm MST</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 JKAuto. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sms-policy" className="hover:text-white transition-colors">SMS Policy</Link>
            <Link href="/consultation" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
