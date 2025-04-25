import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article>
 <article>
  <h2>{movie.title}</h2>
  <Link to={`/movie/${movie.id}`}>View Info</Link>
</article>

    </article>
  );
}

export default MovieCard;
