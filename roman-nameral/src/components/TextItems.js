import React from 'react'

import Navigation from './Navigation';

const TextItems = (props) => {

    return (
        <>

            <div className="App">
                    <Navigation />  
                <header className="App-header">

                    <h1>Roman Nameral II</h1>
                </header>
                <div className="text-content">
                </div>
                <h1 className={'dark-mode light-mode'}>How much <i>does</i> a Name weigh ?</h1>
            </div>
        </>
    )

}
export default TextItems;