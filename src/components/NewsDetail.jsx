import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const defaultImage =
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60";

export default function NewsDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    try {
      if (location.state?.news) {
        setArticle(location.state.news);
        localStorage.setItem("newsArticle", JSON.stringify(location.state.news));
      } else {
        const savedArticle = localStorage.getItem("newsArticle");
        if (savedArticle) {
          setArticle(JSON.parse(savedArticle));
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error parsing article data:", error);
      navigate("/");
    }
  }, [location, navigate]);

  if (!article) return null;

  return (
    <article className="max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={20} /> Back to News
      </Link>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <img
          src={article.urlToImage || defaultImage}
          alt={article.title}
          className="w-full h-[400px] object-cover"
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />

        <div className="p-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {formatDistanceToNow(new Date(article.publishedAt), {
                addSuffix: true,
              })}
            </span>
            {article.author && (
              <span className="flex items-center gap-1">
                <User size={16} />
                {article.author}
              </span>
            )}
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
              {article.source.name}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">{article.description}</p>
            <p className="text-gray-700">{article.content}</p>
          </div>

          <div className="mt-8 pt-8 border-t">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              Read Full Article on {article.source.name}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

