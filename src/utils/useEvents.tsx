import { useEffect, useState } from 'react';
import { EventInterface } from './types';

export const useEvents = () => {
  const [events, setEvents] = useState<EventInterface[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!events?.length) {
      loading;
      const getEvents = () => {
        fetch('/data.json')
          .then((res) => res.json())
          .then((events) => setEvents(events));
      };
      setLoading(false);
      getEvents();
    }
  }, []);

  return {
    events,
    loading,
  };
};
