// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
// replace union type with enum:
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

// export type Visibility = 'great' | 'good' | 'ok' | 'poor';
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NonSentivieDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;