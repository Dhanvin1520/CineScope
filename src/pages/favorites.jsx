import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/moviecard";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Favorite Movies</h2>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favorites</h2>
          <p>Add some movies to your favorites!</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;