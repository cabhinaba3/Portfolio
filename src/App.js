// import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Education from './components/Education';
import LoadingScreen from './components/LoadingScreen'
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CommingSoon from './components/coming-soon';
function App() {
  return (
    <>
      <Router>
        <LoadingScreen period={1500}/>
        <Header title="Abhinaba Chakraborty"/>
        {/* <Home/> */}
        <Routes>
          <Route exact path="/Portfolio" element={<Home/>}/>
          <Route exact path="/education" element={<Education/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
          <Route exact path='/skills' element={<Skills/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='*' element={<CommingSoon/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
