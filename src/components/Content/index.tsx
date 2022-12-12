import { EventType } from '../../utils/types';
import { useEvents } from '../../utils/useEvents';

import Table from '../Table';
import { Container } from './styles';

const Content = () => {
  const { events, loading } = useEvents();

  const userLanguage = window.navigator.language;

  const convertTimeToDate = (date: Date | string) => {
    return new Date(date).toLocaleString(userLanguage).replace(/,/g, '');
  };

  const formatEventType = (eventType: EventType | string) => {
    return eventType.replace(/-/g, ' ');
  };

  const newData = events?.map((event) => {
    return {
      ...event,
      type: formatEventType(event.type),
      time: convertTimeToDate(event.time),
    };
  });

  return (
    <Container>
      <h1>Content</h1>
      {newData && <Table data={newData} />}
    </Container>
  );
};
export default Content;
