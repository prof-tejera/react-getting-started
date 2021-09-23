# React Application Structure

We will be using Create React App to create our applications. This provides us a boilerplate app that acommodates most use cases and gets us up and running with a single command:

```sh
npx create-react-app my-app
```

This will create a new folder **my-app** with the following contents:

```
my-app
	/.git
	/.gitignore
	/node_modules
	/public
  /src
	package.json
	README.md
	yarn.lock
```

 **.git** stores all information required to keep your project under version control (commits, pushes, repositories, etc)

**.gitignore** pre-filled list of files that should not be included in version control

**node_modules** this folder stores all packages and modules installed in this application

**public** holds all static assets in our web application

- `manifest.json` metadata for progressive web apps - includes all information used to "install" the application on a device (icon, name, etc)
- `robots.txt` tells web scrapers and bots how to index this application. Note that there are no guarantees that the rules defined here will be followed
- `index.html` this is the entry point to our application. When we make a request to view the app, the response will be the `index.html` file. Note that this is a traditional HTML file, no JSX, no React - the important pieces here are:

```html
<!-- The root node to which our entire application will be appended -->
<div id="root"></div>
```

- `%PUBLIC_URL%` notice the use of this tag. When building the application, this will be replaced with the path to the **public** directory. In most cases, this will simply be `/` but this is not always the case, so using `%PUBLIC_URL%` is the safer choice. In JS, we can get the path to the **public** folder using `process.env.PUBLIC_URL`.

**src** stores all of the source code in our app, including components, styling, etc

**package.json** metadata about our application, including:

- **name**: the name of our app - be careful with naming conventions, no uppercase letters and should be a URL-safe string
- **version**
- **private**: this will be **true** for any modules that are meant to be published as **npm** packages
- **dependencies**: a list of all required modules to run this app
  - `@testing*` packages used to run tests
  - `react`
  - `react-dom` serves as a link between React and the HTML DOM
  - `react-scripts` encapsulates a lot of boilerplate configuration like Webpack, Babel, etc so we don't have to worry about setting those up
  - `web-vitals` used to measure performance on our application

> Note about versioning - in the **package.json** file you will find versions defined as `^1.2.3`. This does not mean specifically `v1.2.3` but actually translates to "compatible with v1.2.3" or "the latest minor or patch version" according to **semver**. This means you could really be installing `v1.3.0`. Unfortunately, module developers are not always careful in versioning and sometimes might introduce a breaking change in a minor or patch version.

- **scripts**
  - `start`: starts the app in development mode (hot reload, error logging, etc)
  - `build`: generates the bundle and static assets into the **build** folder, in production mode with optimized performance
  - `test`: runs all tests
  - `eject`: removes the abstraction layer that Create React App provides, exposing all configurations for Webpack, Babel, ES Lint, etc. Once you eject, you can't go back so be careful. For most use cases, this script should never be used.
- **eslintConfig**: configuration for how our app should be linted (checked for errors, syntax, etc)
- **browserlist**: specifies what browsers should be supported by our application in each environment (production, development). Browsers are specified using queries, such as `%>0.2`, which translates to "browsers with over 0.2% market share". For a full list of queries visit https://github.com/browserslist/browserslist

**yarn.lock** (or **package-lock.json**) stores the exact dependency versions for your project. Because in our **package.json** we can be vague with versions, developers running `npm install` can get different versions, hence creating inconsistencies. The lock files solve that by being specific about what versions are installed.

# Hello World

Like every first interaction with any coding language or framework, we'll start with our "Hello World" example. First, replace the contents of `src/index.js` with the following:

```jsx
import ReactDOM from 'react-dom';

const comp = <div>Hello World</div>;
ReactDOM.render(comp, document.getElementById('root'));
```

Now run the start command `npm start` and now your application should be running at http://localhost:3000. Note that if there is something else running on port 3000, the app will ask if you want to run on a different port.

The first thing you will notice is this strange mix of HTML and JavaScript. The reality is this is not vanilla JS, but JSX, which is a syntax extension to JavaScript. You can think of it as a templating language within JS. Of course browsers don't understand JSX, so behind the scenes React takes care of transpiling all our JSX into vanilla JS as follows:

```jsx
// JSX
const comp = <div>Hello World</div>;

// is transpiled into
const comp = React.createElement('div', {}, 'Hello World');
```

We could avoid the transpiling if we used React's top-level API but it's rather tedious as structure grows so we'll stick to JSX.

In the last line we added, `ReactDOM` takes care of appending our component to the `#root` component of the HTML document, described above in the `index.html` file.

# React Components

Components are at the heart of React. It's the equivalent of the arrival of objects to object-oriented programming, giving us the ability to encapsulate business logic, structure, styling in a single reusable unit.

