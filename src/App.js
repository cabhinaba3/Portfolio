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
import Books from './components/Books';
import Papers from './components/Papers';

function App() {
  const homePath = "/Portfolio";
  return (
    <>
      <Router>
        <LoadingScreen period={1500}/>
        <Header title="Abhinaba Chakraborty" homePath={homePath}/>
        {/* <Home/> */}
        <Routes>
          <Route exact path={homePath} element={<Home/>}/>
          <Route exact path={homePath+"/education"} element={<Education/>}/>
          <Route exact path={homePath+"/experience"} element={<Experience/>}/>
          <Route exact path={homePath+"/skills"} element={<Skills/>}/>
          <Route exact path={homePath+"/projects"} element={<Projects/>}/>
          <Route exact path={homePath+"/books"} element={<Books/>}/>
          <Route exact path={homePath+"/papers"} element={<Papers/>}/>
          <Route exact path='*' element={<CommingSoon/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
