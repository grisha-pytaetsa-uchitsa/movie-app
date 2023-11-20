import './Button-container.css';

function ButtonContainer({
  onToggleTabs,
  ratedTab,
  searchTab,
  getRatedMovies,
  sessionId,
  toggleActiveBtn,
  searchBtn,
  ratedBtn,
}) {
  let searchClassName = '';
  let ratedClassName = '';
  if (searchBtn) {
    searchClassName += 'active';
    ratedClassName = '';
  } else if (ratedBtn) {
    searchClassName = '';
    ratedClassName += 'active';
  }
  return (
    <div className="button-container">
      <button
        className={searchClassName}
        type="button"
        onClick={() => {
          toggleActiveBtn();
          onToggleTabs();
        }}
        disabled={!!searchTab}
      >
        Search
      </button>
      <button
        className={ratedClassName}
        type="button"
        onClick={() => {
          toggleActiveBtn();
          onToggleTabs();
          getRatedMovies(sessionId);
        }}
        disabled={!!ratedTab}
      >
        Rated
      </button>
    </div>
  );
}

export default ButtonContainer;
