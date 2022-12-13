import { useEffect, useState } from 'react';
import { EventInterface } from './types';

import { useQuery } from 'react-query';

interface IUseEvents {
  pageParam: number;
}

export const useEvents = ({ pageParam }: IUseEvents) => {
  return useQuery(
    ['events', pageParam],
    () => fetch(`/data.json?page=${pageParam}`).then((res) => res.json()),
    { staleTime: 10000 }
  );
};
