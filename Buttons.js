import React from 'react'
import Button from '@material-ui/core/Button';
import obj from './obj';
import Display from './Display';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';



export default function Buttons(props) {
    const [total, setTotal] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');

    const handleChange = e => {
        e.preventDefault();
        setName(e.target.value);
        

    }

    const handleQuote = e => {
        console.log(`${name}`)
    }

    const subScore = () => {


        // const name = window.prompt("Enter a name to see its weight") || "";
        name.length > 36 ? alert("Please enter a shorter name...", handleQuote) :

            setTotal(
                //  math games switch on the number side of your brain so your mental math skills are raring to go
                // An average is the sum of all the numbers in a set, divided by the number of numbers in that set.
                // Event ID: CRO-9498-BIAC
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
                <Badge color="secondary" badgeContent={count}>
                    <TextField
                        label="Nameral"
                        value={name}
                        onChange={handleChange}
                        variant="filled"


                    />

                </Badge>
                <Display total={total} />

            <div className="button-container">

                <Button
                    style={{ margin: '2%' }}
                    size="large"
                    color="primary"
                    variant="outlined"
                    onMouseDown={() => setCount(count + 1)}
                    onClick={subScore}>Expendo</Button>
                <Button
                    style={{ margin: '2%' }}
                    size="large"
                    color="secondary"
                    variant="outlined"
                    onMouseUp={() => setName('')}
                    onMouseDown={() => setCount(Math.max(count - 1, 0))}
                    onClick={() => setTotal('')}>Doceo</Button>
            </div>
            </div>

        </div>
    )

}
