'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVPDFDocument } from './CVPDFDocument';

export function DownloadButton() {
  return (
    <PDFDownloadLink document={<CVPDFDocument />} fileName="cv.pdf">
      {({ loading }) => (
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          disabled={loading}
        >
          <Download className="h-4 w-4 mr-2" />
          {loading ? 'Generating PDF...' : 'Download CV as PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
