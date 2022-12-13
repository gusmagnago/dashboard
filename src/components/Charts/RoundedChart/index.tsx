import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';

import { EventInterface } from '../../../utils/types';
import { findOccurences } from '../../../utils/variables';
import Card from '../../Card';
import RadioButton from '../../RadioButton';
import { ChangeEvent, useEffect, useState } from 'react';
import { chartSytling } from '../utils';

type ChartPropTypes = {
  data: EventInterface[];
};

ChartJS.register(ArcElement, Tooltip, Legend);

const RoundedChart = ({ data }: ChartPropTypes) => {
  const [chartValue, setChartValue] = useState('type');
  const [event, setEvent] = useState();

  const eventTypes = data.map((event) => event.type);
  const eventSeverity = data.map((event) => event.severity);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setChartValue(e.target.value);
  };

  useEffect(() => {
    if (chartValue === 'type') {
      return setEvent(findOccurences(eventTypes));
    }
    return setEvent(findOccurences(eventSeverity));
  }, [chartValue]);

  const buttonValues = ['type', 'severity'];
  const options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  const chartData = {
    labels: event && Object.keys(event),
    datasets: [
      {
        label: `events`,
        data: event && Object.entries(event).map((val) => val[1]),
        ...chartSytling,
      },
    ],
  };

  return (
    <Card>
      <div>
        {buttonValues.map((option, index) => (
          <RadioButton
            key={`${option}-${index}`}
            name={option}
            value={option}
            label={`Select by Event ${option}`}
            checked={chartValue === option}
            onChange={(e) => handleChangeValue(e)}
          />
        ))}
      </div>
      <div>
        <Doughnut data={chartData} height={200} options={options} />
      </div>
    </Card>
  );
};

export default RoundedChart;
