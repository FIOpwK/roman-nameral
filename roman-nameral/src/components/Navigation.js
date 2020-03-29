import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import useLocalStorage from '../hooks/useLocalStorage';
// import Badge from '@material-ui/core/Badge';



const Navigation = (e) => {
    const [darkMode, setDarkmode] = React.useState(true);

    
    const handleChange = e => {
        e.preventDefault();
        setDarkmode(!darkMode)
    }
    
    return (
        <div>
            <div>
                
            </div>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={handleChange} />}
                    className={darkMode ? 'dark-mode' : 'light-mode'}
                    />
            </FormGroup>

            {darkMode ? document.body.classList.add('dark-mode') : 
            document.body.classList.remove('dark-mode') },

           {!darkMode ? document.body.classList.add('light-mode') :
            document.body.classList.remove('light-mode')}
            

        </div>
    )
}

export default Navigation;
