import React from "react";
import { X, Clock, User, Globe } from "lucide-react";

const NewsModal = ({ news, onClose }) => {
  if (!news) return null;

  const getTimeAgo = (dateString) => {
    if (!dateString) return "Unknown Time";
    const publishedDate = new Date(dateString);
    if (isNaN(publishedDate.getTime())) return "Unknown Time";
    const now = new Date();
    const diffInMinutes = Math.floor((now - publishedDate) / (1000 * 60));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes === 1) return "1 minute ago";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 120) return "1 hour ago";
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    if (diffInMinutes < 2880) return "Yesterday";

    return publishedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-hidden">
        
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>

        <img
          src={news.urlToImage || "/fallback-image.jpg"}
          alt={news.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <Clock size={16} /> {getTimeAgo(news.publishedAt)}
          </span>
          {news.author && (
            <span className="flex items-center gap-1">
              <User size={16} /> {news.author}
            </span>
          )}
          {news.source?.name && (
            <span className="flex items-center gap-1">
              <Globe size={16} /> {news.source.name}
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">{news.title}</h2>

        <div className="overflow-y-auto max-h-[50vh] pr-3">
          <p className="text-gray-700 text-sm whitespace-pre-line">
            {news.content ? news.content.replace(/\[\+\d+ chars\]/, "") : "No content available."}
          </p>
        </div>

        <div className="mt-4">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
