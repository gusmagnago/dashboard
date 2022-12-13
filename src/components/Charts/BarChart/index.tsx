import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement } from 'chart.js/auto';
import { EventInterface } from '../../../utils/types';
import { findOccurences } from '../../../utils/variables';
import { chartSytling } from '../utils';

type PropTypes = {
  data: EventInterface[];
};

ChartJS.register(BarElement);

const BarChart = ({ data }: PropTypes) => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Object Types',
      },
    },
  };

  const objectType = data.map((event) => event.objectType);

  const objectTypesOcurr = findOccurences(objectType);

  const chartData = {
    labels: Object.keys(objectTypesOcurr),
    datasets: [
      {
        label: 'Events:',
        data: objectTypesOcurr,
        ...chartSytling,
      },
    ],
  };

  return (
    <>
      <Bar data={chartData} height={50} options={options} />
    </>
  );
};

export default BarChart;
