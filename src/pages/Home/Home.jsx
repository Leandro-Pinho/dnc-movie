import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";

import MovieCard from "../../components/MovieCard"

const Home = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const { data: { results } } = await MovieService.getMovies();

    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies)
  });


  return (
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard />
        </div>
      ))}
    </section>
  )
}

export default Home
