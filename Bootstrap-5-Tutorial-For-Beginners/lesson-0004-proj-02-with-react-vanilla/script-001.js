const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello from React!"),
    React.createElement(
      "p",
      null,
      "This is rendered using React in a vanilla JavaScript project."
    )
  );
};

// Render the React app into the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
