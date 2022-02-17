import React from 'react';
import EChartsReact from 'echarts-for-react';
import dayjs from 'dayjs';
import Spinner from './Spinner';

interface LineChartProps {
  data: [number, number][];
  title: string;
  subtitle: string;
  dateFormat: string;
  valueFormatter: (value: number) => string;
}

const LineChart: React.FC<LineChartProps> = ({ data, title, subtitle, dateFormat, valueFormatter }) => {
  const option = {
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 5000,
        inRange: {
          color: ['#0ea5e9', '#0c4a6e'],
        },
        outRange: {
          color: ['#bae6fd', '#0ea5e9'],
        },
      },
    ],

    title: [
      {
        text: title,
        subtext: subtitle,
        textStyle: {
          fontSize: '24px',
          color: '#0ea5e9',
        },
        subtextStyle: {
          fontSize: '18px',
          color: '#7dd3fc',
        },
      },
    ],
    grid: {
      top: 100,
    },
    tooltip: {
      trigger: 'axis',
      valueFormatter,
    },
    yAxis: [{}],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data,
      },
    ],
    xAxis: [
      {
        type: 'time',
        axisLabel: {
          formatter: (value: number) => dayjs(value).format(dateFormat),
        },
      },
    ],
  };

  const loading = data.length === 0;

  return (
    <div className="h-[38rem]">
      {loading ? <Spinner /> : <EChartsReact option={option} style={{ height: '100%' }} />}
    </div>
  );
};

export default LineChart;
