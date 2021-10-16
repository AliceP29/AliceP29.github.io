import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
`;

export const HeadingBox = styled.div`
  display: flex;
  width: 100%;
  align-items: centre;
  justify-content: center;
`;

export const HeadingWrapper = styled.div`
  width: fit-content;
  h1 {
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: .15em solid #DAA1B1; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: .15em; /* Adjust as needed */
      animation: 
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
  }
  
  /* The typing effect */
  @keyframes typing {
      from { width: 0 }
      to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #DAA1B1; }
  }
`;

export const LandingWrapper = styled.div`
  height: 100%;
`;

export const Link = styled.a`
  color: #D50921;
  margin-left: 2px;
`;


export const DescriptionWrapper = styled.div`
  display: flex;
  margin: 30px;
  background-color: rgba(226, 177, 66, .7);
  padding: 14px;
  border-radius: 11px;
  text-align: center;
`;

export const ImageWrapper = styled.img`
  max-width: 150px;
  max-height: 150px;
`;
export const LineWrapper = styled.span`
  display: flex;
  align-items: center;
  p {
    margin-left: 15px;
  }
`;

