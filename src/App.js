import * as React from 'react'
import { Outlet, Link } from 'react-router-dom';

function App() {
    return (
        <div >
            <h1>
                Make the right choice
            </h1>
            {/* <nav>
            <Link to="/audi">Audi</Link> |{' '}
            <Link to="/mercedes">Mercedes-Benz</Link> |{' '}
            <Link to="/bmw">BMW</Link>
            </nav> */}
         <Outlet /> 
        </div>
    );
}   

export default App