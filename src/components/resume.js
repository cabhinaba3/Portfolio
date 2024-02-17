import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import cv from './assets/AbhinabaChakrabortyResumePhD.pdf'
import './styles/resume.css'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import LoadingScreen from './LoadingScreen';
function Resume() {
  function onDocumentLoadSuccess({ numPages }){
    console.log("Successfully Loaded:-> Resume")
  }
  const width=window.innerWidth;
  const height=window.innerHeight;
  return (
    <div className='container' id='resume-container'>
      <Document file={cv} onLoadSuccess={onDocumentLoadSuccess} className='resume-page-document'>
        <Page pageNumber={1} renderAnnotationLayer={true} renderTextLayer={false} className='resume-page'
        width={0.75*width}
        renderMode='canvas'
        />
      </Document>
    </div>
  );
}

export default Resume;