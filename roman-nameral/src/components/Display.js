import React from 'react'
import {Segment} from 'semantic-ui-react';
// import Media from 'react-media';

export default function Display(props) {
    return (
        <div className="display-container">
            
            <Segment circular inverted color="black" raised>
                <div className="weight">{props.total}</div>
            </Segment>
            
        </div>
    )
}
