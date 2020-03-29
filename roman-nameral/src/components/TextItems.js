import React from 'react'

import Navigation from './Navigation';
import TextField from '@material-ui/core/TextField';

const TextItems = (props) => {
    const [name, setName] = React.useState('')

    const handleChange = e => {
        e.preventDefault();
        setName(e.target.value)
        
    }

    return (
        <>

            <div className="App">
                <Navigation />
                <header className="App-header">

                    <h1>Roman Nameral II</h1>
                </header>
                <div className="text-content">
                </div>
                <h1 className={'dark-mode light-mode'}>Enter a Name to see its weight </h1>
            </div>

            <TextField
                label="Name"
                value={name}
                onChange={handleChange}
                variant="filled"
                
            />
        </>
    )

}
export default TextItems;