import BarChart from './bar-chart';

export const Bar = ({ data, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <BarChart data={data} columnsColor={'#B6A'}/>
    </div>
  );
};
