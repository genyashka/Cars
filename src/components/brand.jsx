import {
  useParams
} from "react-router-dom";
import { getcarsByModel } from '../models/brands/list'

export function Brand() {
  let { brand } = useParams();
  return (
    <div>
      <h2>
        {brand}
      </h2>
      <ul>
            {getcarsByModel(brand).map(car =>
                <li key={car.name}>
                    <a href={'/brands/' + brand + '/' + car.name}>{car.name}</a>
                </li>
            )}
        </ul>
       
    </div>
  );
}

