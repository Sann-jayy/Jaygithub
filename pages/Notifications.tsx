
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface NotificationItem {
  id: string;
  type: 'upload' | 'mention' | 'live' | 'comment';
  channelName: string;
  channelAvatar: string;
  message: string;
  timestamp: string;
  thumbnail?: string;
  isRead: boolean;
}

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    type: 'upload',
    channelName: 'DesignSensei',
    channelAvatar: 'https://picsum.photos/seed/av1/100/100',
    message: 'uploaded: 10 CSS Tricks You Didn\'t Know Existed',
    timestamp: '2h ago',
    thumbnail: 'https://picsum.photos/seed/css1/160/90',
    isRead: false,
  },
  {
    id: '2',
    type: 'live',
    channelName: 'PixelPerfect',
    channelAvatar: 'https://picsum.photos/seed/av3/100/100',
    message: 'is LIVE: Building a SaaS with React 19',
    timestamp: '5h ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'mention',
    channelName: 'CodeWithMe',
    channelAvatar: 'https://picsum.photos/seed/av1/100/100',
    message: 'mentioned you in a comment: "@User Check this out!"',
    timestamp: '1d ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'upload',
    channelName: 'CreativeFlow',
    channelAvatar: 'https://picsum.photos/seed/av2/100/100',
    message: 'uploaded: My Morning Routine as a Designer',
    timestamp: '2d ago',
    thumbnail: 'https://picsum.photos/seed/vlog1/160/90',
    isRead: true,
  },
  {
    id: '5',
    type: 'comment',
    channelName: 'UIPro',
    channelAvatar: 'https://picsum.photos/seed/av4/100/100',
    message: 'replied to your comment: "Great suggestion, thanks!"',
    timestamp: '3d ago',
    isRead: true,
  }
];

const Notifications: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'All' | 'Mentions'>('All');

  const filteredNotifications = filter === 'All' 
    ? MOCK_NOTIFICATIONS 
    : MOCK_NOTIFICATIONS.filter(n => n.type === 'mention');

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white/98 backdrop-blur-sm z-40 px-4 py-2 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 -ml-2 active:bg-zinc-100 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-zinc-800">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">Notifications</h1>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2.5 active:bg-zinc-100 rounded-full transition-colors">
            <span className="material-symbols-outlined text-zinc-800">search</span>
          </button>
          <button className="p-2.5 active:bg-zinc-100 rounded-full transition-colors">
            <span className="material-symbols-outlined text-zinc-800">more_vert</span>
          </button>
        </div>
      </header>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 overflow-x-auto no-scrollbar">
        {['All', 'Mentions'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all active:scale-95 ${
              filter === f 
                ? 'bg-zinc-900 text-white' 
                : 'bg-zinc-100 text-zinc-900 active:bg-zinc-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="flex flex-col">
        {filteredNotifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`flex items-start gap-3 p-4 hover:bg-zinc-50 transition-colors relative group ${!notification.isRead ? 'bg-primary/5' : ''}`}
          >
            {/* Unread Indicator */}
            {!notification.isRead && (
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full"></div>
            )}

            {/* Avatar */}
            <div className="shrink-0 pt-1">
              <img 
                src={notification.channelAvatar} 
                className="w-12 h-12 rounded-full border border-gray-100" 
                alt={notification.channelName} 
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <p className="text-[14px] leading-tight text-zinc-900">
                <span className="font-bold">{notification.channelName}</span> {notification.message}
              </p>
              <span className="text-[12px] text-zinc-500 font-medium">
                {notification.timestamp}
              </span>
            </div>

            {/* Right Side (Thumbnail or More) */}
            <div className="shrink-0 flex items-center gap-1">
              {notification.thumbnail && (
                <div className="w-16 aspect-video rounded-md overflow-hidden bg-zinc-100">
                  <img src={notification.thumbnail} className="w-full h-full object-cover" />
                </div>
              )}
              <button className="material-symbols-outlined text-zinc-400 p-1 rounded-full hover:bg-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity">
                more_vert
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-10 text-center gap-4">
          <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-zinc-400">notifications_off</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-zinc-900">Your notifications live here</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Subscribe to your favorite channels to get notified about their latest videos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
