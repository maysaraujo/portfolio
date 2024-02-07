import './App.css';
import { useRef } from 'react';
import About from './components/About/About';
import Apresentation from './components/Apresentation/Apresentation';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Project from './components/ProjectComponent/Project';
import Skills from './components/Skills/Skills';

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Apresentation />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
