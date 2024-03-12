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
  director: string;
  runtime: number | undefined;
  released: string | undefined;
  genres: Genres[];
  poster: string | undefined;
  overview: string | undefined;
  homepage: string;
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

interface Director {
  name: string;
}
