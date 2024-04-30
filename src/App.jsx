import './App.css';
import About from './components/About/About';
import Apresentation from './components/Apresentation/Apresentation';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Project from './components/ProjectComponent/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Header />
      <Apresentation />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
