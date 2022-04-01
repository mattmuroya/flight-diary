import { diaryEntries } from '../../data/diaries';
import { DiaryEntry, NonSentivieDiaryEntry, NewDiaryEntry } from '../types';

const diaries: Array<DiaryEntry> = diaryEntries;

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSentivieDiaryEntry[] => {
  return diaries.map(({id, date, weather, visibility}) => {
    return { id, date, weather, visibility };
  });
};

const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find(entry => entry.id === id);
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaries.map(elem => elem.id)) + 1,
    ...entry
  };
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  findById,
  addDiary
};