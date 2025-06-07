import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Globe, MapPin, Flag, Zap } from 'lucide-react';

const GeographicSlide = ({ dataProcessor }) => {
  const geographicData = dataProcessor?.getGeographicData() || [
    { name: 'United States', existing: 800000, planned: 45000000, total: 45800000, systems: 180 },
    { name: 'China', existing: 200000, planned: 15000000, total: 15200000, systems: 85 },
    { name: 'United Arab Emirates', existing: 50000, planned: 12000000, total: 12050000, systems: 25 },
    { name: 'Saudi Arabia', existing: 30000, planned: 8000000, total: 8030000, systems: 18 },
    { name: 'France', existing: 40000, planned: 5000000, total: 5040000, systems: 22 },
    { name: 'India', existing: 35000, planned: 4000000, total: 4035000, systems: 28 },
    { name: 'United Kingdom', existing: 60000, planned: 3000000, total: 3060000, systems: 35 },
    { name: 'Germany', existing: 45000, planned: 2500000, total: 2545000, systems: 30 },
    { name: 'Japan', existing: 80000, planned: 2000000, total: 2080000, systems: 40 },
    { name: 'South Korea', existing: 25000, planned: 1800000, total: 1825000, systems: 15 },
  ];

  const topCountries = geographicData.slice(0, 8);

  // Regional groupings
  const regions = [
    { name: 'North America', capacity: 46000000, color: '#3B82F6', countries: ['United States', 'Canada'] },
    { name: 'Middle East', capacity: 20050000, color: '#F97316', countries: ['UAE', 'Saudi Arabia', 'Qatar'] },
    { name: 'Asia Pacific', capacity: 21200000, color: '#10B981', countries: ['China', 'India', 'Japan', 'South Korea'] },
    { name: 'Europe', capacity: 10545000, color: '#8B5CF6', countries: ['France', 'Germany', 'UK', 'Others'] },
  ];

  // AI superpowers analysis
  const superpowers = [
    { 
      country: 'United States', 
      capacity: 45800000, 
      advantage: 'Technology Leadership',
      keyPlayers: 'Meta, Microsoft, Google, OpenAI',
      color: '#3B82F6'
    },
    { 
      country: 'China', 
      capacity: 15200000, 
      advantage: 'Manufacturing Scale',
      keyPlayers: 'ByteDance, Baidu, Alibaba',
      color: '#F43F5E'
    },
    { 
      country: 'UAE', 
      capacity: 12050000, 
      advantage: 'Energy Resources',
      keyPlayers: 'G42, Stargate UAE',
      color: '#F97316'
    },
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
            <Globe className="text-ai-blue mr-3" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              The Global AI Geography
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            How nations are positioning themselves in the worldwide AI computing race
          </p>
        </motion.div>

        {/* Global Leaders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {superpowers.map((country, index) => (
            <div key={country.country} className="insight-card text-center relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10"
                style={{ backgroundColor: country.color }}
              ></div>
              <div className="relative z-10">
                <div className="text-2xl mb-3">
                  {index === 0 ? '🇺🇸' : index === 1 ? '🇨🇳' : '🇦🇪'}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: country.color }}>
                  {country.country}
                </h3>
                <div className="number-display text-2xl mb-2">
                  {formatNumber(country.capacity)}
                </div>
                <p className="text-sm text-slate-400 mb-2">{country.advantage}</p>
                <p className="text-xs text-slate-500">{country.keyPlayers}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Geographic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            AI Computing Capacity by Country
          </h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={topCountries} 
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={12}
                  tickFormatter={formatNumber}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    formatNumber(value), 
                    name === 'existing' ? 'Existing' : 'Planned'
                  ]}
                  contentStyle={{
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Bar 
                  dataKey="existing" 
                  stackId="capacity"
                  fill="#10B981"
                  name="existing"
                />
                <Bar 
                  dataKey="planned" 
                  stackId="capacity"
                  fill="#F97316"
                  name="planned"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-ai-emerald rounded-full mr-2"></div>
              <span className="text-sm text-slate-300">Existing Capacity</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-ai-orange rounded-full mr-2"></div>
              <span className="text-sm text-slate-300">Planned Capacity</span>
            </div>
          </div>
        </motion.div>

        {/* Regional Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Regional Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Regional Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regions}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="capacity"
                  >
                    {regions.map((entry, index) => (
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
            <div className="grid grid-cols-2 gap-4 mt-4">
              {regions.map((region) => (
                <div key={region.name} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: region.color }}
                  ></div>
                  <div>
                    <div className="text-sm text-slate-300">{region.name}</div>
                    <div className="text-xs text-slate-500">{formatNumber(region.capacity)}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Country Rankings */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Top 8 Countries by Total Capacity
            </h3>
            <div className="space-y-4">
              {topCountries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">{country.name}</div>
                      <div className="text-sm text-slate-400">{country.systems} systems</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-slate-200">
                      {formatNumber(country.total)}
                    </div>
                    <div className="text-xs text-slate-500">
                      {((country.planned / country.total) * 100).toFixed(0)}% planned
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Geopolitical Insights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
            The New Geopolitics of AI Infrastructure
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-ai-blue/20 to-transparent rounded-xl border border-ai-blue/30">
              <div className="text-ai-blue mb-4">🏛️</div>
              <h4 className="text-xl font-bold text-ai-blue mb-3">Tech Superpowers</h4>
              <p className="text-sm text-slate-300 mb-4">
                US leads with existing tech giants and AI startups. Advanced semiconductor access and capital markets.
              </p>
              <div className="text-xs text-ai-blue font-semibold">
                USA: 47% of global capacity
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-ai-orange/20 to-transparent rounded-xl border border-ai-orange/30">
              <div className="text-ai-orange mb-4">⚡</div>
              <h4 className="text-xl font-bold text-ai-orange mb-3">Energy Powerhouses</h4>
              <p className="text-sm text-slate-300 mb-4">
                Middle Eastern nations leveraging energy abundance for massive AI infrastructure investments.
              </p>
              <div className="text-xs text-ai-orange font-semibold">
                UAE + Saudi: 21% of global capacity
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-ai-emerald/20 to-transparent rounded-xl border border-ai-emerald/30">
              <div className="text-ai-emerald mb-4">🏭</div>
              <h4 className="text-xl font-bold text-ai-emerald mb-3">Manufacturing Giants</h4>
              <p className="text-sm text-slate-300 mb-4">
                China and other manufacturing leaders building independent AI capabilities despite supply chain constraints.
              </p>
              <div className="text-xs text-ai-emerald font-semibold">
                China: 16% of global capacity
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strategic Implications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="insight-card">
            <h4 className="text-lg font-semibold text-ai-blue mb-4">🌐 Global Implications</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <strong>AI Sovereignty:</strong> Nations building independent capabilities</li>
              <li>• <strong>Energy Geopolitics:</strong> Compute-intensive AI reshaping energy demand</li>
              <li>• <strong>Talent Migration:</strong> Engineers following infrastructure investments</li>
              <li>• <strong>Economic Shifts:</strong> AI infrastructure becoming GDP multiplier</li>
            </ul>
          </div>

          <div className="insight-card">
            <h4 className="text-lg font-semibold text-ai-purple mb-4">⚡ Resource Requirements</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <strong>Power Grid:</strong> Some AI clusters exceed city consumption</li>
              <li>• <strong>Cooling:</strong> Massive water/cooling infrastructure needed</li>
              <li>• <strong>Connectivity:</strong> Ultra-high bandwidth international links</li>
              <li>• <strong>Security:</strong> Critical infrastructure protection essential</li>
            </ul>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <div className="insight-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              The Geographic Paradox of AI
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              While AI promises to democratize intelligence, the infrastructure required is becoming increasingly 
              <span className="text-ai-blue font-semibold"> geographically concentrated</span>. Just three regions—
              North America, Middle East, and Asia Pacific—will control over 90% of global AI computing capacity. 
              This concentration creates new forms of <span className="text-ai-orange font-semibold">digital sovereignty</span> 
              and reshapes global power dynamics in ways we're only beginning to understand.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeographicSlide;