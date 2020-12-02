import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
  
      <div>
        <ul>
          <li> <a href=""> Home </a>  </li>
          <li> <a href=""> Post </a> </li>
        </ul>
      </div>
        <Blog />
      </div>
    );
  }
}

export default App;
