import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Users } from 'lucide-react';

const DataAttribution = ({ className = "", variant = "full" }) => {
  if (variant === "compact") {
    return (
      <div className={`text-xs text-slate-500 ${className}`}>
        Data source: <a href="https://epoch.ai/data/ai-supercomputers" className="text-ai-blue hover:text-ai-blue/80 underline" target="_blank" rel="noopener noreferrer">Epoch AI</a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`insight-card ${className}`}
    >
      <div className="flex items-start space-x-4">
        <div className="text-ai-blue">
          <Database size={24} />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-ai-blue mb-3">Data Sources & Attribution</h4>
          
          <div className="space-y-4 text-sm text-slate-300">
            <div className="p-4 bg-slate-800/30 rounded-lg border-l-4 border-ai-blue">
              <h5 className="font-semibold text-slate-200 mb-2">Primary Dataset</h5>
              <p className="mb-2">
                <strong>Pilz, K., Rahman, R., Sanders, J., Heim, L.</strong> (2024). 
                <em> Trends in AI Supercomputers</em>. Epoch AI.
              </p>
              <div className="flex items-center space-x-2 text-ai-blue">
                <ExternalLink size={16} />
                <a 
                  href="https://epoch.ai/data/ai-supercomputers" 
                  className="hover:text-ai-blue/80 underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  epoch.ai/data/ai-supercomputers
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Accessed: June 7, 2025 • Dataset: 747 AI supercomputers worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-slate-200 mb-2 flex items-center">
                  <Users size={16} className="mr-2 text-ai-purple" />
                  Research Team
                </h5>
                <ul className="text-xs space-y-1 text-slate-400">
                  <li>• <strong>Konstantin Pilz</strong> - Lead Researcher</li>
                  <li>• <strong>Robi Rahman</strong> - Data Analysis</li>
                  <li>• <strong>James Sanders</strong> - Infrastructure Analysis</li>
                  <li>• <strong>Lennart Heim</strong> - AI Systems Research</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-slate-200 mb-2 flex items-center">
                  <Database size={16} className="mr-2 text-ai-emerald" />
                  Data Coverage
                </h5>
                <ul className="text-xs space-y-1 text-slate-400">
                  <li>• 747 AI supercomputers globally</li>
                  <li>• 34 countries represented</li>
                  <li>• 581 existing, 161+ planned systems</li>
                  <li>• Performance, power, cost metrics</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-slate-800/20 rounded-lg">
              <h5 className="font-semibold text-slate-200 mb-2">Additional Sources</h5>
              <ul className="text-xs space-y-1 text-slate-400">
                <li>• Company earnings reports and press releases</li>
                <li>• Government infrastructure announcements</li>
                <li>• Industry analysis from SemiAnalysis, MLPerf, Top500</li>
                <li>• Academic publications on AI infrastructure</li>
              </ul>
            </div>

            <div className="text-xs text-slate-500 border-t border-slate-700 pt-3">
              <p>
                <strong>Methodology:</strong> This analysis processes and visualizes data from Epoch AI's comprehensive 
                database of AI supercomputers. All capacity calculations, growth projections, and insights are derived 
                from the source dataset with additional context from public industry reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataAttribution;