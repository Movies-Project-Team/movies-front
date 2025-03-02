type Route = {
  path: string;
  title?: string;
  isPublic?: boolean;
};

type Routes = {
  [key: string]: Route;
};

type Movie = {
  id: number;
  title: string;
  original_title: string;
  src: string;
  poster: string;
  thumbnail: string;
  produce_by: string,
  season: number,
  vote_average: number,
  year: number,
  esp_total: number,
  slug: string;
  alt: string;
  imdb: number;
  model: string;
  releaseYear: number;
  totalEpisodes: number;
  genres: string[];
  description: string;
};

type MovieTmdb = {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  overview: string;
};

type Profile = {
  id: number,
  user_id: number,
  name: string,
  birthday: datetime,
  gender: number,
  phone: number,
  password: string,
}

type ProfileReponse = {
  data: {
    data: Profile[],
  }
}

type GenresReponse = {
  id: number,
  title: string,
  description: string,
}

type LanguageReponse = {
  id: number,
  title: string,
  code: string,
}

type UserData = {
  id: number,
  email: string,
  permisson: number,
  is_active: number,
}

type LoginResponse = {
  data: UserData,
  token: string
}

type MovieTmdbResponse = {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}

type Paginate = {
  totalItems: number,
  currentPage: number,
  totalPages: number,
  totalItemsPerPage: number
}

type MovieResponse = {
  code: number,
  message: string,
  data: Movie[],
  paginate: Paginate,
}

type MovieDetailResponse = {
  code: number,
  message: string,
  data: Movie,
}