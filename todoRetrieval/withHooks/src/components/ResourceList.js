import React from 'react';
import PropTypes from 'prop-types';

import useResource from './useResources'

const ResourceList = ( {resource} ) => {
    const resources = useResource(resource);    

    return (
        <div data-test="ResourceListComp">
            <ul>
                {resources.map(record =>(
                    <li id={record.id}>{record.title}</li>
                ))}
            </ul>
        </div>
        
    )

}
ResourceList.propTypes = {
    resource : PropTypes.string
}
export default ResourceList;
