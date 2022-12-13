import { useMemo, useState } from 'react';

import { EventInterface } from '../../utils/types';
import { useEvents } from '../../utils/useEvents';
import { convertTimeToDate, formatEventType } from '../../utils/variables';
import BarChart from '../Charts/BarChart';
import RoundedChart from '../Charts/RoundedChart';
import Loader from '../Loader';

import Table from '../Table';
import { Container } from './styles';

const Content = () => {
  const [pageParam, setPageParam] = useState<number>(1);

  const { data, isLoading } = useEvents({ pageParam });

  const userLanguage = window.navigator.language;

  const eventsData: EventInterface[] = useMemo(() => {
    return data?.data?.map((event: EventInterface) => {
      return {
        ...event,
        type: formatEventType(event?.type),
        time: convertTimeToDate(event?.time, userLanguage),
      };
    });
  }, [data]);

  if (!eventsData || isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <h1>Welcome</h1>
      <Table data={eventsData} />
      <>
        <RoundedChart data={eventsData} />
        <BarChart data={eventsData} />
      </>
    </Container>
  );
};
export default Content;
