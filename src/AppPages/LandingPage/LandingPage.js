import {LandingWrapper, HeadingWrapper, HeadingBox, TextWrapper, Link, DescriptionWrapper} from './LandingPage.styles';

function LandingPage() {
    return (
    <>
    <HeadingBox>
      <HeadingWrapper>
        <h1>Hello, I'm Alice!</h1>
      </HeadingWrapper>
    </HeadingBox>
    <LandingWrapper>
    <DescriptionWrapper>
      <div>And welcome to my website! I's a work in progress, but I wanted to have a place
        to add more information on some projects I've been working on. 
        I find LinkedIn restrictive, a CV even more restrictive, and I really wanted
        to try and create an app from scratch. This app was made using React and hosted on GitHub.
      </div>
    </DescriptionWrapper>
  
    <h2>Contact me</h2>
    <p><span role="img" aria-label="star-emoji">⭐️</span>If you want to see my CV you can find it <Link target="_blank" href='./resources/AlexandraPacuraru_CV.pdf'> here</Link>.</p>
    <p><span role="img" aria-label="star-emoji">⭐️</span>If you want to talk, you can message me on <Link target="_blank" href='https://www.linkedin.com/in/alexandra-pacuraru/'> Linkedin</Link> or <Link href='mailto:pacurarualice@gmail.com'> email me. </Link></p>

    
    </LandingWrapper>
     </>);
}

  export default LandingPage;