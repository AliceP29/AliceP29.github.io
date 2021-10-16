import './App.css';
import LandingPage from './AppPages/LandingPage/LandingPage'
import background from './Background.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
        <LandingPage/>
      </div>
    </div>
  );
}

export default App;
