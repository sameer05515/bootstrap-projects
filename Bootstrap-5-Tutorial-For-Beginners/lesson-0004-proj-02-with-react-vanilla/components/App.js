import Header from './Header.js';
import Footer from './Footer.js';

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement(Header),
    React.createElement('p', null, 'Welcome to React with Vanilla JavaScript!'),
    React.createElement(Footer)
  );
};

// Render the App component to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
