import React, { useEffect, useState } from "react";
import NewsCard from "../../../NewsCard/NewsCard";


const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("http://localhost:3000/news");
      const responseData = await response.json();
      setNews(responseData);
    };
    fetchNews()
  }, []);

  return (
    <div>
      {news.map((singleNews) => (
        <NewsCard key={singleNews._id} categoryNews={singleNews}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
