import React, { Component } from 'react';
import './App.css';
import Counterclass from './Classcounter';
import Functioncounter from './Functioncounter';

class App extends Component {
  render() {
    return(
      <div>
<Counterclass/>
<Functioncounter/>
</div>
);
    }
}

export default App;