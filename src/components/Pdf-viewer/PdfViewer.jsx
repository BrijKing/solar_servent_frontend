import React from "react";

import { Document, Page, pdfjs } from "react-pdf";

const PdfViewer = ({ pdfData }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const byteArray = new Uint8Array(
    atob(pdfData)
      .split("")
      .map((char) => char.charCodeAt(0))
  );
  return (
    <div>
      <Document file={{ data: byteArray }}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
