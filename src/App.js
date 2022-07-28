import React from 'react';

import './App.css';

class Book extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Book
          title="Hello World"
          children={
            <div>
              <p>hello child 1</p>
              <p>hello child 2</p>
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
