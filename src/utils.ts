import { NewDiaryEntry, Weather, Visibility } from './types';

interface Fields {
  comment: unknown;
  date: unknown;
  weather: unknown;
  visibility: unknown;
}

export const toNewDiaryEntry = ({ comment, date, weather, visibility }: Fields): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(comment),
    date: parseDate(date),
    weather: parseWeather(weather),
    visibility: parseVisibility(visibility)
  };
  return newEntry;
};

// data parsing

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Comment is missing or malformed.');
  }
  return comment; // complier knows this is a string bc of the type predicate in isString(text) function
};

const parseDate = (date: unknown): string => {
  // note - 'date' argument is checked with isString func which returns the type predicate of string which is why the complier accepts it as a string
  if (!date || !isString(date) || !isDate(date)){
    throw new Error('Date is missing or malformed:' + date);
  }
  return date;
};

const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isWeather(weather)) {
    throw new Error('Weather is missing or malformed:' + weather);
  }
  return weather;
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
    throw new Error('Visibility is missing or malformed:' + visibility);
  }
  return visibility;
};

// utility functions

const isString = (text: unknown): text is string => {
  return (typeof text === 'string' || text instanceof String);
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date)); // basically just validates that the input string can be parsed as a date and if so, returns true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any): param is Weather => { // must be type: any, because we are checking against Weather.<value> which may or may not be a string
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Weather).includes(param); // array of enum paramers includes the selected parameter (any type)
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isVisibility = (param: any): param is Visibility => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Visibility).includes(param);
};