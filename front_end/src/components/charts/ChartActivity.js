import '../../style/charts/chartActivity.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActivity } from '../../data/getData';

export default function ChartActivity() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getActivity(id);
      setDatas(datas.data.sessions);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function customTick(day) {
    return Number(day.slice(8));
  }
  return (
    <BarChart
      width={550}
      height={223}
      data={datas}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tickFormatter={customTick}
      />
      <YAxis
        yAxisId={1}
        dataKey="kilogram"
        orientation="right"
        axisLine={false}
        tickLine={false}
        tickCount={4}
        type="number"
        domain={['dataMin - 1', 'dataMax + 1']}
      />
      <YAxis yAxisId={2} hide dataKey="calories" />
      <Tooltip
        content={<CustomTooltip />}
        wrapperStyle={{ outlineStyle: 'none' }}
      />
      <Legend verticalAlign="top" align="right" iconType="circle" />
      <Bar
        yAxisId={1}
        dataKey="kilogram"
        barSize={10}
        fill="red"
        radius={[10, 10, 0, 0]}
        name="Poids (kg)"
      />
      <Bar
        yAxisId={2}
        dataKey="calories"
        barSize={10}
        fill="black"
        radius={[10, 10, 0, 0]}
        name="Calories Brûlées (kCal)"
      />
    </BarChart>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <h4>{payload[0].value} kg</h4>
        <h4>{payload[1].value} kcal</h4>
      </div>
    );
  }
  return null;
}

/*   console.log('datas', datas);
  let dayList = [];
  let index = [];
  /*
  datas.forEach((days) => {
    console.log('days.day', days.day);

    dayList.push(days.day);
    index.push(dayList.indexOf(days.day) + 1);
    console.log('index', dayList.indexOf(days.day));
  });
  console.log('new array', dayList);
  console.log('new index', index);
  
 
  function formatXAxis(day) {
    console.log(day);
    /*     
    datas.forEach((days) => {
      console.log('days.day', days.day);

      dayList.push(days.day);
      index.push(dayList.indexOf(days.day) + 1);
      console.log('index', dayList.indexOf(days.day));
    });
    return index;
 
  }
  console.log('new array', dayList);
  console.log('new index', index);
 */
