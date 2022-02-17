import React from 'react';
import EChartsReact from 'echarts-for-react';
import dayjs from 'dayjs';

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
        max: 400,
      },
    ],

    title: [
      {
        text: title,
        subtext: subtitle,
        textStyle: {
          fontSize: '24px',
        },
        subtextStyle: {
          fontSize: '18px',
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

  return <EChartsReact option={option} style={{ height: '600px' }} />;
};

export default LineChart;
