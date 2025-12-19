
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_VIDEOS } from '../constants';

const VideoPlayer: React.FC = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likedStatus, setLikedStatus] = useState<'liked' | 'disliked' | null>(null);
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { id: 1, user: 'User123', text: 'This is exactly what I was looking for!', avatar: 'https://picsum.photos/seed/user/40/40' }
  ]);

  const video = MOCK_VIDEOS.find(v => v.id === id) || MOCK_VIDEOS[0];

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setCommentsList([
      { id: Date.now(), user: 'You', text: comment, avatar: 'https://picsum.photos/seed/me/40/40' },
      ...commentsList
    ]);
    setComment('');
  };

  return (
    <div className="flex flex-col pb-20">
      {/* Player Section */}
      <div className="relative aspect-video bg-black flex items-center justify-center group">
        <img src={video.thumbnail} className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-20' : 'opacity-60'}`} />
        {!isPlaying ? (
          <button 
            onClick={() => setIsPlaying(true)}
            className="absolute z-10 w-16 h-16 bg-black/40 rounded-full flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-4xl filled">play_arrow</span>
          </button>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(false)}>
            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 text-xs gap-2">
              <span className="material-symbols-outlined text-4xl animate-pulse">pause_circle</span>
              <span className="italic">Playing video stream...</span>
            </div>
          </div>
        )}
        
        {/* Controls Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <div className="h-1 w-full bg-white/20 rounded-full mb-2 overflow-hidden relative pointer-events-auto">
            <div className="absolute left-0 top-0 h-full bg-primary w-1/4"></div>
            <div className="absolute left-1/4 -top-1 size-3 rounded-full bg-white -ml-1.5 shadow-lg"></div>
          </div>
          <div className="flex items-center justify-between text-white text-[10px] font-medium">
            <span>0:37</span>
            <div className="flex items-center gap-2">
              <span>{video.duration}</span>
              <span className="material-symbols-outlined text-sm pointer-events-auto cursor-pointer">fullscreen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col gap-3">
        <h1 className="text-xl font-bold leading-tight line-clamp-2">{video.title}</h1>
        <p className="text-xs text-zinc-500">{video.views} views • {video.timestamp}</p>
        
        <div className="flex items-center justify-between py-2">
          <Link to={`/channel/${video.channelName}`} className="flex items-center gap-3">
            <img src={video.channelAvatar} className="w-10 h-10 rounded-full border border-gray-100" />
            <div>
              <p className="font-bold text-sm">{video.channelName}</p>
              <p className="text-zinc-500 text-xs">{video.subscribers || '1.2M'} subscribers</p>
            </div>
          </Link>
          <button 
            onClick={() => setIsSubscribed(!isSubscribed)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${isSubscribed ? 'bg-zinc-100 text-zinc-600' : 'bg-zinc-900 text-white'}`}
          >
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center bg-zinc-100 rounded-full divide-x divide-zinc-200">
             <button 
              onClick={() => setLikedStatus(likedStatus === 'liked' ? null : 'liked')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition-colors ${likedStatus === 'liked' ? 'text-primary' : ''}`}
             >
               <span className={`material-symbols-outlined text-base ${likedStatus === 'liked' ? 'filled' : ''}`}>thumb_up</span> 25k
             </button>
             <button 
              onClick={() => setLikedStatus(likedStatus === 'disliked' ? null : 'disliked')}
              className={`px-4 py-2 transition-colors ${likedStatus === 'disliked' ? 'text-primary' : ''}`}
             >
               <span className={`material-symbols-outlined text-base ${likedStatus === 'disliked' ? 'filled' : ''}`}>thumb_down</span>
             </button>
          </div>
          <button className="flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-2 text-xs font-bold active:bg-zinc-200 transition-colors">
            <span className="material-symbols-outlined text-base">share</span> Share
          </button>
          <button className="flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-2 text-xs font-bold active:bg-zinc-200 transition-colors">
            <span className="material-symbols-outlined text-base">download</span> Download
          </button>
        </div>

        {/* Comments Section */}
        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 flex flex-col gap-4">
           <div className="flex items-center justify-between">
             <h3 className="font-bold text-sm">Comments <span className="font-normal text-zinc-500">{commentsList.length}</span></h3>
             <span className="material-symbols-outlined text-lg">unfold_more</span>
           </div>
           
           <form onSubmit={handleAddComment} className="flex items-center gap-3 border-b border-zinc-100 pb-3">
             <img src="https://picsum.photos/seed/me/40/40" className="w-8 h-8 rounded-full shadow-sm" />
             <input 
              type="text" 
              placeholder="Add a comment..." 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1"
             />
             {comment && (
               <button type="submit" className="text-primary font-bold text-xs">Post</button>
             )}
           </form>

           <div className="flex flex-col gap-4 max-h-40 overflow-y-auto no-scrollbar">
             {commentsList.map((c) => (
               <div key={c.id} className="flex items-start gap-3 animate-fadeIn">
                 <img src={c.avatar} className="w-8 h-8 rounded-full" />
                 <div className="flex flex-col gap-0.5">
                   <span className="text-[10px] font-bold text-zinc-500">{c.user}</span>
                   <p className="text-xs text-zinc-800 leading-relaxed">{c.text}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-100 mx-4 my-4"></div>

      {/* Up Next Section */}
      <div className="px-4">
        <h3 className="font-bold text-lg mb-4">Up next</h3>
        <div className="flex flex-col gap-4">
          {MOCK_VIDEOS.filter(v => v.id !== id).map(v => (
            <Link key={v.id} to={`/video/${v.id}`} className="flex gap-3 group active:scale-[0.98] transition-transform">
              <div className="relative w-40 aspect-video flex-shrink-0 bg-zinc-200 rounded-lg overflow-hidden">
                <img src={v.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[8px] font-bold px-1 py-0.5 rounded">
                  {v.duration}
                </span>
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <h4 className="text-sm font-semibold line-clamp-2 leading-tight group-hover:text-primary transition-colors">{v.title}</h4>
                <p className="text-xs text-zinc-500 mt-1">{v.channelName}</p>
                <p className="text-[10px] text-zinc-500">{v.views} views • {v.timestamp}</p>
              </div>
              <button className="material-symbols-outlined text-zinc-500 text-lg hover:bg-zinc-100 rounded-full h-fit p-0.5 transition-colors">more_vert</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
