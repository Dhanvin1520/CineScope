import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)

  const handleFavorite = (e) => {

    if (favorite) {
      removeFromFavorites(movie.id)
    } else {
      addToFavorites(movie)
    }
  }

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="overlay">
          <button
            className={`fav-btn ${favorite ? 'active' : ''}`}
            onClick={handleFavorite}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-details">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard