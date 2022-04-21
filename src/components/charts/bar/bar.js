import BarChart from './bar-chart';

export const Bar = ({ data, title, columnsColor }) => {
  return (
    <div>
      <h2>{title}</h2>
      <BarChart data={data} columnsColor={columnsColor}/>
    </div>
  );
};
