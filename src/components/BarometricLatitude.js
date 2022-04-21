import { Bar } from './charts';
import { baroAltitudeCount } from '../utilities/functions';

export const BarometricLatitude = ({ flights }) => {
  return (
    <div>
      <Bar
        data={baroAltitudeCount(flights)}
        columnsColor={'#D6A'}
      />
    </div>
  );
};

