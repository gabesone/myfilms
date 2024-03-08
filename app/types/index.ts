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
  id: number;
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
  status: string;
  language: string;
  production: string[];
  director: string;
  runtime: number;
  released: string;
  genre: string[];
  poster: string;
}
