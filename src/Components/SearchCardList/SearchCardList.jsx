import MovieCard from '../Movie-card/MovieCard';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Spiner from '../Spiner/Spiner';
import PaginationComponet from '../Pagination/PaginationComponet';

function SearchCardList({
  items,
  error,
  loading,
  sessionId,
  page,
  totalResults,
  searchValue,
  onClickChange,
  onErrorFn,
}) {
  return (
    <ul>
      {
        // eslint-disable-next-line no-nested-ternary
        error ? (
          <ErrorIndicator />
        ) : loading ? (
          <Spiner />
        ) : (
          items.map((el) => (
            <MovieCard
              name={el.title}
              date={el.release_date}
              poster={el.poster_path && `https://www.themoviedb.org/t/p/original${el.poster_path}`}
              description={el.overview}
              voteAverage={el.vote_average.toFixed(1)}
              key={el.id}
              sessionId={sessionId}
              movieId={el.id}
              genresId={el.genre_ids}
              onErrorFn={onErrorFn}
            />
          ))
        )
      }
      {!error && !loading && items.length > 0 ? (
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

export default SearchCardList;
