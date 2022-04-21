import { Bar } from './charts';
import { checkTrackOfPlanes } from '../utilities/functions';

const CheckTrackOfPlanes = ({ flights }) => {
  return (
  <div>
    <Bar
      data={checkTrackOfPlanes(flights)}
      title={'Kierunek lotów'}
      columnsColor={'#B6A'}
    />
  </div>
  );
};

export default CheckTrackOfPlanes;
