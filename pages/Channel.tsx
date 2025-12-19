
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_VIDEOS } from '../constants';

const Channel: React.FC = () => {
  const { id } = useParams();
  
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* App Bar */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md z-40 px-4 py-2 flex items-center justify-between border-b border-gray-100">
        <Link to="/" className="p-2"><span className="material-symbols-outlined">arrow_back</span></Link>
        <div className="flex items-center gap-4">
          <button className="p-2"><span className="material-symbols-outlined">search</span></button>
          <button className="p-2"><span className="material-symbols-outlined">more_vert</span></button>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full aspect-[4/1] bg-gradient-to-r from-red-500 to-orange-400">
         <img src={`https://picsum.photos/seed/${id}/1200/300`} className="w-full h-full object-cover opacity-80" />
      </div>

      {/* Profile Info */}
      <div className="px-4 pb-6 -mt-10 relative flex flex-col items-start gap-4">
         <div className="flex items-end gap-4 w-full">
           <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-zinc-200 flex-shrink-0 shadow-lg">
             <img src={`https://picsum.photos/seed/avatar${id}/200/200`} className="w-full h-full object-cover" />
           </div>
           <div className="flex-1 pb-2">
             <h1 className="text-2xl font-bold tracking-tight">{id}</h1>
             <p className="text-zinc-500 text-sm">1.2M subscribers</p>
           </div>
         </div>
         <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-md active:scale-[0.98] transition-transform">
           Subscribe
         </button>
      </div>

      {/* Tabs */}
      <div className="flex px-4 border-b border-gray-100">
        <button className="flex-1 py-4 text-sm font-bold border-b-2 border-primary text-zinc-900">Videos</button>
        <button className="flex-1 py-4 text-sm font-bold border-b-2 border-transparent text-zinc-500">Playlists</button>
        <button className="flex-1 py-4 text-sm font-bold border-b-2 border-transparent text-zinc-500">About</button>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-2 gap-4 p-4 pb-20">
        {MOCK_VIDEOS.map(video => (
          <Link key={video.id} to={`/video/${video.id}`} className="flex flex-col gap-2">
             <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-200">
                <img src={video.thumbnail} className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[8px] font-bold px-1 py-0.5 rounded">
                  {video.duration}
                </span>
             </div>
             <div className="flex flex-col">
                <h4 className="text-sm font-bold line-clamp-2 leading-tight h-8">{video.title}</h4>
                <p className="text-[10px] text-zinc-500 mt-1">{video.views} views • {video.timestamp}</p>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Channel;
