import logo from "./logo.svg";
import "./App.css";
import Header from './components/Header/Header'
import { Container } from '@mui/material';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer'
import InstaLogin from "./components/InstaLogin/Instalogin";

function App() {
  return (
    <div>
      <div style={{position:'sticky',top:0}}>
        <Header />
      </div>
      <Container>
        <About />
        <Stats />
        <Gallery />
        <Contact />
      </Container>
      <div style={{position:'sticky',bottom:0}}>
        <Footer/>
      </div>      
      {/* <InstaLogin/> */}
    </div>
  );
}

export default App;
