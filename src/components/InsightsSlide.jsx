import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp, AlertTriangle, CheckCircle, Eye } from 'lucide-react';
import DataAttribution from './DataAttribution';

const InsightsSlide = ({ dataProcessor }) => {
  const insights = dataProcessor?.getKeyInsights() || {};

  const keyInsights = [
    {
      title: "The 50x Multiplier",
      value: `${Math.round(insights.plannedMultiplier || 50)}x`,
      description: "Planned AI capacity vs current reality represents a 50x multiplication of global computing power",
      icon: TrendingUp,
      color: "ai-orange",
      significance: "This isn't incremental growth—it's a phase transition in computational capability"
    },
    {
      title: "2026: The Inflection Point", 
      value: `${Math.round(insights.inflectionMultiplier || 5.5)}x`,
      description: "2026 alone will add 5.5x more capacity than exists today",
      icon: Target,
      color: "ai-purple",
      significance: "The steepest part of an exponential curve that will define the AI era"
    },
    {
      title: "Geographic Concentration",
      value: "3 Regions",
      description: "USA, Middle East, and Asia Pacific will control 90%+ of global AI capacity",
      icon: Eye,
      color: "ai-blue",
      significance: "New forms of digital sovereignty reshaping global power dynamics"
    },
    {
      title: "Infrastructure Lead Time",
      value: "2-3 Years",
      description: "Data centers take years to build, creating predictable capacity waves",
      icon: AlertTriangle,
      color: "ai-emerald",
      significance: "Current investments will determine 2026-2028 AI capabilities"
    }
  ];

  const strategicImplications = [
    {
      category: "For Governments",
      implications: [
        "AI infrastructure becomes critical national security asset",
        "Energy grid planning must account for massive AI data centers",
        "Educational systems need urgent AI literacy programs",
        "Regulatory frameworks required for AI infrastructure oversight"
      ],
      urgency: "Immediate Action Required",
      color: "ai-blue"
    },
    {
      category: "For Businesses",
      implications: [
        "Early AI adoption creates exponential competitive advantages",
        "Computing power access determines AI capability limits",
        "Supply chains will be AI-optimized within 3-5 years",
        "Workforce transformation accelerates dramatically"
      ],
      urgency: "Strategic Priority",
      color: "ai-orange"
    },
    {
      category: "For Society",
      implications: [
        "AI agents will handle majority of knowledge work by 2030",
        "Digital divide becomes intelligence divide",
        "Massive retraining programs needed for displaced workers",
        "New social contracts required for AI-abundant world"
      ],
      urgency: "Societal Preparation",
      color: "ai-purple"
    }
  ];

  const predictions = [
    {
      timeframe: "2025",
      prediction: "AI infrastructure reaches military strategic importance",
      confidence: "95%",
      details: "Nations recognize AI compute as critical infrastructure requiring protection"
    },
    {
      timeframe: "2026",
      prediction: "First AI systems approaching human-level reasoning",
      confidence: "80%",
      details: "Massive 2026 capacity enables breakthrough model training"
    },
    {
      timeframe: "2027-2028",
      prediction: "AI agents become primary interface for digital work",
      confidence: "75%",
      details: "Sufficient infrastructure enables AI agent deployment at scale"
    },
    {
      timeframe: "2030",
      prediction: "AGI achieved using distributed global AI infrastructure",
      confidence: "60%",
      details: "100M+ H100 equivalents provide compute for general intelligence"
    }
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
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="text-ai-amber mr-3" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Key Insights
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            What the data reveals about our AI-powered future
          </p>
        </motion.div>

        {/* Core Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {keyInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="insight-card relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${insight.color}/20 to-transparent`}></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-${insight.color}`}>
                    <insight.icon size={28} />
                  </div>
                  <div className={`number-display text-3xl text-${insight.color}`}>
                    {insight.value}
                  </div>
                </div>
                <h3 className={`text-xl font-bold text-${insight.color} mb-3`}>
                  {insight.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {insight.description}
                </p>
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-xs text-slate-400 font-semibold mb-1">Significance:</p>
                  <p className="text-xs text-slate-300">{insight.significance}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strategic Implications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">
            Strategic Implications
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategicImplications.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="insight-card"
              >
                <div className="mb-6">
                  <h4 className={`text-xl font-bold text-${category.color} mb-2`}>
                    {category.category}
                  </h4>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${category.color}/20 text-${category.color}`}>
                    {category.urgency}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {category.implications.map((implication, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.2 + idx * 0.1 }}
                      className="flex items-start text-sm"
                    >
                      <CheckCircle size={16} className={`text-${category.color} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-300">{implication}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Predictions Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="insight-card mb-16"
        >
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
            AI Infrastructure Predictions
          </h3>
          
          <div className="space-y-6">
            {predictions.map((prediction, index) => (
              <motion.div
                key={prediction.timeframe}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-start p-6 bg-slate-800/30 rounded-lg"
              >
                <div className="flex-shrink-0 w-20 text-center mr-6">
                  <div className="text-2xl font-bold text-ai-blue mb-1">
                    {prediction.timeframe}
                  </div>
                  <div className="text-xs text-slate-400">
                    {prediction.confidence}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">
                    {prediction.prediction}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {prediction.details}
                  </p>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <div 
                    className="w-16 h-2 bg-ai-blue rounded-full"
                    style={{ width: `${parseInt(prediction.confidence)}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Big Picture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="insight-card mb-12"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
            The Big Picture: Three Fundamental Shifts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-lg font-bold text-ai-blue mb-3">
                From Computing to Intelligence
              </h4>
              <p className="text-sm text-slate-300">
                We're transitioning from scarcity of computation to abundance of intelligence. 
                AI infrastructure isn't just faster computers—it's the foundation for artificial minds.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-lg font-bold text-ai-purple mb-3">
                From Digital to Physical Reality
              </h4>
              <p className="text-sm text-slate-300">
                AI infrastructure is reshaping physical reality through energy consumption, 
                geographic concentration, and resource allocation at unprecedented scales.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-ai-orange mb-3">
                From Linear to Exponential
              </h4>
              <p className="text-sm text-slate-300">
                Traditional technology adoption curves are obsolete. AI infrastructure growth 
                follows exponential patterns that compress decades of change into years.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Thought */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <div className="insight-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              We Are Here
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              This analysis captures a singular moment in human history: the construction of 
              infrastructure that will enable <span className="text-ai-purple font-semibold">artificial general intelligence</span>. 
              We're not just building faster computers—we're creating the substrate for minds that could 
              surpass human intelligence.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              The decisions made about AI infrastructure in the next three years will determine whether 
              this transformation benefits all of humanity or concentrates unprecedented power in the hands of a few. 
              <span className="text-ai-orange font-semibold"> The window for shaping this future is closing rapidly</span>.
            </p>
          </div>
        </motion.div>

        {/* Data Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="mt-16"
        >
          <DataAttribution />
        </motion.div>
      </div>
    </div>
  );
};

export default InsightsSlide;