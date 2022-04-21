import BarChart from './bar-chart';

export const Bar = ({ data, columnsColor }) => {
  return (
    <div>
      <BarChart data={data} columnsColor={columnsColor}/>
    </div>
  );
};
