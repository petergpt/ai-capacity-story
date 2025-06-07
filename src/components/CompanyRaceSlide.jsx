import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { Building2, Trophy, Zap, Target } from 'lucide-react';

const CompanyRaceSlide = ({ dataProcessor }) => {
  const companyData = dataProcessor?.getCompanyData() || [
    { name: 'Meta AI', existing: 150000, planned: 25000000, total: 25150000, systems: 15 },
    { name: 'Microsoft/OpenAI', existing: 300000, planned: 18000000, total: 18300000, systems: 25 },
    { name: 'xAI', existing: 200000, planned: 8000000, total: 8200000, systems: 8 },
    { name: 'Google', existing: 180000, planned: 6000000, total: 6180000, systems: 20 },
    { name: 'Amazon', existing: 120000, planned: 4000000, total: 4120000, systems: 12 },
    { name: 'Oracle', existing: 50000, planned: 3500000, total: 3550000, systems: 8 },
    { name: 'Apple', existing: 25000, planned: 2000000, total: 2025000, systems: 5 },
    { name: 'NVIDIA', existing: 30000, planned: 1500000, total: 1530000, systems: 6 },
  ];

  const topCompanies = companyData.slice(0, 8);

  // Calculate ratios and categories
  const companiesWithRatios = topCompanies.map(company => ({
    ...company,
    plannedRatio: (company.planned / company.total) * 100,
    category: company.planned > company.existing * 10 ? 'Aggressive Expansion' : 
              company.planned > company.existing * 3 ? 'Moderate Growth' : 'Conservative'
  }));

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  // Leaders in different categories
  const leaders = {
    existing: topCompanies.sort((a, b) => b.existing - a.existing)[0],
    planned: topCompanies.sort((a, b) => b.planned - a.planned)[0],
    total: topCompanies.sort((a, b) => b.total - a.total)[0],
    systems: topCompanies.sort((a, b) => b.systems - a.systems)[0],
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
            <Trophy className="text-ai-amber mr-3" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              The Corporate AI Arms Race
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            How the world's biggest companies are competing for AI computing supremacy
          </p>
        </motion.div>

        {/* Leaders Board */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="insight-card text-center">
            <div className="text-ai-emerald mb-3">
              <Building2 size={28} className="mx-auto" />
            </div>
            <div className="text-sm text-slate-400 mb-1">Existing Leader</div>
            <div className="text-lg font-bold text-ai-emerald mb-1">{leaders.existing?.name}</div>
            <div className="text-sm text-slate-300">{formatNumber(leaders.existing?.existing || 0)}</div>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-orange mb-3">
              <Target size={28} className="mx-auto" />
            </div>
            <div className="text-sm text-slate-400 mb-1">Planned Leader</div>
            <div className="text-lg font-bold text-ai-orange mb-1">{leaders.planned?.name}</div>
            <div className="text-sm text-slate-300">{formatNumber(leaders.planned?.planned || 0)}</div>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-purple mb-3">
              <Trophy size={28} className="mx-auto" />
            </div>
            <div className="text-sm text-slate-400 mb-1">Total Leader</div>
            <div className="text-lg font-bold text-ai-purple mb-1">{leaders.total?.name}</div>
            <div className="text-sm text-slate-300">{formatNumber(leaders.total?.total || 0)}</div>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-blue mb-3">
              <Zap size={28} className="mx-auto" />
            </div>
            <div className="text-sm text-slate-400 mb-1">Most Systems</div>
            <div className="text-lg font-bold text-ai-blue mb-1">{leaders.systems?.name}</div>
            <div className="text-sm text-slate-300">{leaders.systems?.systems || 0} systems</div>
          </div>
        </motion.div>

        {/* Main Company Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Existing vs Planned AI Computing Capacity
          </h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={topCompanies} 
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                layout="horizontal"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                <XAxis 
                  type="number"
                  stroke="#94a3b8" 
                  fontSize={12}
                  tickFormatter={formatNumber}
                />
                <YAxis 
                  type="category"
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={12}
                  width={100}
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
              <span className="text-sm text-slate-300">Existing Systems</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-ai-orange rounded-full mr-2"></div>
              <span className="text-sm text-slate-300">Planned Systems</span>
            </div>
          </div>
        </motion.div>

        {/* Strategy Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Planned vs Existing Ratio Scatter */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Growth Strategy Analysis
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                  <XAxis 
                    type="number" 
                    dataKey="existing"
                    stroke="#94a3b8" 
                    fontSize={12}
                    tickFormatter={formatNumber}
                    name="Existing"
                  />
                  <YAxis 
                    type="number" 
                    dataKey="planned"
                    stroke="#94a3b8" 
                    fontSize={12}
                    tickFormatter={formatNumber}
                    name="Planned"
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-900/95 border border-slate-700/50 rounded-lg p-3 text-white">
                            <p className="font-semibold">{data.name}</p>
                            <p>Existing: {formatNumber(data.existing)}</p>
                            <p>Planned: {formatNumber(data.planned)}</p>
                            <p>Strategy: {data.category}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter 
                    data={companiesWithRatios} 
                    fill={(entry) => {
                      if (entry.category === 'Aggressive Expansion') return '#F97316';
                      if (entry.category === 'Moderate Growth') return '#3B82F6';
                      return '#10B981';
                    }}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Company Strategies */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="insight-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Investment Strategies
            </h3>
            <div className="space-y-4">
              {companiesWithRatios.slice(0, 6).map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-slate-200">{company.name}</div>
                    <div className="text-sm text-slate-400">{company.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-300">{formatNumber(company.total)}</div>
                    <div className="text-xs text-slate-500">
                      {company.plannedRatio.toFixed(0)}% planned
                    </div>
                  </div>
                  <div className="ml-4 w-2 h-8 rounded-full" style={{
                    backgroundColor: company.category === 'Aggressive Expansion' ? '#F97316' :
                                   company.category === 'Moderate Growth' ? '#3B82F6' : '#10B981'
                  }}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Strategy Categories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
            Three Distinct AI Investment Strategies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-ai-orange/20 to-transparent rounded-xl border border-ai-orange/30">
              <div className="text-ai-orange mb-4">🚀</div>
              <h4 className="text-xl font-bold text-ai-orange mb-3">Aggressive Expansion</h4>
              <p className="text-sm text-slate-300 mb-4">
                10x+ planned vs existing capacity. Companies betting everything on AI dominance.
              </p>
              <div className="text-xs text-ai-orange font-semibold">
                Meta AI, xAI, Oracle
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-ai-blue/20 to-transparent rounded-xl border border-ai-blue/30">
              <div className="text-ai-blue mb-4">📈</div>
              <h4 className="text-xl font-bold text-ai-blue mb-3">Moderate Growth</h4>
              <p className="text-sm text-slate-300 mb-4">
                3-10x planned expansion. Balanced approach to AI infrastructure scaling.
              </p>
              <div className="text-xs text-ai-blue font-semibold">
                Microsoft/OpenAI, Google
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-ai-emerald/20 to-transparent rounded-xl border border-ai-emerald/30">
              <div className="text-ai-emerald mb-4">🛡️</div>
              <h4 className="text-xl font-bold text-ai-emerald mb-3">Conservative</h4>
              <p className="text-sm text-slate-300 mb-4">
                &lt;3x planned growth. Cautious, measured approach to AI investment.
              </p>
              <div className="text-xs text-ai-emerald font-semibold">
                Apple, NVIDIA
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="insight-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              The Winner-Take-All Dynamic
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              This isn't just about having more compute—it's about having <span className="text-ai-orange font-semibold">exponentially more</span>. 
              Companies like Meta are betting that AI infrastructure advantages compound dramatically. In this arms race, 
              second place might mean <span className="text-ai-blue font-semibold">technological irrelevance</span>. The 
              companies investing most aggressively today are positioning themselves to control the AI-powered future.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyRaceSlide;