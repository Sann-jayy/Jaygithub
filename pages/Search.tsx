
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MOCK_VIDEOS } from '../constants';

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filteredResults = useMemo(() => {
    if (!query.trim()) return MOCK_VIDEOS;
    return MOCK_VIDEOS.filter(v => 
      v.title.toLowerCase().includes(query.toLowerCase()) || 
      v.channelName.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="sticky top-0 bg-white z-40 p-4 border-b border-gray-100 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <div className="flex-1 relative">
          <input 
            type="text" 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-zinc-100 border-none rounded-full px-5 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Search Ytube"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          )}
        </div>
        <button className="bg-zinc-100 p-2.5 rounded-full hover:bg-zinc-200 transition-colors">
          <span className="material-symbols-outlined text-xl">tune</span>
        </button>
      </header>

      {/* Suggested Tags */}
      <div className="flex items-center gap-3 overflow-x-auto px-4 py-3 no-scrollbar border-b border-gray-100">
         <button className="flex-shrink-0 bg-primary/10 text-primary border border-primary px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-lg">trending_up</span>
            Trending
         </button>
         {['AI Tools', 'Mobile Dev', 'Gaming News', 'Podcasts', 'Design'].map(tag => (
           <button 
            key={tag} 
            onClick={() => setQuery(tag)}
            className="flex-shrink-0 bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
           >
             {tag}
           </button>
         ))}
      </div>

      {/* Results */}
      <div className="flex flex-col gap-6 p-4 overflow-y-auto pb-20 no-scrollbar">
        {filteredResults.length > 0 ? (
          filteredResults.map(video => (
            <Link key={video.id} to={`/video/${video.id}`} className="flex gap-4 group animate-fadeIn">
              <div className="relative w-2/5 aspect-video flex-shrink-0 bg-zinc-200 rounded-xl overflow-hidden shadow-sm">
                <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                  {video.duration}
                </span>
              </div>
              <div className="flex-1 flex flex-col min-w-0 gap-1 pt-1">
                <h4 className="text-sm font-bold line-clamp-2 leading-tight text-zinc-900 group-hover:text-primary transition-colors">{video.title}</h4>
                <p className="text-[11px] text-zinc-500 mt-1">{video.channelName} • {video.views} views • {video.timestamp}</p>
              </div>
              <button className="material-symbols-outlined text-zinc-400 text-lg hover:bg-zinc-100 rounded-full h-fit p-0.5 transition-colors">more_vert</button>
            </Link>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4 text-zinc-400">
            <span className="material-symbols-outlined text-6xl">search_off</span>
            <p>No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
