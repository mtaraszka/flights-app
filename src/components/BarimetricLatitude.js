import {Bar} from "./charts";
import {baroAltitudeCount} from "../utilities/functions";

export const BarimetricLatitude = ({flights}) => {
    return (
        <div>
            <Bar
                data={baroAltitudeCount(flights)}
                title={'Wysokość barometryczna'}
                columnsColor={'#D6A'}
            />
        </div>
    );
};

