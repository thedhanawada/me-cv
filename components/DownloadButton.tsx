'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadButton() {
  const handleDownloadCV = () => {
    const pdfUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
      onClick={handleDownloadCV}
    >
      <Download className="h-4 w-4 mr-2" />
      Download CV as PDF
    </Button>
  );
}
