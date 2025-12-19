
export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  timestamp: string;
  channelName: string;
  channelAvatar: string;
  description?: string;
  subscribers?: string;
}

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  banner: string;
  subscribers: string;
  videos: Video[];
}
