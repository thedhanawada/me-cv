'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function DownloadButton() {
  const handleDownload = () => {
    const element = document.getElementById('cv-content');
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('cv.pdf');
      });
    }
  };

  return (
    <Button 
      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
      onClick={handleDownload}
    >
      <Download className="h-4 w-4 mr-2" />
      Download CV as PDF
    </Button>
  );
}
