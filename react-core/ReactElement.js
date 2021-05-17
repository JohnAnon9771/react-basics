function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      // In react, never exist children with array empty, exist calculus for perfomance
      children: [],
    },
  };
}

export function createElement(type, props, children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

// const reactElement = createElement("div", { id: "foo" }, [
//   createElement("a", {}, "bar"),
//   createElement("b", {}, null),
// ]);
