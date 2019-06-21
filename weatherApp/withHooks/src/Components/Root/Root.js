/* eslint-disable no-useless-constructor */
import  React, {useState, useEffect } from 'react'
import Season from '../Season/Season'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
// import 'semantic-ui-react';


function Root(props) {
    const [lat, setLat] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setError(err.message)
        )
    });

    function renderContent(){
        if (error && !lat) {
            return <div> <Error message={error} /></div>
        }

        if (!error && lat) {
            return <div> <Season lat={lat} /> </div>
        }

        return <div><Spinner /></div>
    };

    return (
        <div>
            {renderContent()}
        </div>
    )
}


export default Root;


