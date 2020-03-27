import React from 'react';
import { Button, Modal } from 'semantic-ui-react';


import './App.css';

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
const App = () => {
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
    <div className="App">
      <header className="App-header">
        <p>Roman Nameral II</p>
      </header>
      <div>
        <h2>How much does a Name weigh?</h2>
        <p>Play to See</p>
      </div>
      <Button color="purple" onClick={subScore}>Click to Play</Button>
      <div className="weight-container">
        <div className="weight">{total}</div>
      </div>
      <Button onClick={() => setTotal(0)}>Clear</Button>

    </div>
  );
}

export default App;
