import Landing from './Landing';
import Aboutme from './Aboutme';

// import Header from './Header';
// import Footer from './Footer';
// import Skills from './Skills';
// import Ourservice from './Ourservice';
// import Education from './Education';
// import Experience from './Experience';
// import Projects from './Projects';



import './App.css';
import ParticlesComponent from './components/particles';



function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      {/* <Header /> */}
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
