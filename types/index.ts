export interface TrackData {
  id: number;
  artist: string;
  album: string;
  songUrl: string;
  title: string;
  albumImageUrl: string;
  playedAt: string;
  isPlaying: boolean;
  duration: string;
}

export interface Film {
  id: number;
  watched: string;
  title: string;
  year: string;
  poster: string;
  rating: number;
  review: string;
  url: string;
}

export interface LetterboxdFilm {
  type: string;
  date: {
    published: number;
    watched: number;
  };
  film: {
    title: string;
    year: string;
    image: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
    };
  };
  rating: {
    text: string;
    score: number;
  };
  review: string;
  spoilers: boolean;
  isRewatch: boolean;
  uri: string;
}
