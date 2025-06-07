import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, Calendar, Zap } from 'lucide-react';

const TimelineSlide = ({ dataProcessor }) => {
  const timelineData = dataProcessor?.getTimelineData() || [
    { year: 2020, existingCumulative: 10000, plannedCumulative: 0, totalCumulative: 10000, annualTotal: 10000 },
    { year: 2021, existingCumulative: 25000, plannedCumulative: 0, totalCumulative: 25000, annualTotal: 15000 },
    { year: 2022, existingCumulative: 75000, plannedCumulative: 0, totalCumulative: 75000, annualTotal: 50000 },
    { year: 2023, existingCumulative: 250000, plannedCumulative: 0, totalCumulative: 250000, annualTotal: 175000 },
    { year: 2024, existingCumulative: 1500000, plannedCumulative: 500000, totalCumulative: 2000000, annualTotal: 1750000 },
    { year: 2025, existingCumulative: 2000000, plannedCumulative: 3000000, totalCumulative: 5000000, annualTotal: 3000000 },
    { year: 2026, existingCumulative: 2500000, plannedCumulative: 15000000, totalCumulative: 17500000, annualTotal: 12500000 },
    { year: 2027, existingCumulative: 3000000, plannedCumulative: 35000000, totalCumulative: 38000000, annualTotal: 20500000 },
    { year: 2028, existingCumulative: 3500000, plannedCumulative: 55000000, totalCumulative: 58500000, annualTotal: 20500000 },
    { year: 2029, existingCumulative: 4000000, plannedCumulative: 70000000, totalCumulative: 74000000, annualTotal: 15500000 },
    { year: 2030, existingCumulative: 4500000, plannedCumulative: 80000000, totalCumulative: 84500000, annualTotal: 10500000 },
  ];

  // Calculate growth rates
  const growthData = timelineData.map((item, index) => {
    if (index === 0) return { ...item, growthRate: 0 };
    const prevTotal = timelineData[index - 1].totalCumulative;
    const growthRate = prevTotal > 0 ? ((item.totalCumulative - prevTotal) / prevTotal) * 100 : 0;
    return { ...item, growthRate };
  });

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  const formatPercent = (num) => `${num.toFixed(0)}%`;

  // Key milestones
  const milestones = [
    { year: 2020, event: "Pre-AI Era", description: "Traditional HPC dominates" },
    { year: 2022, event: "ChatGPT Launch", description: "AI boom begins" },
    { year: 2024, event: "Current Reality", description: "1.6M H100 equivalents" },
    { year: 2026, event: "The Inflection", description: "5.5x capacity multiplication" },
    { year: 2030, event: "AI Maturity", description: "80M+ H100 equivalents" },
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            The AI Capacity Timeline
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From thousands to millions: the exponential growth of AI computing infrastructure
          </p>
        </motion.div>

        {/* Main Timeline Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Cumulative AI Computing Capacity Over Time
          </h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="existingGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="100%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="plannedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity={0.8}/>
                    <stop offset="100%" stopColor="#F97316" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                <XAxis 
                  dataKey="year" 
                  stroke="#94a3b8" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={12}
                  tickFormatter={formatNumber}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    formatNumber(value), 
                    name === 'existingCumulative' ? 'Existing' : 
                    name === 'plannedCumulative' ? 'Planned' : 'Total'
                  ]}
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
                  dataKey="existingCumulative"
                  stackId="1"
                  stroke="#10B981"
                  strokeWidth={2}
                  fill="url(#existingGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="plannedCumulative"
                  stackId="1"
                  stroke="#F97316"
                  strokeWidth={2}
                  fill="url(#plannedGradient)"
                />
                {/* Highlight 2026 */}
                <Line 
                  type="monotone" 
                  dataKey={() => null} 
                  stroke="transparent"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-ai-emerald rounded-full mr-2"></div>
              <span className="text-sm text-slate-300">Existing Systems</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-ai-orange rounded-full mr-2"></div>
              <span className="text-sm text-slate-300">Planned Systems</span>
            </div>
          </div>
        </motion.div>

        {/* Secondary Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Annual Additions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Annual Capacity Additions
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timelineData.slice(1)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={formatNumber} />
                  <Tooltip 
                    formatter={(value) => [formatNumber(value), 'H100 Equivalents Added']}
                    contentStyle={{
                      backgroundColor: 'rgba(30, 41, 59, 0.95)',
                      border: '1px solid rgba(71, 85, 105, 0.5)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Bar 
                    dataKey="annualTotal" 
                    fill="url(#barGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Growth Rate */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Year-over-Year Growth Rate
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData.slice(1)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={formatPercent} />
                  <Tooltip 
                    formatter={(value) => [formatPercent(value), 'Growth Rate']}
                    contentStyle={{
                      backgroundColor: 'rgba(30, 41, 59, 0.95)',
                      border: '1px solid rgba(71, 85, 105, 0.5)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="growthRate" 
                    stroke="#F59E0B"
                    strokeWidth={3}
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Timeline Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="insight-card"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Key Milestones in AI Infrastructure
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-ai-blue to-ai-purple"></div>
            
            {/* Milestone items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-ai-blue mb-1">{milestone.event}</h4>
                      <p className="text-slate-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-ai-blue rounded-full border-4 border-slate-900 z-10 relative">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-mono text-ai-blue">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="insight-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              The Exponential Trajectory
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              This isn't linear growth—it's exponential acceleration. The capacity planned for 
              <span className="text-ai-orange font-semibold"> 2026 alone</span> exceeds the entire 
              cumulative AI infrastructure built up to 2024. We're witnessing the steepest part of an 
              exponential curve that will define the next era of technological capability.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineSlide;