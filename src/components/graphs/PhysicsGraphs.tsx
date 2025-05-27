import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

interface DataPoint {
  time: number;
  value: number;
}

interface PhysicsGraphsProps {
  positionData: DataPoint[];
  velocityData: DataPoint[];
  energyData: {
    time: number;
    kinetic: number;
    potential: number;
    total: number;
  }[];
  maxDataPoints?: number;
}

export const PhysicsGraphs = ({
  positionData,
  velocityData,
  energyData,
  maxDataPoints = 100,
}: PhysicsGraphsProps) => {
  const createChartData = (
    data: DataPoint[],
    label: string,
    color: string
  ): ChartData<'line'> => ({
    labels: data.slice(-maxDataPoints).map(d => d.time.toFixed(1)),
    datasets: [
      {
        label,
        data: data.slice(-maxDataPoints).map(d => d.value),
        borderColor: color,
        backgroundColor: color,
        tension: 0.1,
      },
    ],
  });

  const createEnergyChartData = (): ChartData<'line'> => ({
    labels: energyData.slice(-maxDataPoints).map(d => d.time.toFixed(1)),
    datasets: [
      {
        label: 'Kinetic Energy',
        data: energyData.slice(-maxDataPoints).map(d => d.kinetic),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Potential Energy',
        data: energyData.slice(-maxDataPoints).map(d => d.potential),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Total Energy',
        data: energyData.slice(-maxDataPoints).map(d => d.total),
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0.1,
      },
    ],
  });

  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 0,
    },
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Time (s)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '20px' }}>
        <h4>Position vs Time</h4>
        <Line
          data={createChartData(positionData, 'Height (m)', 'rgb(75, 192, 192)')}
          options={{
            ...options,
            scales: {
              ...options.scales,
              y: {
                ...options.scales!.y,
                title: {
                  display: true,
                  text: 'Height (m)',
                },
              },
            },
          }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Velocity vs Time</h4>
        <Line
          data={createChartData(velocityData, 'Velocity (m/s)', 'rgb(255, 99, 132)')}
          options={{
            ...options,
            scales: {
              ...options.scales,
              y: {
                ...options.scales!.y,
                title: {
                  display: true,
                  text: 'Velocity (m/s)',
                },
              },
            },
          }}
        />
      </div>
      
      <div>
        <h4>Energy vs Time</h4>
        <Line
          data={createEnergyChartData()}
          options={{
            ...options,
            scales: {
              ...options.scales,
              y: {
                ...options.scales!.y,
                title: {
                  display: true,
                  text: 'Energy (J)',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
