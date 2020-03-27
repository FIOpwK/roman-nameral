import React from 'react'

export default function Display(props) {
    return (
        <div>
            <div className="weight-container">
                <div className="weight">{props.total}</div>
            </div>
            
        </div>
    )
}
