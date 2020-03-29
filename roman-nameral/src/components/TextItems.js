import React from 'react'

import Navigation from './Navigation';
import TextField from '@material-ui/core/TextField';

const TextItems = (props) => {
    const [name, setName] = React.useState('')

    const handleChange = e => {
        e.preventDefault();
        setName(e.target.value);
        console.log(e.target.value, name)
        
    }
    

    // const handleSubmit = e => {
    //     console.log('clicked', name)
    // }

    return (
        <>

            <div className="App">
                <Navigation />
                <header className="App-header">

                    <h1>Roman Nameral II</h1>
                </header>
                <div className="text-content">
                </div>
                <h1 className={'dark-mode light-mode'}>Does your Name have weight?</h1>
            </div>

            <TextField
                label="Nameral"
                value={name}
                onChange={handleChange}
                variant="filled"
                
                // onSubmit={handleSubmit}
                
            />
        </>
    )

}
export default TextItems;