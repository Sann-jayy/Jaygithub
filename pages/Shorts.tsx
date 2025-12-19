
import React, { useState } from 'react';
import { MOCK_SHORTS } from '../constants';
import { Link } from 'react-router-dom';

const ShortItem: React.FC<{ video: typeof MOCK_SHORTS[0] }> = ({ video }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="relative h-[calc(100dvh-52px)] w-full snap-start snap-always bg-black flex flex-col justify-end overflow-hidden shrink-0">
      {/* Background Media Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src={video.thumbnail} 
          className="w-full h-full object-cover opacity-90" 
          alt={video.title} 
        />
        {/* Simple dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>
      
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-xl drop-shadow-md">Shorts</span>
        </div>
        <div className="flex items-center gap-4 text-white">
          <button className="p-2 drop-shadow-md active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>
          <button className="p-2 drop-shadow-md active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-2xl">more_vert</span>
          </button>
        </div>
      </div>

      {/* Interactive Sidebar - Simple Transparent Circles */}
      <div className="absolute right-2 bottom-16 flex flex-col items-center gap-6 z-30">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-12 h-12 flex items-center justify-center text-white active:scale-90 transition-all">
            <span className={`material-symbols-outlined text-[32px] drop-shadow-lg ${isLiked ? 'filled text-primary' : ''}`}>thumb_up</span>
          </div>
          <span className="text-[11px] font-medium text-white drop-shadow-lg">42K</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 flex items-center justify-center text-white active:scale-90 transition-all">
            <span className="material-symbols-outlined text-[32px] drop-shadow-lg">thumb_down</span>
          </div>
          <span className="text-[11px] font-medium text-white drop-shadow-lg">Dislike</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 flex items-center justify-center text-white active:scale-90 transition-all">
            <span className="material-symbols-outlined text-[32px] drop-shadow-lg">chat</span>
          </div>
          <span className="text-[11px] font-medium text-white drop-shadow-lg">1.2K</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 flex items-center justify-center text-white active:scale-90 transition-all">
            <span className="material-symbols-outlined text-[32px] drop-shadow-lg">share</span>
          </div>
          <span className="text-[11px] font-medium text-white drop-shadow-lg">Share</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 flex items-center justify-center text-white active:scale-90 transition-all">
            <span className="material-symbols-outlined text-[32px] drop-shadow-lg">sync</span>
          </div>
          <span className="text-[11px] font-medium text-white drop-shadow-lg">Remix</span>
        </button>

        {/* Spinning Audio Disk - Simplified border */}
        <div className="mt-2 p-1 bg-zinc-900/60 rounded-lg border border-white/20 animate-spin-slow">
          <img 
            src={video.thumbnail} 
            className="w-9 h-9 rounded-md object-cover grayscale" 
          />
        </div>
      </div>

      {/* Bottom Information */}
      <div className="p-4 pb-10 z-10 w-full max-w-[85%]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Link to={`/channel/${video.channelName}`} className="flex items-center gap-2">
              <img src={video.channelAvatar} className="w-9 h-9 rounded-full border border-white/40" />
              <span className="text-white font-bold text-sm drop-shadow-md">@{video.channelName}</span>
            </Link>
            <button className="bg-white text-black text-[12px] font-bold px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors">
              Subscribe
            </button>
          </div>
          
          <h3 className="text-white text-[15px] font-normal leading-snug drop-shadow-lg line-clamp-2">
            {video.title}
          </h3>

          <div className="flex items-center gap-2 text-white/90">
             <div className="flex items-center gap-1.5 px-1 py-0.5">
               <span className="material-symbols-outlined text-[18px]">music_note</span>
               <span className="text-[12px] font-medium truncate max-w-[150px] drop-shadow-md">
                 {video.channelName} · Original Audio
               </span>
             </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div className="h-full bg-white/80 w-1/3"></div>
      </div>
    </div>
  );
};

const Shorts: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100dvh-52px)] overflow-y-scroll snap-y-mandatory no-scrollbar bg-black">
      {MOCK_SHORTS.map(short => (
        <ShortItem key={short.id} video={short} />
      ))}
    </div>
  );
};

export default Shorts;
