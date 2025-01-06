import React from "react";
import image from "../assets/image.png";

const NewsItem = ({ title, description, src, url }) => {
  if (!title || !description || !src || !url) {
    return null;
  }
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-700 text-light hover:shadow-xl transition duration-300 flex flex-col h-full">
      <img
        src={src ? src : image}
        alt="News"
        className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
      />
      <div className="px-6 py-4 flex flex-col flex-grow">
        <h5 className="text-xl font-semibold text-gray-200 truncate">
          {title.slice(0, 70)}
        </h5>
        <p className="text-sm text-gray-200 mt-2">
          {description ? description.slice(0, 100) : "No description"}
        </p>
      </div>
      <div className="px-6 pb-4 flex justify-end mt-auto">
        <a
          href={url}
          className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-sm font-semibold transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
