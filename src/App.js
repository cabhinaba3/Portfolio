import './App.css';
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  HashRouter as Router
} from "react-router-dom";
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Projects from './components/Projects';
import CommingSoon from './components/coming-soon';
import { pdfjs } from 'react-pdf';

// important pdf reader to work
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  // gtag related code
  // useEffect(()=>{
  //   const gtagId = (process.env.REACT_APP_ENV === "production") ? process.env.REACT_APP_GTAG : null;
  //   if(gtagId){
  //     const script = document.createElement('script');
  //     script.async = true;
  //     script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
  //     document.head.append(script);

  //     script.onload = () => {
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){
  //         window.dataLayer.push(arguments);
  //       }
  //       window.gtag = gtag;
  //       gtag('js',new Date());
  //       gtag('config', gtagId);
  //     }
  //   }else{
  //     console.warn('gtag not defined');
  //   }
  // }, []);
  const homePath = "";
  return (
    <>
      <div className='container' id='main-container'>
        <Router hashType='hashbang'>
          <Routes>
            <Route exact path={homePath} element={<Header title="Abhinaba Chakraborty" homePath={homePath} />}/>
            {/* <Route exact path={homePath} element={<Home resumeLink={homePath+"/resume"}/>}/> */}
            {/* <Route exact path={homePath+"/education"} element={<Education/>}/> */}
            {/* <Route exact path={homePath+"/experience"} element={<Experience/>}/> */}
            {/* <Route exact path={homePath+"/skills"} element={<Skills/>}/> */}
            {/* <Route exact path={homePath+"/projects"} element={<Projects/>}/> */}
            {/* <Route exact path={homePath+"/books"} element={<Books/>}/> */}
            {/* <Route exact path={homePath+"/papers"} element={<Papers/>}/> */}
            {/* <Route exact path={homePath+"/Resume"} element={<Resume/>}/> */}
            <Route exact path='*' element={<CommingSoon/>}/>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;
