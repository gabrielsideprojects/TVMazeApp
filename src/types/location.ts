export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Locations {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Location[];
}
