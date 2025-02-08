import React from "react";
import image from "../assets/image.png";
import { ExternalLink, User, Clock } from "lucide-react";

const NewsItem = ({ news, onNewsClick }) => {
  if (!news) {
    return null;
  }

  const getTimeAgo = (dateString) => {
    if (!dateString) return "Unknown Time";
    const publishedDate = new Date(dateString);
    if (isNaN(publishedDate.getTime())) return "Unknown Time";
    const now = new Date();
    const diffInHours = Math.floor((now - publishedDate) / (1000 * 60 * 60));
  
    if (diffInHours < 1) return "Just now";
    if (diffInHours === 1) return "1 hour ago";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return "Yesterday";
    return publishedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div 
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
      onClick={() => onNewsClick(news)}
    >
      <div className="relative">
        <img
          src={news.urlToImage || image}
          alt={news.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = image;
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm">
            {news.source?.name || "Unknown Source"}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {getTimeAgo(news.publishedAt)}
          </span>
          {news.author && (
            <span className="flex items-center gap-1 truncate">
              <User size={14} />
              <span className="truncate">{news.author}</span>
            </span>
          )}
        </div>
        <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
          {news.description || "No description available"}
        </p>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium group-hover:gap-2"
          onClick={(e) => e.stopPropagation()} // Prevents modal from opening when clicking this link
        >
          Read Full Story <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
