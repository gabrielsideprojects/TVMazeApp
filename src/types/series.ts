export interface Serie {
  id: number;
  name: string;
  image?: {
    medium: string;
    original: string;
  };
  genres: [string];
  schedule: {
    time: string;
    days: [string];
  };
  summary: string;
}

export interface Characters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Serie[];
}
