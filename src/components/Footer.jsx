import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = ({ className = "" }) => {
  return (
    <div className={`fixed bottom-4 right-4 z-30 ${className}`}>
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <span>Data:</span>
          <a 
            href="https://epoch.ai/data/ai-supercomputers" 
            className="text-ai-blue hover:text-ai-blue/80 underline flex items-center space-x-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Epoch AI</span>
            <ExternalLink size={12} />
          </a>
          <span>•</span>
          <span>Pilz et al. (2024)</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;