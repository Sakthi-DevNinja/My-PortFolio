import Header from './Header';
import Landing from './Landing';
import Aboutme from './Aboutme';

// import Footer from './Footer';
// import Skills from './Skills';
// import Ourservice from './Ourservice';
// import Education from './Education';
// import Experience from './Experience';
// import Projects from './Projects';



import './App.css';
import ParticlesComponent from './components/particles';
import { useTheme } from './context/ThemeContext';

import './styles/global.css'; // Import global styles




function App() {

  const { theme } = useTheme();

  return (
    <div  className={`App ${theme}`}>
       
      <ParticlesComponent id="particles" />
      <Header />
      <Landing />
      <Aboutme />

      {/* <Experience /> */}
      {/* <Experience /> */}
      {/* <Education /> */}
      {/* <Ourservice /> */}
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
