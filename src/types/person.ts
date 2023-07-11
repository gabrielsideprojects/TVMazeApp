export interface Person {
  name: string;
  id: number;
  image?: {
    medium: string;
  };
}

export interface PersonSearchResponse {
  person: Person;
}
