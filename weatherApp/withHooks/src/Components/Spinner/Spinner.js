import React from 'react'

function Spinner() {
    return (
        <div className="getSpinner">
            <div className="ui active dimmer">
                <div className="ui text loader">Please accept the request</div>
            </div>
        </div>
    )
}

export default Spinner;