export interface Trails {
  id: number;
  name: string;
  type: string;
  summary: string;
  difficulty: string;
  stars: number;
  starVotes: number;
  location: string;
  url?: string;
  imgSqSmall: string;
  imgSmall: string;
  imgSmallMed: string;
  imgMedium: string;
  length: number;
  ascent: number;
  high: number;
  low: number;
  longitude: number;
  latitude: number;
  conditionStatus: string;
  conditionDetails: string;
  conditionDate: number;
}
