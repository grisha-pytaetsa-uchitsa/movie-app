import { Component } from 'react';
import { debounce } from 'lodash';

import MovieService from './services/movie-service';
import ButtonContainer from './Components/Button-container/Button-container';
import Info from './Components/Info/Info';
import SearchCardList from './Components/SearchCardList/SearchCardList';
import RatedCardList from './Components/RatedCardList/RatedCardList';
import { GenreContextProvider } from './Components/Genre-context/Genre-context';

export default class App extends Component {
  movieService = new MovieService();

  constructor() {
    super();
    this.state = {
      items: [],
      ratedItems: [],
      searchValue: null,
      page: null,
      totalResults: null,
      sessionId: null,
      loading: null,
      error: false,
      ratedTab: false,
      searchTab: true,
      genres: null,
      searchBtn: true,
      ratedBtn: false,
    };
  }

  componentDidMount() {
    this.getSessionId();
    this.getGenres();
  }

  onError() {
    this.setState({ error: true, loading: false });
  }

  onLabelChange = (event) => {
    this.setState({ searchValue: event.target.value });
    this.getMovies(event.target.value);
  };

  onClickChange = (value, num) => {
    this.getMovies(value, num);
  };

  getSessionId() {
    this.movieService
      .newGuestSession()
      .then((arrRes) => {
        this.setState({ sessionId: arrRes.guest_session_id });
      })
      .catch(() => this.onError());
  }

  onToggleTabs = () => {
    this.setState(({ ratedTab, searchTab }) => {
      const newRated = !ratedTab;
      const newSearch = !searchTab;
      return {
        ratedTab: newRated,
        searchTab: newSearch,
      };
    });
  };

  getMovies(searchValue, num = 1) {
    this.setState({ loading: true });
    this.movieService
      .getResource(searchValue, num)
      .then((arrRes) => {
        this.setState({
          items: arrRes.results,
          page: arrRes.page,
          totalResults: arrRes.total_results,
          loading: false,
        });
      })
      .catch(() => this.onError());
  }

  getGenres() {
    this.movieService.getGenres().then((arrRes) => {
      this.setState({ genres: arrRes });
    });
  }

  toggleActiveBtn = () => {
    this.setState(({ searchBtn, ratedBtn }) => {
      const newSearchBtn = !searchBtn;
      const newRatedBtn = !ratedBtn;
      return {
        searchBtn: newSearchBtn,
        ratedBtn: newRatedBtn,
      };
    });
  };

  getRatedMovies = (sessionId) => {
    this.setState({ loading: true });
    this.movieService
      .ratedMovies(sessionId)
      .then((arrRes) => {
        console.log(arrRes);
        this.setState({
          ratedItems: arrRes.results,
          page: arrRes.page,
          totalResults: arrRes.total_results,
          loading: false,
        });
      })
      .catch(() => this.onError());
  };

  render() {
    const {
      items,
      ratedItems,
      page,
      totalResults,
      loading,
      error,
      searchValue,
      ratedTab,
      searchTab,
      sessionId,
      genres,
      searchBtn,
      ratedBtn,
    } = this.state;

    return (
      <GenreContextProvider value={genres}>
        <div className="container">
          <ButtonContainer
            updateMovies={this.updateMovies}
            onToggleTabs={this.onToggleTabs}
            getRatedMovies={this.getRatedMovies}
            getMovies={this.getMovies}
            page={page}
            searchValue={searchValue}
            sessionId={sessionId}
            ratedTab={ratedTab}
            searchTab={searchTab}
            toggleActiveBtn={this.toggleActiveBtn}
            searchBtn={searchBtn}
            ratedBtn={ratedBtn}
          />
          {searchTab && (
            <input
              className="search"
              type="text"
              placeholder="Type to search..."
              onChange={debounce(this.onLabelChange, 500)}
              onClick={this.toggleTabs}
            />
          )}
          {searchTab && (
            <SearchCardList
              items={items}
              loading={loading}
              error={error}
              sessionId={sessionId}
              page={page}
              totalResults={totalResults}
              searchValue={searchValue}
              onClickChange={this.onClickChange}
              onErrorFn={this.onError}
            />
          )}
          {ratedTab && (
            <RatedCardList
              ratedItems={ratedItems}
              loading={loading}
              error={error}
              page={page}
              totalResults={totalResults}
              searchValue={searchValue}
              onClickChange={this.onClickChange}
            />
          )}

          {!error && !loading && !ratedTab && items.length === 0 ? <Info searchValue={searchValue} /> : null}
          {!error && !loading && ratedTab && ratedItems.length === 0 ? <Info ratedTab={ratedTab} /> : null}
        </div>
      </GenreContextProvider>
    );
  }
}
