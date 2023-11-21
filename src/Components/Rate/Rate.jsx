import { useState } from 'react';
import { Rate } from 'antd';

import MovieService from '../../services/movie-service';
import './Rate.css';

function RateMovie({ sessionId, movieId, onErrorFn, className }) {
  const [value, setValue] = useState(0);
  const movieService = new MovieService();
  const handlerRating = (val, sesId, movId) => {
    setValue(val);
    movieService
      .addRating(sesId, movId, val)
      .then((res) => console.log(res))
      .catch(() => onErrorFn());
  };
  return (
    <span className={className}>
      <Rate className="rate" onChange={(val) => handlerRating(val, sessionId, movieId)} value={value} count={10} />
    </span>
  );
}

export default RateMovie;
