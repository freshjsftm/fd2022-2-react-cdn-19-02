// React;
// ReactDOM;

class Heading extends React.Component {
  render() {
    const { titleProps, classProps, children } = this.props;
    return React.createElement(
      "h2",
      { title: titleProps, className: classProps },
      "Hi!",
      ...children
    );
  }
}

const reactElement = React.createElement(Heading, {
  titleProps: "title for h2",
  classProps: "heading",
}, 'children', '123');

console.log(reactElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);
