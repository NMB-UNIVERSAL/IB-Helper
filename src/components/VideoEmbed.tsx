import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title = 'YouTube video player' }) => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed; 