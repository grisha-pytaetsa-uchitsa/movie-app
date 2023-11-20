import MovieCard from '../Movie-card/MovieCard';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Spiner from '../Spiner/Spiner';
import PaginationComponet from '../Pagination/PaginationComponet';

function RatedCardList({ ratedItems, error, loading, page, totalResults, searchValue, onClickChange }) {
  return (
    <ul>
      {
        // eslint-disable-next-line no-nested-ternary
        error ? (
          <ErrorIndicator />
        ) : loading ? (
          <Spiner />
        ) : (
          ratedItems.map((el) => (
            <MovieCard
              name={el.title}
              date={el.release_date}
              poster={el.poster_path && `https://www.themoviedb.org/t/p/original${el.poster_path}`}
              description={el.overview}
              voteAverage={el.vote_average.toFixed(1)}
              key={el.id}
              movieId={el.id}
              genersId={el.genre_ids}
            />
          ))
        )
      }
      {!error && !loading && ratedItems.length > 0 ? (
        <PaginationComponet
          page={page}
          totalResults={totalResults}
          searchValue={searchValue}
          onClickChange={onClickChange}
        />
      ) : null}
    </ul>
  );
}

export default RatedCardList;
