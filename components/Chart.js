import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [4, 8, 12, 16, 20],
      backgroundColor: [
        'rgba(239 68 68)',
        'rgba(59 130 246)',
        'rgba(250, 204, 21)',
        'rgba(16 185 129)',
        'rgba(139 92 246)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const optionBar = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
  },
};

const optionHorizontalBar = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
  },
};


export function DoughnutChart() {
  return <Doughnut data={data} />
}

export function PieChart() {
  return <Pie data={data} />
}

export function BarChart() {
  return <Bar options={optionBar} data={data} />
}

export function HorizontalBarChart() {
  return <Bar options={optionHorizontalBar} data={data} />
}