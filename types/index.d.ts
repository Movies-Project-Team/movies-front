type Route = {
  path: string;
  title?: string;
  isPublic?: boolean;
};

type Routes = {
  [key: string]: Route;
};

type Profile = {
  accessToken: string,
  refreshToken: string,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
}

type Movie = {
  id: number;
  title: string;
  src: string;
  poster: string;
  alt: string;
  imdb: number;
  model: string;
  releaseYear: number;
  totalEpisodes: number;
  genres: string[];
  description: string;
};