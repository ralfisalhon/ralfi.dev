import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../assets/pdf/RRS_Resume_Feb_2022.pdf';
import './AnnotationLayer.css';
import './styles.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = '0';
    style.left = '0';
    style.transform = '';
  });
}

class ResumePage extends Component {
  render() {
    // const resumeHeight = window.innerHeight * 1.25;
    const resumeHeight = this.props.height;
    return (
      <div className="resume-page">
        <div style={{ height: resumeHeight, overflow: 'hidden' }}>
          <Document file={resume}>
            <Page height={resumeHeight} pageNumber={1} onLoadSuccess={removeTextLayerOffset} renderAnnotationLayer />
          </Document>
        </div>
        <p style={{marginTop: '15px', fontSize: '1rem'}}>Last Updated: February 2022</p>
      </div>
    );
  }
}

export default ResumePage;
