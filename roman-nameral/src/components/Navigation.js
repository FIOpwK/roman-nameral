import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function Navigation(props) {
    const [darkMode, setDarkmode] = React.useState(false);

    const handleChange = e => {
        e.preventDefault();
        setDarkmode(!darkMode)
    }

    return (
        <div>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={handleChange} />}
                    className={darkMode ? 'dark-mode' : 'light-mode'}
                />
            </FormGroup>

        </div>
    )
}
