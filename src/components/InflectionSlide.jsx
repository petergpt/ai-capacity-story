import React from 'react';
import { motion } from 'framer-motion';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Zap, TrendingUp, AlertTriangle, Target } from 'lucide-react';
import DataAttribution from './DataAttribution';

const InflectionSlide = ({ dataProcessor }) => {
  const insights = dataProcessor?.getKeyInsights() || {};
  const analysis2026 = dataProcessor?.get2026Analysis() || {};

  // Sample data for 2026 analysis
  const inflectionData = [
    { year: 2023, existing: 250000, planned: 0, total: 250000, growth: 233 },
    { year: 2024, existing: 1500000, planned: 500000, total: 2000000, growth: 700 },
    { year: 2025, existing: 2000000, planned: 3000000, total: 5000000, growth: 150 },
    { year: 2026, existing: 2500000, planned: 15000000, total: 17500000, growth: 250 },
    { year: 2027, existing: 3000000, planned: 35000000, total: 38000000, growth: 117 },
  ];

  const companies2026 = analysis2026.companies?.slice(0, 6) || [
    { name: 'Microsoft/OpenAI', capacity: 3500000, systems: 12 },
    { name: 'xAI', capacity: 2200000, systems: 8 },
    { name: 'Meta AI', capacity: 1800000, systems: 6 },
    { name: 'Google', capacity: 1200000, systems: 4 },
    { name: 'Amazon', capacity: 800000, systems: 3 },
    { name: 'Others', capacity: 500000, systems: 15 },
  ];

  const beforeAfter2026 = [
    { period: 'Pre-2026 Total', value: 5000000, color: '#10B981' },
    { period: '2026 Addition', value: 12500000, color: '#F97316' },
    { period: 'Post-2026 Total', value: 17500000, color: '#8B5CF6' },
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  const formatPercent = (num) => `${num}%`;

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
            <AlertTriangle className="text-ai-orange mr-3" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              2026: The Inflection Point
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The year that changes everything in AI computing infrastructure
          </p>
        </motion.div>

        {/* Key 2026 Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="insight-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ai-orange/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-ai-orange mb-3">
                <Zap size={32} className="mx-auto animate-pulse-glow" />
              </div>
              <div className="number-display text-3xl mb-2">
                {formatNumber(insights.capacity2026 || 8638797)}
              </div>
              <p className="text-slate-400 text-sm">2026 Capacity Addition</p>
              <div className="mt-2 text-xs text-ai-orange font-semibold">
                🚀 H100 Equivalents
              </div>
            </div>
          </div>

          <div className="insight-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-ai-purple mb-3">
                <TrendingUp size={32} className="mx-auto" />
              </div>
              <div className="number-display text-3xl mb-2">
                {Math.round(insights.inflectionMultiplier || 5.5)}x
              </div>
              <p className="text-slate-400 text-sm">Capacity Multiplication</p>
              <div className="mt-2 text-xs text-ai-purple font-semibold">
                📈 vs Current Reality
              </div>
            </div>
          </div>

          <div className="insight-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-ai-blue mb-3">
                <Target size={32} className="mx-auto" />
              </div>
              <div className="number-display text-3xl mb-2">
                {insights.systems2026 || 74}
              </div>
              <p className="text-slate-400 text-sm">Systems Going Live</p>
              <div className="mt-2 text-xs text-ai-blue font-semibold">
                🏗️ Major Deployments
              </div>
            </div>
          </div>

          <div className="insight-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ai-emerald/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-ai-emerald mb-3">
                <TrendingUp size={32} className="mx-auto" />
              </div>
              <div className="number-display text-3xl mb-2">
                292%
              </div>
              <p className="text-slate-400 text-sm">YoY Growth Rate</p>
              <div className="mt-2 text-xs text-ai-emerald font-semibold">
                📊 Unprecedented Scale
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Inflection Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            The 2026 Capacity Explosion
          </h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={inflectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity={0.8}/>
                    <stop offset="100%" stopColor="#F97316" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                <YAxis 
                  yAxisId="capacity"
                  orientation="left"
                  stroke="#94a3b8" 
                  fontSize={12}
                  tickFormatter={formatNumber}
                />
                <YAxis 
                  yAxisId="growth"
                  orientation="right"
                  stroke="#F59E0B" 
                  fontSize={12}
                  tickFormatter={formatPercent}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'growth' ? formatPercent(value) : formatNumber(value),
                    name === 'total' ? 'Total Capacity' : 
                    name === 'existing' ? 'Existing' : 
                    name === 'planned' ? 'Planned' : 'Growth Rate'
                  ]}
                  contentStyle={{
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Bar 
                  yAxisId="capacity"
                  dataKey="existing" 
                  stackId="capacity"
                  fill="#10B981"
                  name="existing"
                />
                <Bar 
                  yAxisId="capacity"
                  dataKey="planned" 
                  stackId="capacity"
                  fill="#F97316"
                  name="planned"
                />
                <Line 
                  yAxisId="growth"
                  type="monotone" 
                  dataKey="growth" 
                  stroke="#F59E0B"
                  strokeWidth={3}
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 5 }}
                  name="growth"
                />
                {/* Highlight 2026 */}
                <Bar 
                  yAxisId="capacity"
                  dataKey={(data) => data.year === 2026 ? data.total : 0}
                  fill="rgba(248, 113, 113, 0.3)"
                  stroke="#F87171"
                  strokeWidth={2}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* 2026 Analysis Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Companies Leading 2026 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Companies Driving the 2026 Surge
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={companies2026}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="capacity"
                  >
                    {companies2026.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={[
                          '#3B82F6', '#8B5CF6', '#F97316', 
                          '#10B981', '#F59E0B', '#6B7280'
                        ][index % 6]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [formatNumber(value), 'H100 Equivalents']}
                    contentStyle={{
                      backgroundColor: 'rgba(30, 41, 59, 0.95)',
                      border: '1px solid rgba(71, 85, 105, 0.5)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Before vs After Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Before vs After 2026
            </h3>
            <div className="space-y-6">
              {beforeAfter2026.map((item, index) => (
                <div key={item.period} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">{item.period}</span>
                    <span className="text-white font-semibold">{formatNumber(item.value)}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / Math.max(...beforeAfter2026.map(d => d.value))) * 100}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      className="h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Key insight box */}
            <div className="mt-6 p-4 bg-ai-orange/10 border border-ai-orange/30 rounded-lg">
              <p className="text-sm text-slate-300">
                <strong className="text-ai-orange">2026 alone</strong> will add more AI capacity 
                than the entire infrastructure built up to 2025.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why 2026 Matters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="insight-card"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
            Why 2026 Is The Inflection Point
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-ai-blue mb-2">🏗️</div>
              <h4 className="font-semibold mb-2 text-ai-blue">Infrastructure Lead Time</h4>
              <p className="text-sm text-slate-300">
                Data centers planned in 2023-2024 finally coming online
              </p>
            </div>

            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-ai-purple mb-2">💾</div>
              <h4 className="font-semibold mb-2 text-ai-purple">GPU Manufacturing</h4>
              <p className="text-sm text-slate-300">
                Next-gen Blackwell GPUs entering mass production
              </p>
            </div>

            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-ai-orange mb-2">💰</div>
              <h4 className="font-semibold mb-2 text-ai-orange">Investment Cycle</h4>
              <p className="text-sm text-slate-300">
                $100B+ AI investments from 2023-2024 materializing
              </p>
            </div>

            <div className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-ai-emerald mb-2">🏁</div>
              <h4 className="font-semibold mb-2 text-ai-emerald">Competition Pressure</h4>
              <p className="text-sm text-slate-300">
                Every major AI company racing to deploy before others
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="insight-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              The Point of No Return
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              2026 represents more than just aggressive growth—it's a <span className="text-ai-orange font-semibold">phase transition</span> in 
              computing capability. After this inflection point, AI infrastructure will fundamentally reshape how we think about 
              computation, energy, and technological possibility. The systems coming online in 2026 will have more computing power 
              than <span className="text-ai-blue font-semibold">all of human civilization</span> had access to just five years ago.
            </p>
            <DataAttribution variant="compact" className="text-center mt-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InflectionSlide;