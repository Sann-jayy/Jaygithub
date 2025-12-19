
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Upload: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('My Awesome New Video');
  const [privacy, setPrivacy] = useState<'public' | 'unlisted' | 'private'>('public');

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="sticky top-0 bg-white z-40 p-4 border-b border-gray-100 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-1">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold">Upload Video</h1>
        <div className="w-8"></div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-8 pb-32">
        {/* Preview Card */}
        <div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-red-400 to-blue-500 shadow-lg border border-gray-100">
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                 <span className="material-symbols-outlined text-3xl filled">play_arrow</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mt-4">
            <button className="flex flex-col items-center gap-1 py-3 border border-gray-200 rounded-xl hover:bg-zinc-50 transition-colors">
              <span className="material-symbols-outlined text-zinc-600">content_cut</span>
              <span className="text-[10px] font-bold text-zinc-600">Trim</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-3 border border-gray-200 rounded-xl hover:bg-zinc-50 transition-colors">
              <span className="material-symbols-outlined text-zinc-600">tune</span>
              <span className="text-[10px] font-bold text-zinc-600">Filter</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-3 border border-gray-200 rounded-xl hover:bg-zinc-50 transition-colors">
              <span className="material-symbols-outlined text-zinc-600">add_photo_alternate</span>
              <span className="text-[10px] font-bold text-zinc-600">Thumbnail</span>
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-base font-bold text-zinc-800">Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-zinc-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="Add a catchy title"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base font-bold text-zinc-800">Description</label>
            <textarea 
              rows={4}
              className="w-full border border-zinc-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              placeholder="Tell viewers about your video"
            ></textarea>
          </div>

          <div className="flex flex-col gap-3">
             <label className="text-base font-bold text-zinc-800">Privacy</label>
             <div className="flex p-1 bg-zinc-100 rounded-xl gap-1">
               <button 
                 onClick={() => setPrivacy('public')}
                 className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${privacy === 'public' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500'}`}
               >
                 <span className="material-symbols-outlined text-base">public</span> Public
               </button>
               <button 
                 onClick={() => setPrivacy('unlisted')}
                 className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${privacy === 'unlisted' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500'}`}
               >
                 <span className="material-symbols-outlined text-base">link</span> Unlisted
               </button>
               <button 
                 onClick={() => setPrivacy('private')}
                 className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${privacy === 'private' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500'}`}
               >
                 <span className="material-symbols-outlined text-base">lock</span> Private
               </button>
             </div>
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-zinc-500">Ready to upload</span>
              <span className="text-primary">0%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-white border-t border-gray-100">
        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base shadow-lg active:scale-[0.98] transition-transform">
          Upload
        </button>
      </footer>
    </div>
  );
};

export default Upload;
