'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { CheckCircle } from 'lucide-react';

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Get phone parameter from URL
    const phoneParam = searchParams.get('phone');
    
    if (!phoneParam) {
      setError('Invalid verification link. Phone number is missing.');
      return;
    }

    setPhone(phoneParam);
  }, [searchParams]);

  // Mask phone number to show only last 4 digits
  const maskPhone = (phoneNumber: string): string => {
    if (!phoneNumber) return '';
    
    // Remove any non-digit characters
    const digits = phoneNumber.replace(/\D/g, '');
    
    if (digits.length < 4) return phoneNumber;
    
    const lastFour = digits.slice(-4);
    return `(***) ***-${lastFour}`;
  };

  const handleConfirm = () => {
    setIsRedirecting(true);

    // Build redirect URL with all parameters except 'phone'
    const params = new URLSearchParams();
    
    searchParams.forEach((value, key) => {
      if (key !== 'phone') {
        params.append(key, value);
      }
    });

    // Get destination URL
    const destination = searchParams.get('destination');
    
    if (destination) {
      // Redirect to explicit destination with parameters
      const redirectUrl = `${destination}?${params.toString()}`;
      window.location.href = redirectUrl;
    } else {
      // If no destination, show error
      setError('Invalid verification link. Destination is missing.');
      setIsRedirecting(false);
    }
  };


  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* ── BACKGROUND GRADIENT BLOBS (matches homepage) ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, rgba(59,130,246,0.15) 50%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(245,158,11,0.1) 50%, transparent 70%)' }} />
      </div>

      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }} />
        {/* Verification Content */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}>
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 px-2">
            Validate your number.
          </h2>
          
          {/* Phone Input Field */}
          <div className="mb-6">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full bg-gray-50 rounded-lg p-3 sm:p-4 text-lg sm:text-xl font-bold text-gray-900 tracking-wider text-center border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={isRedirecting}
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 text-white ${
              isRedirecting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'shadow-xl hover:opacity-90 hover:-translate-y-0.5 !cursor-pointer'
            }`}
            style={isRedirecting ? undefined : { background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}
          >
            {isRedirecting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Redirecting...
              </span>
            ) : (
              <span className="block sm:inline">Verify Number</span>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-gray-200 relative">
          <p className="text-xs text-gray-400">
            Secured by JkAuto
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
