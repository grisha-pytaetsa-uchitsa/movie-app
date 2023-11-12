import { Component } from 'react';

import MovieCard from './Components/Movie-card/MovieCard';
import MovieService from './services/movie-service';

export default class App extends Component {
  movieService = new MovieService();

  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.updateMovies();
  }

  updateMovies() {
    this.movieService.getResource().then((arrRes) => {
      this.setState({ items: arrRes.results });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        {items.map((el) => (
          <MovieCard
            name={el.title}
            date={el.release_date}
            poster={el.poster_path && `https://www.themoviedb.org/t/p/original${el.poster_path}`}
            description={el.overview}
            key={el.id}
          />
        ))}
      </div>
    );
  }
}
