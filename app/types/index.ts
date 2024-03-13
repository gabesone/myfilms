export interface CardProps {
  title: string;
  id: number;
  rating: number;
  date?: string;
  poster: string;
}

export interface HeroProps {
  backdrop: string;
  title: string;
  description?: string;
  rating: number;
  id: number;
}

export interface MovieCardProps {
  id?: number;
  title: string;
  rating: number;
  poster: string;
}

export interface BackdropProps {
  backdrop: string;
  title: string;
  description?: string;
  rating?: number;
  id: number;
}

export interface RatingProps {
  rating: number;
  containerStyles?: string;
}

export interface MovieCardDetailsProps {
  status: string | undefined;
  languages: Languages[];
  production: Companies[];
  runtime: number | undefined;
  released: string | undefined;
  genres: Genres[];
  poster: string | undefined;
  overview: string | undefined;
  homepage: string;
  credits: { cast: Cast[]; crew: Crew[] };
}

export interface Cast {
  id: number;
  character: string;
  profile_path: string;
  name: string;
}

export interface Crew {
  name: string;
  known_for_department: string;
  job: string;
  id: number;
}

export interface TabItem {
  nav: string;
  overview?: string;
  poster?: string;
  released?: string;
  languages?: object[];
  director?: object[];
  runtime?: number;
  status?: string;
  genres?: object[];
  production?: object[];
  homepage?: string;
  credits?: { cast: Cast[]; crew: Crew[] };
}

export interface TabProps {
  defaultTab: number;
  tabs: TabItem[];
}

export interface MovieData {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  runtime: number;
  genres: object[];
  release_date: string;
  director: object[];
  spoken_languages: object[];
  production_companies: object[];
  poster: string;
  status: string;
  backdrop_path: string;
  poster_path: string;
  homepage: string;
  credits: { cast: Cast[]; crew: Crew[] };
}

export interface Genres {
  id: number;
  name: string;
}

export interface Languages {
  english_name: string;
  name: string;
}

export interface Companies {
  name: string;
}

export interface Director {
  name: string;
}

export interface PeopleCardProps {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}
