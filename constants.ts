
import { Video } from './types';

export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Designing a Modern UI in 2024',
    thumbnail: 'https://picsum.photos/seed/ui1/800/450',
    duration: '12:45',
    views: '1.2M',
    timestamp: '2 weeks ago',
    channelName: 'DesignSensei',
    channelAvatar: 'https://picsum.photos/seed/av1/100/100',
    description: 'Learn the latest trends in UI design for 2024.',
    subscribers: '1.2M'
  },
  {
    id: '2',
    title: 'The Future of UI/UX Design',
    thumbnail: 'https://picsum.photos/seed/ui2/800/450',
    duration: '25:10',
    views: '890K',
    timestamp: '1 month ago',
    channelName: 'CreativeFlow',
    channelAvatar: 'https://picsum.photos/seed/av2/100/100'
  },
  {
    id: '3',
    title: 'How to create a design system from scratch',
    thumbnail: 'https://picsum.photos/seed/ui3/800/450',
    duration: '45:32',
    views: '2.5M',
    timestamp: '3 months ago',
    channelName: 'PixelPerfect',
    channelAvatar: 'https://picsum.photos/seed/av3/100/100'
  },
  {
    id: '4',
    title: '10 UI Tips for Beginners',
    thumbnail: 'https://picsum.photos/seed/ui4/800/450',
    duration: '08:15',
    views: '540K',
    timestamp: '1 week ago',
    channelName: 'UIPro',
    channelAvatar: 'https://picsum.photos/seed/av4/100/100'
  }
];

export const MOCK_SHORTS: Video[] = [
  {
    id: 's1',
    title: 'How to animate buttons with CSS #webdesign #css',
    thumbnail: 'https://picsum.photos/seed/short1/720/1280',
    duration: '0:15',
    views: '450K',
    timestamp: '2 hours ago',
    channelName: 'CodeWithMe',
    channelAvatar: 'https://picsum.photos/seed/av1/100/100',
  },
  {
    id: 's2',
    title: 'Life as a Product Designer in NYC 🍎 #vlog',
    thumbnail: 'https://picsum.photos/seed/short2/720/1280',
    duration: '0:58',
    views: '1.2M',
    timestamp: '1 day ago',
    channelName: 'SaraDesign',
    channelAvatar: 'https://picsum.photos/seed/av2/100/100',
  },
  {
    id: 's3',
    title: 'Minimal desk setup for productivity ⚡️',
    thumbnail: 'https://picsum.photos/seed/short3/720/1280',
    duration: '0:42',
    views: '890K',
    timestamp: '3 days ago',
    channelName: 'MinimalistGuy',
    channelAvatar: 'https://picsum.photos/seed/av3/100/100',
  }
];

export const CATEGORIES = ['All', 'New to you', 'Apple', 'Gaming', 'Music', 'React', 'Cooking', 'Podcasts'];
