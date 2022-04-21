import { Pie } from './charts';
import { verticalRateOfFlyingPlanes } from '../utilities/functions';

const VerticalRateOfPlanes = ({ flights }) => {
  return (
    <div>
      <h2>Status samolotów w powietrzu na podstawie prędkości opadania/wznoszenia</h2>
      {flights && <Pie data={verticalRateOfFlyingPlanes(flights)}/>}
    </div>
  )
}

export default VerticalRateOfPlanes;
