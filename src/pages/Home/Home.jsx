import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";



const Home = ({ searchValueProp }) => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const { data: { results } } = await MovieService.getMovies();

    setMovies(results);
  }

  const getMoviesSearch = async (movieString) => {
    const { data: { results } } = await MovieService.searchMovies(movieString);
    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (searchValueProp) {
      getMoviesSearch(searchValueProp);
    }
    if (searchValueProp === "") {
      getMovies();
    }

  }, [searchValueProp]);


  return (
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </section>
  )
}

export default Home
