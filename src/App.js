// import Header from './Header';
// import Footer from './Footer';
import Landing from './Landing';
import Aboutme from './Aboutme';
import './App.css';
import ParticlesComponent from './components/particles';


function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      {/* <Header /> */}
      {/* <Footer /> */}
      <Landing />
      <Aboutme />
    </div>
  );
}

export default App;
