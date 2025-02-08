import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, onNewsClick }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setArticles(data.articles || []))
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <>
      <h2 className="text-center p-2 mb-4">
        <strong>
          Latest {category ? category : ""}{" "}
          <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-red-700 rounded-sm">
            News
          </span>
        </strong>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem key={index} news={news} onNewsClick={onNewsClick} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No news articles found.
          </p>
        )}
      </div>
    </>
  );
};

export default NewsBoard;
