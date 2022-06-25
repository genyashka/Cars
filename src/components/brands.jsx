//import * as React from 'react';
import { getModels} from '../models/brands/list'



export function Brands() {
  return (
    <div>
        <ul>
            {getModels().map(model =>
                <li key={model}>
                    <a href={'/brands/' + model}>{model}</a>
                </li>
            )}
        </ul>
       
    </div>
  );
}
