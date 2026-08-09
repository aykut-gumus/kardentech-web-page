import { Locale } from './types';
import { tr } from './dictionaries/tr';
import { en } from './dictionaries/en';
import { ru } from './dictionaries/ru';

export const dictionaries = {
  tr,
  en,
  ru,
};

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] || dictionaries.tr;
};
