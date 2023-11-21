import { format } from 'date-fns';

import RateMovie from '../Rate/Rate';
import './MovieCard.css';
import { GenreContextConsumer } from '../Genre-context/Genre-context';

function MovieCard({ name, date, poster, description, voteAverage, sessionId, movieId, genresId, onErrorFn }) {
  const newDateFormat = () => date.split('-').map((el) => Number(el));
  const newDescription = () => description.split(' ').slice(0, 25).join(' ');

  let genreCounter = 100;

  const genresFn = (idArr, genres) => {
    const newArr = idArr.map((el) => {
      let a;
      genres.genres.map((elem) => {
        if (el === elem.id) {
          a = elem.name;
        }
        return a;
      });
      return a;
    });
    return newArr;
  };

  let nameOfClass = '';

  if (voteAverage <= 3) {
    nameOfClass += 'terrible';
  } else if (voteAverage > 3 && voteAverage <= 5) {
    nameOfClass += 'bad';
  } else if (voteAverage > 5 && voteAverage <= 7) {
    nameOfClass += 'normal';
  } else {
    nameOfClass += 'good';
  }
  return (
    <GenreContextConsumer>
      {(genres) => (
        <div className="card">
          <div className="card-container">
            {poster ? <img src={poster} alt="poster" /> : <img src="./img/no_icon.png" alt="poster" />}
            <div className="card-info">
              <div>
                <div className="name-rate">
                  <h2>{name}</h2>
                  <div className={`rate-number ${nameOfClass}`}>{voteAverage}</div>
                </div>
                <p className="date">{format(new Date(newDateFormat()), 'MMMM dd, yyyy')}</p>
                <div className="genres">
                  {genresFn(genresId, genres).map((el) => (
                    // eslint-disable-next-line no-plusplus
                    <h3 key={genreCounter++}>{el}</h3>
                  ))}
                </div>
                <p className="description">{`${newDescription()}...`}</p>
              </div>
              <RateMovie className="movie-rate" sessionId={sessionId} movieId={movieId} onErrorFn={onErrorFn} />
            </div>
          </div>
          <div className="mobile">
            <p className="description-mobile">{`${newDescription()}...`}</p>
            <RateMovie className="movie-rate-mobile" sessionId={sessionId} movieId={movieId} onErrorFn={onErrorFn} />
          </div>
        </div>
      )}
    </GenreContextConsumer>
  );
}

export default MovieCard;
