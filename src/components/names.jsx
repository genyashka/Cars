import { getcarsByModel, getCarsByModelByName } from '../models/brands/list'
import {
    useParams
} from "react-router-dom";

export function Names() {
    let { name, brand } = useParams();
    return (
        <div>
            <h2>
                {name}
            </h2>
            {getCarsByModelByName(name, brand).map(description =>  description.price + ' ' + description.year
            )}

        </div >
    );
}