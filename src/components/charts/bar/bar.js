import BarChart from './bar-chart';

const data = [
  {category: 'A', value: 40},
  {category: 'B', value: 151},
  {category: 'C', value: 89},
  {category: 'D', value: 124},
  {category: 'D', value: 124},
  {category: 'D', value: 124},
  {category: 'D', value: 124},
]

export const Bar = () => {

  return (
    <div className="App">
      <h2>Graphs with React</h2>
      <BarChart data={data}/>
    </div>
  );
}
