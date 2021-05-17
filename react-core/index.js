// const element = <h1>Hello world</h1>
// const element = React.createElement('h1', {}, 'Hello world');
// const container = document.getElementById("root");

// const reactElement = {
//   type: "h1",
//   props: {
//     title: "foo",
//     children: "Hello world",
//   },
// };

// const domElement = document.createElement(reactElement.type);
// domElement["title"] = reactElement.props.title;

// const domTextNode = document.createTextNode("");
// domTextNode["nodeValue"] = reactElement.props.children;

// domElement.appendChild(domTextNode);
// container.appendChild(domElement);
const { createElement } = require("./ReactElement");
const { render } = require("./ReactFiber");

/** @jsx createElement */
const reactElement = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
/** @jsx createElement */
function App(props) {
  return <h1>Hello {props.name}</h1>;
}
// const element = <App name="joao" />;

function Counter() {
  const [state, setState] = React.useState(1);
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}

const element = <Counter />;
const container = document.getElementById("root");

render(element, container);
