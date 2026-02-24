'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoId: string;
  duration: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="relative group overflow-hidden rounded-lg h-56 cursor-pointer bg-muted"
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: `url(${video.thumbnail})` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" fill="white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <p className="text-white font-medium text-sm line-clamp-2">{video.title}</p>
              <p className="text-white/80 text-xs">{video.duration}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <span className="text-3xl">×</span>
          </button>
          <div className="w-full max-w-4xl">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
