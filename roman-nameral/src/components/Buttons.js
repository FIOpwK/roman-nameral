import React from 'react'
import { Button } from 'semantic-ui-react';
import Media from 'react-media';

const obj = {
    X: 10,
    M: 1000,
    I: 1,
    C: 100,
    D: 500,
    L: 50,
    V: 5,
    Y: 5000,
    Q: 10,
    R: 1,
    S: 5
}

export default function Buttons() {
    const [total, setTotal] = React.useState(0);

    const subScore = () => {

        const name = prompt("Enter a name to see its weight: ") || "";
        if (name) {
            setTotal(
                name.split('').reduce((score, letter) => {
                    const currentWeight = obj[letter.toUpperCase()];
                    score += currentWeight ? currentWeight : 0;
                    return score;
                }, 0)
            )
        }

        console.log(total)

    }

    return (
        <div>
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {
                    matches => (
                        <React.Fragment>
                            {matches.small && <Button size="massive" color="violet" onClick={subScore}>Play to See</Button>}
                            {matches.medium && <Button size="large" color="blue" onClick={subScore}>Click to Play</Button>}
                            {matches.large && <Button size="massive" color="yellow" onClick={subScore}>Click to Play</Button>}
                        </React.Fragment>
                    )
                }

            </Media>
            <div className="weight-container">
                <div className="weight">{total}</div>
            </div>
            <Button size="massive" color="black" onClick={() => setTotal(0)}>Clear</Button>
        </div>
    )

}
