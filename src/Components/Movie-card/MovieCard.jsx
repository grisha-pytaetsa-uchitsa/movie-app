import './MovieCard.css';
import { format } from 'date-fns';

function MovieCard({ name, date, poster, description }) {
  const newDateFormat = () => date.split('-').map((el) => Number(el));
  const newDescription = () => description.split(' ').slice(0, 25).join(' ');
  return (
    <div className="card">
      <img src={poster} alt="poster" />
      <div className="info">
        <h2>{name}</h2>
        <p className="date">{format(new Date(newDateFormat()), 'MMMM dd, yyyy')}</p>
        <div className="genres">
          {/* <h3>{genres[0]}</h3>
          <h3>{genres[1]}</h3> */}
        </div>
        <p className="description">{`${newDescription()}...`}</p>
      </div>
    </div>
  );
}

export default MovieCard;
