
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_VIDEOS } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <header className="sticky top-0 bg-white z-40 p-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-primary text-3xl filled">play_circle</span>
          <h1 className="text-xl font-extrabold tracking-tighter">Ytube</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">cast</span>
          <span className="material-symbols-outlined">search</span>
          <img src="https://picsum.photos/seed/me/40/40" className="w-8 h-8 rounded-full border border-gray-100" />
        </div>
      </header>

      <div className="px-4 py-4">
        <h2 className="text-3xl font-bold">You</h2>
      </div>

      {/* History Section */}
      <div className="py-4">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-xl font-bold">History</h3>
          <button className="text-primary font-bold text-sm">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 no-scrollbar">
          {MOCK_VIDEOS.map((video, i) => (
            <Link key={video.id} to={`/video/${video.id}`} className="flex-shrink-0 w-44">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-200">
                <img src={video.thumbnail} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 h-1 w-full bg-black/20">
                   <div className="h-full bg-primary" style={{ width: i === 0 ? '75%' : i === 1 ? '40%' : '10%' }}></div>
                </div>
              </div>
              <div className="mt-2 pr-2">
                <h4 className="text-xs font-bold line-clamp-2 leading-tight text-zinc-900">{video.title}</h4>
                <p className="text-[10px] text-zinc-500 mt-1">{video.channelName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="flex flex-col mt-4">
        {[
          { label: 'Your Videos', icon: 'smart_display' },
          { label: 'Watch Later', icon: 'schedule' },
          { label: 'Downloads', icon: 'download' }
        ].map(item => (
          <button key={item.label} className="flex items-center justify-between px-4 py-4 hover:bg-zinc-50 active:bg-zinc-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-zinc-700">{item.icon}</span>
              </div>
              <span className="font-medium text-zinc-900">{item.label}</span>
            </div>
            <span className="material-symbols-outlined text-zinc-400">chevron_right</span>
          </button>
        ))}
      </div>

      {/* Playlists Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-xl font-bold">Playlists</h3>
          <button className="text-primary font-bold text-sm flex items-center gap-1">
             <span className="material-symbols-outlined text-lg">add</span> New playlist
          </button>
        </div>
        <div className="flex flex-col">
          {[
            { label: 'Music Mix', count: '50 videos', thumb: 'https://picsum.photos/seed/m1/100/100' },
            { label: 'Learning Hub', count: '12 videos', thumb: 'https://picsum.photos/seed/l1/100/100' },
            { label: 'Liked Videos', count: '238 videos', icon: 'thumb_up' },
          ].map((pl, i) => (
            <button key={i} className="flex items-center gap-4 px-4 py-3 hover:bg-zinc-50 active:bg-zinc-100">
              <div className="w-16 h-16 rounded-xl bg-zinc-100 overflow-hidden flex items-center justify-center shrink-0">
                {pl.thumb ? (
                  <img src={pl.thumb} className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-2xl filled">{pl.icon}</span>
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-zinc-900">{pl.label}</span>
                <span className="text-xs text-zinc-500">{pl.count}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
