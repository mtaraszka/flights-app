import { isPlaneOnGround } from '../utilities/functions';
import { Pie } from './charts';


export const PlanesOnGroundCompare = ({ flights }) => {
  return (
    <div>
      {flights && <Pie data={isPlaneOnGround(flights)}/>}
    </div>
  )
}