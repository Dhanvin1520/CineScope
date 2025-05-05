import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard.jsx";
import { getTrendingMovies, searchMovies } from "../api/api";
import "../css/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trending = await getTrendingMovies();
        setMovies(trending);
      } catch (err) {
        setError("Could not load movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          🔍
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h2>Trending Movies</h2>
          <div className="scroll-container">
            <div className="scroll-track">
              {movies.map((movie, index) => (
                <MovieCard movie={movie} key={`scroll-${index}`} />
              ))}
            </div>
          </div>

          <h2>All Movies</h2>
          <div className="movie-grid">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`grid-${index}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;