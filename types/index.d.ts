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