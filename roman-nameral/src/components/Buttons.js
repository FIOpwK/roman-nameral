import React from 'react'
import Button from '@material-ui/core/Button';

import obj from '../obj';
import Display from './Display';



export default function Buttons(props) {
    const [total, setTotal] = React.useState(0);

    const subScore = () => {

        const name = prompt("Enter a name to see its weight: ") || "";
        name.length > 36 ? prompt("Please enter a shorter name...") :

            setTotal(
                name.split('').reduce((score, letter) => {
                    const currentWeight = obj[letter.toUpperCase()];
                    score += currentWeight ? currentWeight : 0;
                    return score;
                }, 0)
            )


        console.log(total)

    }

    return (
        <div>
            <div>
                <Display total={total} />

            </div>

            <div className="button-container">

                <Button
                    style={{margin: '2%'}}
                    size="large"
                    color="primary"
                    variant="outlined"
                    onClick={subScore}>Weigh</Button>


                <Button
                    style={{margin: '2%'}}
                    size="large"
                    color="secondary"
                    variant="outlined"
                    onClick={() => setTotal('')}>Clear</Button>
            </div>



        </div>
    )

}
