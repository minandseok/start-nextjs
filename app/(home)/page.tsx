import Movie from "../../components/movie";
import styles from "../../styles/home.module.scss";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.home}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
