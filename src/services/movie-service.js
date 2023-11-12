export default class MovieService {
  // eslint-disable-next-line class-methods-use-this
  async getResource() {
    const url =
      'https://api.themoviedb.org/3/search/movie?query=transformers&include_adult=false&language=en-US&page=1';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcwMDk2YjdkNDQxNDE1N2YzNmIyNTZhNjcxZDA5ZiIsInN1YiI6IjY1NDg2MDRjNDFhNTYxMzM2Yjc4OGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZ8E8krI_yCgD8n6J_JyQcpWEB0tgZRb4CbO3p0XQCg',
      },
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`chet ne tak idet${res.status}`);
    }

    // eslint-disable-next-line no-console, no-return-await
    return await res.json();
  }
}
