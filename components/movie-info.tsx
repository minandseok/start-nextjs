import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.scss";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a
          href={movie.homepage}
          target={"_blank"}>
          Homepage &rarr;
        </a>
        <a href={`${movie.id}/providers`}>Providers &rarr;</a>
      </div>
    </div>
  );
}
