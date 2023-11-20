export default class MovieService {
  // eslint-disable-next-line class-methods-use-this
  async getResource(searchValue, pageNumber) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${pageNumber}`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcwMDk2YjdkNDQxNDE1N2YzNmIyNTZhNjcxZDA5ZiIsInN1YiI6IjY1NDg2MDRjNDFhNTYxMzM2Yjc4OGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZ8E8krI_yCgD8n6J_JyQcpWEB0tgZRb4CbO3p0XQCg',
      },
    };

    try {
      const res = await fetch(url, options);
      return await res.json();
    } catch (err) {
      throw new Error(`chet ne tak idet ${err}`);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async newGuestSession() {
    const url = 'https://api.themoviedb.org/3/authentication/guest_session/new';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcwMDk2YjdkNDQxNDE1N2YzNmIyNTZhNjcxZDA5ZiIsInN1YiI6IjY1NDg2MDRjNDFhNTYxMzM2Yjc4OGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZ8E8krI_yCgD8n6J_JyQcpWEB0tgZRb4CbO3p0XQCg',
      },
    };

    try {
      const res = await fetch(url, options);
      return await res.json();
    } catch (err) {
      throw new Error(`chet ne tak idet ${err}`);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async ratedMovies(sessionId) {
    const url = `https://api.themoviedb.org/3/guest_session/${sessionId}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcwMDk2YjdkNDQxNDE1N2YzNmIyNTZhNjcxZDA5ZiIsInN1YiI6IjY1NDg2MDRjNDFhNTYxMzM2Yjc4OGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZ8E8krI_yCgD8n6J_JyQcpWEB0tgZRb4CbO3p0XQCg',
      },
    };

    try {
      const res = await fetch(url, options);
      return await res.json();
    } catch (err) {
      throw new Error(`chet ne tak idet ${err}`);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async addRating(sessionId, movieId, grade) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${sessionId}`;

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcwMDk2YjdkNDQxNDE1N2YzNmIyNTZhNjcxZDA5ZiIsInN1YiI6IjY1NDg2MDRjNDFhNTYxMzM2Yjc4OGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZ8E8krI_yCgD8n6J_JyQcpWEB0tgZRb4CbO3p0XQCg',
      },
      body: JSON.stringify({
        value: grade,
      }),
    };

    try {
      const res = await fetch(url, options);
      return await res.json();
    } catch (err) {
      throw new Error(`chet ne tak idet ${err}`);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async getGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcwMDk2YjdkNDQxNDE1N2YzNmIyNTZhNjcxZDA5ZiIsInN1YiI6IjY1NDg2MDRjNDFhNTYxMzM2Yjc4OGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZ8E8krI_yCgD8n6J_JyQcpWEB0tgZRb4CbO3p0XQCg',
      },
    };

    try {
      const res = await fetch(url, options);
      return await res.json();
    } catch (err) {
      throw new Error(`chet ne tak idet ${err}`);
    }
  }
}
