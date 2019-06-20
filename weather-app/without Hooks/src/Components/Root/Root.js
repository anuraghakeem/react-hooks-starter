/* eslint-disable no-useless-constructor */
import React from 'react'
import Season from '../Season/Season'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
// import 'semantic-ui-react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { lat: null, errorMessage: null };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent = () => {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> <Error message={this.state.errorMessage}/></div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div> <Season lat={this.state.lat} /> </div>
        }

        return <div><Spinner /></div>
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default App
