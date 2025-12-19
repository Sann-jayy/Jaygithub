
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_VIDEOS } from '../constants';

const Subscriptions: React.FC = () => {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 bg-white z-40 p-4 border-b border-gray-100 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter">Subscriptions</h1>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-2xl">search</button>
          <button className="material-symbols-outlined text-2xl">more_vert</button>
        </div>
      </header>

      {/* Stories Carousel */}
      <div className="flex gap-4 overflow-x-auto px-4 py-4 border-b border-gray-100 no-scrollbar bg-white">
        {MOCK_VIDEOS.map(v => (
          <div key={v.id} className="flex flex-col items-center gap-1 w-16 flex-shrink-0">
             <div className="relative p-0.5 border-2 border-primary rounded-full">
               <img src={v.channelAvatar} className="w-14 h-14 rounded-full border-2 border-white" />
             </div>
             <span className="text-[10px] text-zinc-600 truncate w-full text-center font-medium">{v.channelName}</span>
          </div>
        ))}
      </div>

      {/* Subscription Feed */}
      <div className="flex flex-col gap-6 py-4">
        {MOCK_VIDEOS.map(video => (
          <div key={video.id} className="flex flex-col">
            <Link to={`/video/${video.id}`} className="px-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200">
                <img src={video.thumbnail} className="w-full h-full object-cover" alt={video.title} />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                  {video.duration}
                </span>
              </div>
            </Link>
            <div className="flex gap-3 px-4 mt-4">
              <img src={video.channelAvatar} className="w-10 h-10 rounded-full shrink-0 border border-gray-100" />
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex justify-between gap-2">
                  <h4 className="text-base font-bold line-clamp-2 leading-tight">{video.title}</h4>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                </div>
                <p className="text-sm text-zinc-500 mt-1">{video.channelName} • {video.views} views • {video.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
