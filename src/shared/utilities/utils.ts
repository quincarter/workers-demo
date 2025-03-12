export const convertMinutesToString = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
};

export const getImdbUrl = (imdbId: string) => {
  return `https://www.imdb.com/title/${imdbId}`;
};

export const getTraktMovieUrl = (traktSlug: string) => {
  return `https://trakt.tv/movies/${traktSlug}`;
};

export const getTmdbMovieUrl = (traktId: string) => {
  return `https://www.themoviedb.org/movie/${traktId}?language=en-US`;
};
