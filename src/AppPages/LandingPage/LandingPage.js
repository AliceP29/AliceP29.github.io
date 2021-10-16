import {LandingWrapper, HeadingWrapper, HeadingBox, LineWrapper,
        ImageWrapper, Link, DescriptionWrapper} from './LandingPage.styles';
import  futuremelogo from '../../resources/Future-Me-logo.png';
import  uomlogo from '../../resources/UOMlogo.png';
import ftclogo from '../../resources/FTClogo.png';
import firstlogo from '../../resources/FirstGlobalLogo.png';

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
        to add more information on some projects I've been working on. My name is Alexandra 
        (but all of my friends call me Alice), I'm a final-year student at The University of Manchester,
        studying Computer Science with Business and Management. I worked as a Software Engineer Intern for a year,
        and I'm currently spending my time doing my university work, working on <Link target="_blank" href='https://www.forfutureme.com/'> Future Me</Link> and exploring Manchester!
        This blog was made using React and hosted on GitHub.
      </div>
    </DescriptionWrapper>
  
    <h2>contact me</h2>
    <LineWrapper>
    <span role="img" aria-label="star-emoji">⭐️</span>
    <p> if you want to see my CV you can find it <Link target="_blank" href='./resources/AlexandraPacuraru_CV.pdf'> here</Link>.</p>
    </LineWrapper>
    <LineWrapper>
      <span role="img" aria-label="star-emoji">⭐️</span>
      <p> if you want to talk, you can message me on <Link target="_blank" href='https://www.linkedin.com/in/alexandra-pacuraru/'> Linkedin</Link> or <Link href='mailto:pacurarualice@gmail.com'> email me. </Link></p>
      </LineWrapper>

    <h2>my (current) projects</h2>
    {/* ------- Future Me -------- */}
    <LineWrapper>
    <ImageWrapper src={futuremelogo} alt={'Future Me logo'}/> 
    <p>I've been a co-founder since September 2020. I started this project with my friend Paul 
      because we wanted to help the STEM industry fight the lack of diversity and because we 
      wanted to help a younger generation.  <Link target="_blank" href='https://www.forfutureme.com/'> Future Me </Link>is a place where students can invest in their future opportunities, careers and selves!
    </p>
    </LineWrapper>
    <LineWrapper>
    <span role="img" aria-label="sun-emoji">☀️</span>
    <p> Future Me grew during the <Link target="_blank" href='https://edventure.vc/'>  edventure </Link> student accelerator (2020), and we also won the 1st Prize based on our progress during the 10 weeks, as well as "The best team" prize!</p>
    </LineWrapper>
    <LineWrapper>
    <span role="img" aria-label="sun-emoji">☀️</span>
    <p>We help younger students by offering them a list of mentors with different backgrounds that they can contact to talk about their degree, experience and tips and tricks, as well as offering them a range
      of workshops about various topics helpful for them and undergraduate shadowings, where students can take part in a virtual university day-experience, to find out more about what you study during university!
    </p>
    </LineWrapper>
    <LineWrapper>
    <span role="img" aria-label="sun-emoji">☀️</span>
    <p>So far, Future Me has helped more than 50 secondary school students!</p>
    </LineWrapper>
    <LineWrapper>
    <span role="img" aria-label="sun-emoji">☀️</span>
    <p>Besides overseeing our product, business model and looking for and maintaining partnerships, I also get invlved in creating content for our social media channels, so make sure to check out our 
      <Link target="_blank" href='https://www.instagram.com/for.futureme/'> Instagram</Link>, <Link target="_blank" href='https://www.tiktok.com/@for_futureme?'> TikTok</Link>, <Link target="_blank" href='https://twitter.com/for_futureme'> Twitter</Link>
      and <Link target="_blank" href='https://www.forfutureme.com/join'> Linkedin</Link>.</p>
    </LineWrapper>
    <LineWrapper>
    <span role="img" aria-label="sun-emoji">☀️</span>
    <p>Future Me is always expanding, so if you're interested in joining as a mentor or mentee, click <Link target="_blank" href='https://www.forfutureme.com/join'> here</Link>.</p>
    </LineWrapper>

    {/* ------- Uni -------- */}
    <LineWrapper>
    <ImageWrapper src={uomlogo} alt={'University of Manchester Logo'}/> 
    <p>I'm a final year student at The University of Manchester, and besides (hopefully) acing my coursework and my 3rd year project, I also get involved in PASS. </p>
    </LineWrapper>
    <LineWrapper>
    <span role="img" aria-label="sun-emoji">☀️</span>
    <p>My 3rd year project is called <Link target="_blank" href={"http://www.cs.man.ac.uk/~hulld/coding-their-future.html"}>"Coding their Future"</Link>. I will be 
    a TA to a Computer Science teacher in a school from Greater Manchester, and I will have to develop of a computer-based system together with supporting activities, lessons and resources for the students. </p>
    </LineWrapper>
    <LineWrapper>
    <span role="img" aria-label="sun-emoji">☀️</span>
    <p>I am also a PASS leader for 2nd year students. As PASS leaders, we mentor and create an empowering and inclusive environment for students to find out more about jobs, university 
      and to support them during their studies. This year our PASS group includes 6 PASS leaders (including me) and more than 230 2nd year students. We run weekly sessions for them and offer support throughout
      the week. You can find more on our <Link target='_blank' href='http://studentnet.cs.manchester.ac.uk/ugt/pass2/' >website</Link>.</p></LineWrapper>

    <h2>my (past) projects</h2>
    {/* ------- FTC -------- */}
    <LineWrapper>
    <ImageWrapper src={ftclogo} alt={'First Tech Challenge Logo'}/> 
    <p>First Tech Challenge was the first time I actually interacted with practical computer science. I joined the robotics competition in 2016, when I joined my high school's team and I absolutely loved it! 
    We built a robot from the competition's kit and programmed it to perform both autonomous and non-autonomous tasks. We took part in a National Competition organised by McCann Romania in 2017.
    I was part of the Programming sub-department, and also Marketing&PR. The main aim of this competition wasn't the robot itself, but the journey of our team and the impact we had on the community. We were enouraged to organise 
    events and communicate with the other teams.</p></LineWrapper>
    {/* ------- First -------- */}
    <LineWrapper>
    <ImageWrapper src={firstlogo} alt={'First Global Logo'}/> 
    <p></p></LineWrapper>


    </LandingWrapper>
     </>);
}

  export default LandingPage;