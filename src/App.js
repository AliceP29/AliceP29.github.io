import './App.css';
import LandingPage from './AppPages/LandingPage/LandingPage'
import background from './resources/Background.jpg';
import styled from "styled-components";
import Navigation from './AppPages/Navigation/NavBar';

export const AppWrapper = styled.div`
width: 100%;
height: 100%;
`;

function App() {
  return (
    <AppWrapper>
    <div style={{ backgroundImage: `url(${background})`, height: '100%'}}>
      <div className="App">
        <Navigation />
        <LandingPage/>
      </div>
    </div>
    </AppWrapper>
  );
}

export default App;
