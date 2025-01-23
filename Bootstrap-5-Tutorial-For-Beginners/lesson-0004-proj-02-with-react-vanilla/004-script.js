const App = () => {
    return (
      <div>
        <h1>Hello from React(v.004)!</h1>
        <p>This is rendered using JSX in a vanilla JavaScript project.</p>
      </div>
    );
  };

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);