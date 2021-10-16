import styled from "styled-components";
import Button from '@mui/material/Button';
import LandingPage from '../LandingPage/LandingPage';


const NavBar = styled.div`
width: 100%;
display: flex;
`;
const ButtonWrapper = styled.div`
button {
  color: #16191E;
}
`;

// const routeChange = (newPath) =>{ 
//   history.push(newPath);
// }

// WIP

function Navigation() {
  //let width = window.innerWidth;
  // if(width > 768){
  //   return (
  //     <NavBar>
  //       <ButtonWrapper><Button onClick={()=> { return LandingPage } }>Home</Button></ButtonWrapper>
  //       <ButtonWrapper><Button onClick={()=> { return About } }>ABOUT</Button></ButtonWrapper>
  //       <ButtonWrapper><Button>PROJECTS</Button></ButtonWrapper>
  //     </NavBar>);
  // }
  // return (
  //   <>
  //   <Button>nooo</Button>
  //     </>);
  return (
    <NavBar>
      <ButtonWrapper><Button onClick={()=> { return LandingPage } }>Home</Button></ButtonWrapper>
    </NavBar>);
}

  export default Navigation;