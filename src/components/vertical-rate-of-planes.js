import { Pie } from './charts';
import { verticalRateOfFlyingPlanes } from '../utilities/functions';

const VerticalRateOfPlanes = ({ flights }) => {
  return (
    <div>
      <Pie data={verticalRateOfFlyingPlanes(flights)}/>
    </div>
  )
}

export default VerticalRateOfPlanes;
