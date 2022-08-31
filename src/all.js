// Announcements:
// - es6-primer -> practice.test using async / await
// - HW0 -> tests
// - create react app

// https://www.npmjs.com/
// https://snyk.io/advisor/npm-package/react
// npm vs yarn
// - performance: yarn
// - security: similar - both check packages with known vulnerabilities

// package-lock.json
// - https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json
// node_modules
// - ejecting

// package.json
// - name: url safe, hyphens, lowercase
// - private: published or not in npm registry
// - dependencies
//  - react-dom: allows react to interact with the DOM
//  - react-scripts: utilities like hot reload, server, etc
// browserlist:
// - the build process generates a "bundle"

// robots.txt -> tell scrapers not to index this file
// manifest.json -> metadata for a progressive web app

// index.html
// - %PUBLIC_URL% -> the public path of the app
//

// ---------------------------------------------------------------------------------------

// JSX
const comp = <div>hello world</div>;

// This strange syntax is not a string and is not HTML
// JSX -> JS Extension (X) produces React elements
// rendering and UI logic are tightly coupled (state changes, data preparation for display)
// separation of concerns: components are grouped functionally instead of by technology

/*
React.createElement(
  type,
  [props],
  [...children]
)
*/

const comp = React.createElement('div', {}, 'hello world, no JSX!');

ReactDOM.render(comp, document.getElementById('root'));

// What's so great about React?
// React elements are plain objects, and are cheap to create (unlike DOM objects)
// Updating the DOM directly is very inefficient, many times we render/re-render a lot more
// things than we need to. Instead, React keeps a Virtual DOM, a tree that is synced with
// the real DOM. When a change occurs, the virtual DOM is updated, diffed with the real
// DOM and only the things that need re-rendering are actually re-rendered.

// Updates
// Once you create an element, you can’t change its children or attributes.
// React DOM compares the element and its children to the previous one, and only
// applies the DOM updates necessary to bring the DOM to the desired state.

// do this in index.js
const tick = () => {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
};

setInterval(tick, 1000);

// Embedding

// We can embed variables
const variable = 'E-39';
const comp = <div>hello {variable}</div>;

const printAnimal = ({ name, action }) => {
  return `the ${name} ${action}`;
};

const animal = {
  name: 'dog',
  action: 'barks',
};

// Or any JS expression
// Safe to embed user input, by default its escaped and converted to string
const comp = <div>hello {printAnimal(animal)}</div>;

// When content spans multiple lines, you can include parentheses for readability
return (
  <div>
    <div>
      <b>Hello</b> {printAnimal(animal)}
    </div>
  </div>
);

// We don't need to return a string, but anything that can represent a React node
// anything that can be rendered
const printAnimal = animal => {
  if (!animal) {
    return (
      <div>
        <b>Inexistent animals do nothing</b>
      </div>
    );
  }

  const { name, action } = animal;
  return (
    <div>
      the <b>{name}</b> {action}
    </div>
  );
};

// passing properties to elements
const comp = <div id="123">hello</div>;

// dynamic props
const id = '123';
const comp = <div id={id}>hello my ID is {id}</div>;

// self-closing tags (not valid per HTML spec) but
// react allows it
return <div prop1="1" prop2="2" />;

// children
return (
  <div>
    <span>I'm a child</span>
  </div>
);

// Components
// So far plain we've used plain HTML elements
// we want our own components!

class Animal extends React.Component {
  render() {
    const { name, action } = this.props;

    if (!name) {
      return (
        <div>
          <b>Inexistent animals do nothing</b>
        </div>
      );
    }

    return (
      <div>
        the <b>{name}</b> {action}
      </div>
    );
  }
}

// Remember to return NULL and never undefined

// Using our components
return (
  <div>
    <Animal name="Dog" action="barks" />
  </div>
);

// Event handling

// Traditional HTML/JS -> not very easy to scale (add in index.html)
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>;

class App extends React.Component {
  render() {
    return (
      <button
        onClick={e => {
          console.log('The button was clicked.');
        }}
      >
        Click me
      </button>
    );
  }
}

// Using "this" (why we said don't use)
class App extends React.Component {
  handler1() {
    console.log('in handler 1', this);
  }

  handler2 = () => {
    console.log('in handler 2', this);
  };

  handler3() {
    console.log('in handler 3', this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handler1}>Handler</button>
        <button onClick={this.handler2}>Handler 2</button>
        <button onClick={this.handler3}>Handler</button>
      </div>
    );
  }
}

// this
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handler1 = this.handler1.bind(this);
  }

  handler1() {
    console.log('in handler 1', this);
  }

  handler2 = () => {
    console.log('in handler 2', this);
  };

  handler3() {
    console.log('in handler 3', this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handler1}>Handler</button>
        <button onClick={this.handler2}>Handler 2</button>
        <button onClick={() => this.handler3()}>Handler</button>
      </div>
    );
  }
}

// children props
class Book extends React.Component {
  render() {
    const { title, content } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <div>{content}</div>
      </div>
    );
  }
}

// the call is
class App extends React.Component {
  render() {
    const content = (
      <div>
        <p>hello 1</p>
        <p>hello 2</p>
      </div>
    );

    return (
      <div>
        <Book title="Hello World" content={content} />
      </div>
    );
  }
}

// instead we can use children

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
        <Book title="Hello World">
          <div>
            <p>hello child 1</p>
            <p>hello child 2</p>
          </div>
        </Book>
      </div>
    );
  }
}

// Fragments
class App extends React.Component {
  render() {
    return (
      <>
        <Book title="Book 1">
          <div>
            <p>hello 1</p>
            <p>hello 2</p>
          </div>
        </Book>
        <Book title="Book 2">
          <div>
            <p>hello 1</p>
            <p>hello 2</p>
          </div>
        </Book>
      </>
    );
  }
}

// conditional rendering
class User extends React.Component {
  render() {
    const user = null;
    if (user) {
      return <div>Welcome {user.username}</div>;
    } else {
      return <button>Log In</button>;
    }
  }
}

class App extends React.Component {
  render() {
    const user = null;
    return user ? <div>Welcome {user.username}</div> : <div>Not logged in</div>;
  }
}

class App extends React.Component {
  render() {
    const user = null;
    return user && <div>Welcome {user.username}</div>;
  }
}

class App extends React.Component {
  render() {
    const user = null;

    // Falsy
    return (
      <>
        {user && <div>Welcome {user.username}</div>}
        {!user && <div>Not logged in</div>}
        {0 && <div>Does 0 render?</div>}
        {null && <div>Does null render?</div>}
        {undefined && <div>Does undefined render?</div>}
        {false && <div>Does false render?</div>}
        {'' && <div>Does empty string render?</div>}
      </>
    );
  }
}

// Iterating
class App extends React.Component {
  render() {
    const list = ['a', 'b', 'c'];

    return (
      <div>
        {list.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    );
  }
}

// Styling using classNames
import './App.css';

class App extends React.Component {
  render() {
    return <button className="cool-button">Click me</button>;
  }
}

class CoolButton extends React.Component {
  render() {
    return <button className={`cool-button ${this.props.type}`}>Click me</button>;
  }
}

// Of course the style can be dynamic too!
class App extends React.Component {
  render() {
    return (
      <div>
        <CoolButton type="primary">I'm red</CoolButton>
        <CoolButton type="danger">I'm blue</CoolButton>
      </div>
    );
  }
}

// Passing down handlers
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
class App extends Component {
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
