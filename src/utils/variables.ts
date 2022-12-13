import { EventType } from './types';

export const convertTimeToDate = (date: Date | string, lang: string) => {
  return new Date(date).toLocaleString(lang).replace(/,/g, '');
};

export const formatEventType = (eventType: EventType | string) => {
  return eventType.replace(/-/g, ' ');
};

export const findOccurences = (arr: string[]) => {
  return arr.reduce(
    (prevVal: any, currentVal: any) => (
      (prevVal[currentVal] = (prevVal[currentVal] || 0) + 1), prevVal
    ),
    {}
  );
};
