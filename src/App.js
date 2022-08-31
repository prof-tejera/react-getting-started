const PropBook = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
};

const ChildBook = ({ title, children }) => {
  // All components receive children - if there are none, for example in a self-closing tag, it will be null

  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const App = () => {
  const content = (
    <div>
      <p>hello 1</p>
      <p>hello 2</p>
    </div>
  );

  return (
    <div>
      {/* Passing the content in a standard prop */}
      <PropBook title="Hello World" content={content} />

      {/* Now we nest the content inside the book, which can then be accessed through its children prop instead */}
      <ChildBook title="Hello World">{content}</ChildBook>

      {/* We can also set the children prop explicitly */}
      <ChildBook title="Hello World" children={content} />
    </div>
  );
};

export default App;
