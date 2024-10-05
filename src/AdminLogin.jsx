import React, { useEffect, useState } from 'react';
import './App.css'; // Keep this for the overall app styles

const NewsFeed = () => {
  const [articles, setArticles] = useState([]); // State for news articles
  const [error, setError] = useState(''); // State for error messages
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = 'd699a60d58f74c1a89d602c524e67c12'; // Your News API key
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`; // Example endpoint

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles); // Store articles in state
        } else {
          setError('Failed to fetch news articles');
        }
      } catch (error) {
        setError('An error occurred while fetching news articles');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchNews();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="news-feed">
      <h2>Latest News Articles</h2>
      {loading && <p>Loading articles...</p>}
      {error && <p className="error-message">{error}</p>}
      {articles.length > 0 ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="article">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No articles available</p>
      )}
    </div>
  );
};

export default NewsFeed;
