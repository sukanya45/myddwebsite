
import './App.css';
import AboutPage from './component/AboutPage';
import HomePage from './component/HomePage';
import NavBar from './component/NavBar';
import SocialLinks from './component/SocialLinks';
import Porfolio from './component/Porfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';
function App() {
  return (
     <div>
     <NavBar/>
     <HomePage/>
     <AboutPage/>
     <Porfolio/>
     <Experience/>
     <Contact/>

     <SocialLinks/>
    </div>
  );
}

export default App;
