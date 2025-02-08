import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsBoard from "./components/NewsBoard";
import NewsModal from "./components/NewsModal";

const App = () => {
  const [category, setCategory] = useState("general");
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <Router>
      <div className="bg-slate-200 flex flex-col min-h-screen">
        <Navbar setCategory={setCategory} />
        <NewsBoard category={category} onNewsClick={(news) => setSelectedNews(news)} />
        <Footer />
        {selectedNews && <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />}
      </div>
    </Router>
  );
};

export default App;
