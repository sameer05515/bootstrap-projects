import {Header} from './Header.js';
import {Footer} from './Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <p>Welcome to React with Vanilla JavaScript, using standalone babel and JSX syntax!</p>
      <Footer />
    </div>
  );
};

// Render the App component to the DOM
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export {App};
