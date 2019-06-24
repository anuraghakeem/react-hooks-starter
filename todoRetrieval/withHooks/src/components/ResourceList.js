import React from 'react';
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

export default ResourceList;
