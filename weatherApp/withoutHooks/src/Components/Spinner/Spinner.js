import React from 'react'

class Spinner extends React.Component {
    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui text loader">Please accept the request</div>
            </div>
        )
    }
}

export default Spinner;