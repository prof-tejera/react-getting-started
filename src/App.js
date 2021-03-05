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

class App extends React.Component {
  render() {
    return (
      <CoolButton
        type="primary"
        onClick={() => {
          console.log('button clicked');
        }}
      >
        Click me
      </CoolButton>
    );
  }
}

export default App;
