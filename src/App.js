// import Header from './Header';
// import Footer from './Footer';
import Landing from './Landing';
import './App.css';
import ParticlesComponent from './components/particles';


function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      {/* <Header /> */}
      <Landing />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
