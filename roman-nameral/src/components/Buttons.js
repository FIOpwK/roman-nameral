import React from 'react'
import { Button, Icon } from 'semantic-ui-react';

import Media from 'react-media';
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
            <Display total={total} />
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {
                    matches => (
                        <React.Fragment>
                            {matches.small &&
                                <Button
                                    size="massive"
                                    color="violet"
                                    onClick={subScore}>See</Button>
                            }

                            {matches.medium &&
                                <Button
                                    size="massive"
                                    color="blue"
                                    onClick={subScore}>Play</Button>
                            }

                            {matches.large &&
                                <Button
                                    size="massive"
                                    color="yellow"
                                    onClick={subScore}>Go</Button>
                            }
                        </React.Fragment>
                    )
                }

            </Media>
            <Button size="massive" color="black" onClick={() => setTotal(0)}>Clear</Button>


        </div>
    )

}
