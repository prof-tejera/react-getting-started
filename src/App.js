import React from 'react';

import './App.css';

class CoolButton extends React.Component {
  render() {
    return (
      <button className={`cool-button ${this.props.type}`} onClick={this.props.onClick}>
        Click me
      </button>
    );
  }
}

// Of course the style can be dynamic too!
class App extends React.Component {
  render() {
    return (
      <div>
        <CoolButton type="primary" onClick={() => alert('In App, button was clicked!')}>
          I'm red
        </CoolButton>
      </div>
    );
  }
}

export default App;
