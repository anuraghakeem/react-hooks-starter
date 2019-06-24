import React from 'react'
import axios from 'axios'


class ResourceList extends React.Component{
    state={resources:[]}
    async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources:response.data})
    }
    async componentDidUpdate(prevProps){
        if (prevProps.resource !== this.props.resource){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({resources:response.data})
        }
    }
    render(){
        return (
            <div data-test="ResourceListComp">
                <ul>{this.state.resources.map((record)=><li key>{record.title}</li>)}</ul>
            </div>            
        );
    }
}

export default ResourceList;