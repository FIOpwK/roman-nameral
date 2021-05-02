import React from 'react';
import TextItems from './TextItems';
import Buttons from './Buttons';
import './App.css';



const App = () => {
 

  return (
    <div className="App">
      <TextItems/>
      <Buttons/>
      <div class="fb-share-button" data-href="https://roman-nameral-ii.now.sh/" data-layout="button_count" data-size="small">
        <a target="blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Froman-nameral-ii.now.sh%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
      </div>

    </div>
  );
}

export default App;
