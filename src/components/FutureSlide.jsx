import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Rocket, Eye, Brain, Infinity } from 'lucide-react';

const FutureSlide = () => {
  // Projected data extending beyond 2030
  const futureProjections = [
    { year: 2024, capacity: 2000000, cumulative: 2000000, phase: 'Current Reality' },
    { year: 2025, capacity: 3000000, cumulative: 5000000, phase: 'Early Deployment' },
    { year: 2026, capacity: 12500000, cumulative: 17500000, phase: 'The Inflection' },
    { year: 2027, capacity: 20500000, cumulative: 38000000, phase: 'Rapid Scaling' },
    { year: 2028, capacity: 20500000, cumulative: 58500000, phase: 'Mass Deployment' },
    { year: 2029, capacity: 15500000, cumulative: 74000000, phase: 'Market Maturation' },
    { year: 2030, capacity: 10500000, cumulative: 84500000, phase: 'Infrastructure Plateau' },
    { year: 2031, capacity: 15000000, cumulative: 99500000, phase: 'Next Generation' },
    { year: 2032, capacity: 25000000, cumulative: 124500000, phase: 'Quantum Transition' },
  ];

  // Technology evolution phases
  const techPhases = [
    {
      period: '2024-2025',
      title: 'Foundation Era',
      description: 'Current generation AI models, H100/H200 dominance',
      keyTech: 'Transformer Architecture, GPU Clusters',
      capacity: '2-5M H100 equiv',
      color: '#10B981'
    },
    {
      period: '2026-2028',
      title: 'Scaling Era',
      description: 'Massive model training, Blackwell deployment',
      keyTech: 'Multi-modal AI, Advanced Reasoning',
      capacity: '17-58M H100 equiv',
      color: '#F97316'
    },
    {
      period: '2029-2032',
      title: 'Intelligence Era',
      description: 'AGI approaches, new computing paradigms',
      keyTech: 'Neuromorphic, Quantum-AI Hybrid',
      capacity: '75-125M H100 equiv',
      color: '#8B5CF6'
    }
  ];

  // Breakthrough scenarios
  const scenarios = [
    {
      name: 'Conservative',
      description: 'Linear scaling, current trends continue',
      "2030capacity": 84500000,
      probability: '60%',
      color: '#10B981'
    },
    {
      name: 'Accelerated',
      description: 'Breakthrough efficiency, faster deployment',
      "2030capacity": 150000000,
      probability: '30%',
      color: '#F97316'
    },
    {
      name: 'Paradigm Shift',
      description: 'Quantum computing, novel architectures',
      "2030capacity": 300000000,
      probability: '10%',
      color: '#8B5CF6'
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Rocket className="text-ai-purple mr-3" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              The Future Landscape
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Beyond 2030: What happens when AI infrastructure reaches unimaginable scale
          </p>
        </motion.div>

        {/* Future Projections Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            AI Capacity Projections: 2024-2032
          </h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={futureProjections} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="futureGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="50%" stopColor="#F97316" stopOpacity={0.6}/>
                    <stop offset="100%" stopColor="#10B981" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={formatNumber} />
                <Tooltip 
                  formatter={(value, name) => [formatNumber(value), name === 'cumulative' ? 'Cumulative Capacity' : 'Annual Addition']}
                  labelFormatter={(year) => `Year: ${year}`}
                  contentStyle={{
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="cumulative"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  fill="url(#futureGradient)"
                />
                <Line 
                  type="monotone" 
                  dataKey="capacity" 
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Technology Evolution Phases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
            Three Eras of AI Infrastructure Evolution
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techPhases.map((phase, index) => (
              <motion.div
                key={phase.period}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="relative"
              >
                <div 
                  className="insight-card h-full border-l-4 relative overflow-hidden"
                  style={{ borderLeftColor: phase.color }}
                >
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{ backgroundColor: phase.color }}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: phase.color }}
                      ></div>
                      <span className="text-sm font-mono text-slate-400">{phase.period}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3" style={{ color: phase.color }}>
                      {phase.title}
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">{phase.description}</p>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400">Key Tech:</span>
                        <span className="text-slate-300 ml-2">{phase.keyTech}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Capacity:</span>
                        <span className="text-slate-300 ml-2">{phase.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scenario Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            2030 Scenario Analysis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold"
                    style={{ backgroundColor: scenario.color + '20', color: scenario.color }}
                  >
                    {scenario.probability}
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: scenario.color }}>
                    {scenario.name}
                  </h4>
                </div>
                <p className="text-sm text-slate-300 mb-4">{scenario.description}</p>
                <div className="number-display text-xl mb-2">
                  {formatNumber(scenario["2030capacity"])}
                </div>
                <p className="text-xs text-slate-400">2030 Capacity</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="insight-card">
            <div className="flex items-center mb-4">
              <Brain className="text-ai-blue mr-3" size={24} />
              <h4 className="text-xl font-semibold text-ai-blue">Capability Implications</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start">
                <span className="text-ai-blue mr-2">•</span>
                <div>
                  <strong>AGI Timeline:</strong> 100M+ H100 equivalents could enable artificial general intelligence by 2032
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ai-blue mr-2">•</span>
                <div>
                  <strong>Scientific Discovery:</strong> AI-driven research acceleration across climate, medicine, physics
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ai-blue mr-2">•</span>
                <div>
                  <strong>Economic Transformation:</strong> AI agents handling majority of knowledge work
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ai-blue mr-2">•</span>
                <div>
                  <strong>Personalized AI:</strong> Individual AI assistants with human-level capabilities
                </div>
              </li>
            </ul>
          </div>

          <div className="insight-card">
            <div className="flex items-center mb-4">
              <Eye className="text-ai-purple mr-3" size={24} />
              <h4 className="text-xl font-semibold text-ai-purple">Societal Implications</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start">
                <span className="text-ai-purple mr-2">•</span>
                <div>
                  <strong>Energy Reshape:</strong> AI infrastructure becomes 5-10% of global electricity consumption
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ai-purple mr-2">•</span>
                <div>
                  <strong>Geographic Power:</strong> Nations with AI infrastructure gain disproportionate influence
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ai-purple mr-2">•</span>
                <div>
                  <strong>Labor Transition:</strong> Massive retraining and social safety net requirements
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ai-purple mr-2">•</span>
                <div>
                  <strong>Digital Divide:</strong> Access to AI becomes determinant of economic opportunity
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Wild Card Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="insight-card mb-12"
        >
          <h3 className="text-xl font-bold gradient-text mb-6 text-center">
            Wild Card Technologies That Could Change Everything
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl mb-2">🧠</div>
              <h5 className="font-semibold text-ai-blue mb-2">Neuromorphic Computing</h5>
              <p className="text-xs text-slate-400">Brain-inspired chips with 1000x efficiency gains</p>
            </div>
            
            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl mb-2">⚛️</div>
              <h5 className="font-semibold text-ai-purple mb-2">Quantum-AI Hybrid</h5>
              <p className="text-xs text-slate-400">Quantum processors for specific AI workloads</p>
            </div>
            
            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl mb-2">🌡️</div>
              <h5 className="font-semibold text-ai-orange mb-2">Room Temperature SC</h5>
              <p className="text-xs text-slate-400">Superconducting chips eliminating energy losses</p>
            </div>
            
            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl mb-2">💾</div>
              <h5 className="font-semibold text-ai-emerald mb-2">DNA Computing</h5>
              <p className="text-xs text-slate-400">Biological storage and processing systems</p>
            </div>
          </div>
        </motion.div>

        {/* Final Insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <div className="insight-card max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Infinity className="text-ai-purple mr-3" size={32} />
              <h3 className="text-2xl font-bold gradient-text">
                The Computational Singularity
              </h3>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              We stand at the threshold of a computational phase transition. The AI infrastructure being built today 
              will likely enable <span className="text-ai-purple font-semibold">artificial general intelligence</span> 
              and beyond. When AI systems can improve themselves and design better AI systems, the growth curves we've 
              analyzed become <span className="text-ai-orange font-semibold">obsolete overnight</span>. 
              The question isn't whether this transformation will happen—it's whether we'll be ready for a world where 
              <span className="text-ai-blue font-semibold">intelligence itself becomes abundant</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureSlide;