"use client";

import Link from "next/link";
import styles from "../styles/movie.module.scss";
import { useRouter } from "next/navigation";

interface IMovieProps {
  key: string;
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ key, id, poster_path, title }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img
        onClick={onClick}
        src={poster_path}
        alt={title}
      />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
