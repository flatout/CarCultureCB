import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  handle: string;
  avatar: string;
}

export default function ProfileCard({ name, handle, avatar }: ProfileCardProps) {
  return (
    <div className="bg-[#0f1724] rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-start gap-3">
        <div className="relative w-12 h-12">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#0f1724] rounded-full p-1">
            <div className="bg-[#00ff00] w-3 h-3 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-white font-semibold">{name}</h2>
          <p className="text-gray-400 text-sm">{handle}</p>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <a
          href={`https://twitter.com/${handle.replace('.base.eth', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={`https://warpcast.com/${handle.replace('.base.eth', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 300 300" fill="currentColor">
            <path d="M149.997 0C67.158 0 0 67.158 0 149.997S67.158 299.994 149.997 299.994 299.994 232.836 299.994 149.997 232.836 0 149.997 0zm0 240c-49.709 0-90.003-40.294-90.003-90.003s40.294-90.003 90.003-90.003 90.003 40.294 90.003 90.003-40.294 90.003-90.003 90.003z" />
          </svg>
        </a>
        <a
          href={`https://base.org/${handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />
          </svg>
        </a>
      </div>
    </div>
  );
} 