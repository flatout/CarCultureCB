'use client';

import Image from 'next/image';

export default function TitleBar() {
  return (
    <div className="flex flex-col items-center">
      {/* White CarCulture Logo */}
      <div className="py-4">
        <Image
          src="/logo-white.svg"
          alt="CarCulture Logo"
          width={180}
          height={60}
          className="object-contain"
          priority
        />
      </div>

      {/* Red Bar with Title */}
      <div className="w-full bg-[#8B0000] text-white">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Car Culture Icon */}
            <div className="relative w-10 h-10">
              <Image
                src="/icon.svg"
                alt="CarCulture Icon"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            {/* Center - Title */}
            <h1 className="text-3xl font-bold text-white" style={{ 
              fontFamily: "'Arial Black', 'Helvetica Black', sans-serif",
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Car of the Day
            </h1>

            {/* Right side - Base Network */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Base Network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 