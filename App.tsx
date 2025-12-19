
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subscriptions from './pages/Subscriptions';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import VideoPlayer from './pages/VideoPlayer';
import Search from './pages/Search';
import Channel from './pages/Channel';
import Shorts from './pages/Shorts';
import Notifications from './pages/Notifications';
import { BottomNav } from './components/BottomNav';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto relative border-x border-gray-100 shadow-xl overflow-x-hidden">
        <main className="flex-1 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/search" element={<Search />} />
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </HashRouter>
  );
};

export default App;
