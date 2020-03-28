import React, { Component } from 'react'
import {Header} from 'semantic-ui-react';

export default class TextItems extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Roman Nameral II</h1>
                </header>
                <div className="text-content">
                </div>
                    <Header size="large" as="h1">"How much does a Name weigh" ?</Header>
            </div>
        )
    }
}
