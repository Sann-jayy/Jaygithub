
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_VIDEOS, CATEGORIES } from '../constants';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'All') return MOCK_VIDEOS;
    return MOCK_VIDEOS.filter((_, i) => (i % 2 === 0));
  }, [activeCategory]);

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/98 backdrop-blur-sm z-40 px-4 py-2 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-primary text-[32px] filled select-none">play_circle</span>
          <h1 className="text-xl font-extrabold tracking-tighter select-none">Ytube</h1>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2.5 active:bg-zinc-100 rounded-full transition-colors"><span className="material-symbols-outlined text-zinc-800">cast</span></button>
          <Link to="/notifications" className="p-2.5 active:bg-zinc-100 rounded-full transition-colors relative">
            <span className="material-symbols-outlined text-zinc-800">notifications</span>
            <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Link>
          <Link to="/search" className="p-2.5 active:bg-zinc-100 rounded-full transition-colors"><span className="material-symbols-outlined text-zinc-800">search</span></Link>
        </div>
      </header>

      {/* Categories */}
      <div className="sticky top-[52px] bg-white z-40 flex items-center gap-2 overflow-x-auto px-4 py-3 no-scrollbar border-b border-gray-100">
        <button className="flex-shrink-0 bg-zinc-100 p-2 rounded-lg active:bg-zinc-200 transition-colors">
          <span className="material-symbols-outlined text-xl">explore</span>
        </button>
        {CATEGORIES.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-lg text-sm font-semibold border border-transparent transition-all active:scale-95 ${activeCategory === cat ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-900 active:bg-zinc-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Feed */}
      <div className="flex flex-col gap-8 py-4">
        {filteredVideos.map(video => (
          <div key={video.id} className="group animate-fadeIn">
            {/* Thumbnail */}
            <Link to={`/video/${video.id}`} className="px-0 sm:px-4 block">
              <div className="relative aspect-video sm:rounded-2xl overflow-hidden bg-zinc-100 shadow-sm transition-transform active:scale-[0.99] duration-200">
                <img 
                  src={video.thumbnail} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt={video.title} 
                />
                <span className="absolute bottom-3 right-3 bg-black/85 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-md tracking-tight">
                  {video.duration}
                </span>
              </div>
            </Link>

            {/* Video Info Wrapper */}
            <div className="flex gap-3 px-4 mt-3.5">
              {/* Channel Avatar */}
              <Link to={`/channel/${video.channelName}`} className="shrink-0 pt-0.5">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 active:opacity-70 transition-opacity ring-1 ring-black/5">
                  <img src={video.channelAvatar} className="w-full h-full object-cover" alt={video.channelName} />
                </div>
              </Link>

              {/* Textual Content */}
              <div className="flex-1 flex flex-col min-w-0 pr-2">
                <Link to={`/video/${video.id}`}>
                  <h4 className="text-[15px] font-bold text-zinc-900 leading-[1.3] line-clamp-2 group-hover:text-zinc-800 transition-colors tracking-tight">
                    {video.title}
                  </h4>
                </Link>
                
                <div className="mt-1.5 flex flex-col gap-0.5">
                  <Link 
                    to={`/channel/${video.channelName}`} 
                    className="flex items-center gap-1 w-fit group/channel"
                  >
                    <span className="text-[13px] font-medium text-zinc-500 group-hover/channel:text-zinc-800 transition-colors">
                      {video.channelName}
                    </span>
                    {/* Simulated Verified Badge for premium look */}
                    <span className="material-symbols-outlined text-[14px] text-zinc-400 filled">check_circle</span>
                  </Link>
                  
                  <div className="flex items-center text-[12px] text-zinc-500 font-medium">
                    <span>{video.views} views</span>
                    <span className="mx-1.5 select-none opacity-40">•</span>
                    <span>{video.timestamp}</span>
                  </div>
                </div>
              </div>

              {/* Actions Menu */}
              <button className="material-symbols-outlined text-zinc-400 active:bg-zinc-100 rounded-full p-1.5 h-fit transition-all -mr-1">
                more_vert
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Spacer for bottom nav */}
      <div className="h-16"></div>
    </div>
  );
};

export default Home;
