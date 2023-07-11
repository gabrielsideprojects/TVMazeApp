export interface Episode {
  id: string;
  name: string;
  number: number;
  season: number;
  summary: string;
  image?: {
    medium: string;
  };
}

export interface Episodes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Episode[];
}
