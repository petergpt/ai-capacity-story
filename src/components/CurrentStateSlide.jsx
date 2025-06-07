import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Zap, Building, MapPin } from 'lucide-react';

const CurrentStateSlide = ({ dataProcessor }) => {
  const insights = dataProcessor?.getKeyInsights() || {};
  
  // Sample data for visualization
  const statusData = [
    { name: 'Existing', value: insights.existingCapacity || 1582736, color: '#10B981' },
    { name: 'Planned', value: insights.plannedCapacity || 79736086, color: '#F97316' },
  ];

  const topCountries = dataProcessor?.getGeographicData()?.slice(0, 8) || [
    { name: 'United States', total: 45000000 },
    { name: 'China', total: 15000000 },
    { name: 'United Arab Emirates', total: 12000000 },
    { name: 'Saudi Arabia', total: 8000000 },
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Current State of AI Computing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Today's reality vs tomorrow's ambitions in global AI infrastructure
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="insight-card text-center">
            <div className="text-ai-emerald mb-3">
              <Activity size={28} className="mx-auto" />
            </div>
            <div className="number-display text-2xl md:text-3xl mb-2">
              {formatNumber(insights.existingCapacity || 1582736)}
            </div>
            <p className="text-slate-400 text-sm">Existing H100 Equivalents</p>
            <div className="mt-2 text-xs text-ai-emerald">
              ✓ Operational Today
            </div>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-orange mb-3">
              <Building size={28} className="mx-auto" />
            </div>
            <div className="number-display text-2xl md:text-3xl mb-2">
              {formatNumber(insights.plannedCapacity || 79736086)}
            </div>
            <p className="text-slate-400 text-sm">Planned H100 Equivalents</p>
            <div className="mt-2 text-xs text-ai-orange">
              📋 In Development
            </div>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-purple mb-3">
              <Zap size={28} className="mx-auto" />
            </div>
            <div className="number-display text-2xl md:text-3xl mb-2">
              {Math.round(insights.plannedMultiplier || 50)}x
            </div>
            <p className="text-slate-400 text-sm">Growth Multiplier</p>
            <div className="mt-2 text-xs text-ai-purple">
              🚀 Planned vs Existing
            </div>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-blue mb-3">
              <MapPin size={28} className="mx-auto" />
            </div>
            <div className="number-display text-2xl md:text-3xl mb-2">
              {insights.countries || 34}
            </div>
            <p className="text-slate-400 text-sm">Countries</p>
            <div className="mt-2 text-xs text-ai-blue">
              🌍 Global Reach
            </div>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Existing vs Planned Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Current Reality vs Future Plans
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
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
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-ai-emerald rounded-full mr-2"></div>
                <span className="text-sm text-slate-300">Existing ({((statusData[0]?.value || 0) / ((statusData[0]?.value || 0) + (statusData[1]?.value || 1)) * 100).toFixed(1)}%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-ai-orange rounded-full mr-2"></div>
                <span className="text-sm text-slate-300">Planned ({((statusData[1]?.value || 0) / ((statusData[0]?.value || 0) + (statusData[1]?.value || 1)) * 100).toFixed(1)}%)</span>
              </div>
            </div>
          </motion.div>

          {/* Top Countries Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Leading Countries by Total Capacity
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topCountries} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={12}
                    tickFormatter={formatNumber}
                  />
                  <Tooltip 
                    formatter={(value) => [formatNumber(value), 'H100 Equivalents']}
                    contentStyle={{
                      backgroundColor: 'rgba(30, 41, 59, 0.95)',
                      border: '1px solid rgba(71, 85, 105, 0.5)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Bar 
                    dataKey="total" 
                    fill="url(#colorGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="insight-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              The Infrastructure Reality Gap
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Today's AI computing reality is just <span className="text-ai-emerald font-semibold">1.6 million H100 equivalents</span>. 
              But the planned infrastructure represents a <span className="text-ai-orange font-semibold">50x multiplication</span> of 
              this capacity. We're not seeing incremental growth—we're witnessing the early stages of a 
              computational revolution that will reshape global technology infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CurrentStateSlide;