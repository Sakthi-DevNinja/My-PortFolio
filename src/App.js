
// Sections
import Header from './Header';
import Landing from './Landing';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Ourservice from './Ourservice';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


// Components
import ParticlesComponent from './components/particles';
import Scrolltotop from './components/ScrollUpButton';

// Theme 
import { useTheme } from './context/ThemeContext';
import { Helmet } from 'react-helmet';


// Css
import './App.css';





function App() {

  const { theme } = useTheme();

  return (
    <div  className={`App ${theme}`}>

    <Helmet>
      <script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "nagdtczuw8");
        `}
      </script>
    </Helmet>
      
      <ParticlesComponent id="particles" />
      <Scrolltotop />

      <Header />
      <Landing />
      <Aboutme />
      <Skills />
      <Experience />
      <Education />
      <Ourservice />
      <Projects />
      <Contact />  
      <Footer />

    </div>
  );
}

export default App;
