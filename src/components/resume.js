import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import cv from './assets/AbhinabaChakrabortyResumePhD.pdf'
import thesis from './assets/Abhinaba_Chakraborty_MTECH_THESIS.pdf'
import './styles/resume.css'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import LoadingScreen from './LoadingScreen';
function Resume() {
  const [numPage, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }){
    console.log("Successfully Loaded:-> Resume");

  }
  const width=window.innerWidth;
  const height=window.innerHeight;
  return (
    <div className='container' id='resume-container'>
      <Document file={thesis} onLoadSuccess={onDocumentLoadSuccess} className='resume-page-document'>
        {Array.from({length: 86}, (x,i) =>i+1).map(page => 
            <Page pageNumber={page} 
              renderAnnotationLayer={true} 
              renderTextLayer={false} className='resume-page'
                width={0.75*width}
                renderMode='canvas'
            />
          )
        }
      </Document>
    </div>
  );
}

export default Resume;