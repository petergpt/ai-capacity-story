// Data processing utilities for AI capacity analysis
// 
// Data Source: Pilz, K., Rahman, R., Sanders, J., Heim, L. (2024). 
// 'Trends in AI Supercomputers'. Epoch AI. 
// Retrieved from https://epoch.ai/data/ai-supercomputers
// Accessed: June 7, 2025
//
// This module processes and analyzes the Epoch AI dataset of 747 AI supercomputers
// to generate insights about global AI computing infrastructure trends.

export class AICapacityDataProcessor {
  constructor(csvData) {
    this.rawData = csvData;
    this.processedData = this.processData();
  }

  processData() {
    const data = this.rawData.map(row => ({
      name: row.Name || '',
      status: this.cleanStatus(row.Status),
      h100Equivalents: this.parseNumber(row['H100 equivalents']),
      powerCapacity: this.parseNumber(row['Power Capacity (MW)']),
      country: row.Country || '',
      owner: row.Owner || '',
      operationalDate: this.parseDate(row['First Operational Date']),
      operationalYear: this.extractYear(row['First Operational Date'], row.Status),
      chipType: row['Chip type (primary)'] || '',
      sector: row.Sector || '',
      hardwareCost: this.parseNumber(row['Hardware Cost']),
    })).filter(row => row.h100Equivalents > 0);

    return data;
  }

  cleanStatus(status) {
    if (!status) return 'Unknown';
    const statusLower = status.toLowerCase();
    if (statusLower.includes('existing')) return 'Existing';
    if (statusLower.includes('planned')) return 'Planned';
    if (statusLower.includes('decommissioned')) return 'Decommissioned';
    return 'Other';
  }

  parseNumber(value) {
    if (!value || value === '') return 0;
    const num = parseFloat(value.toString().replace(/,/g, ''));
    return isNaN(num) ? 0 : num;
  }

  parseDate(dateStr) {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
  }

  extractYear(dateStr, status) {
    // First try to parse the actual date
    const date = this.parseDate(dateStr);
    if (date) return date.getFullYear();

    // For planned systems, extract year from status
    if (status) {
      const statusLower = status.toLowerCase();
      const yearMatch = statusLower.match(/202[4-9]/);
      if (yearMatch) return parseInt(yearMatch[0]);
      
      if (statusLower.includes('planned')) {
        // Default planned system assumptions
        if (statusLower.includes('2025')) return 2025;
        if (statusLower.includes('2026')) return 2026;
        if (statusLower.includes('2027')) return 2027;
        if (statusLower.includes('2028')) return 2028;
        if (statusLower.includes('2030')) return 2030;
        return 2026; // Default for planned systems
      }
    }

    return null;
  }

  // Get timeline data for capacity growth
  getTimelineData() {
    const years = Array.from({length: 12}, (_, i) => 2020 + i);
    
    return years.map(year => {
      const existingCapacity = this.processedData
        .filter(d => d.status === 'Existing' && d.operationalYear <= year)
        .reduce((sum, d) => sum + d.h100Equivalents, 0);

      const plannedCapacity = this.processedData
        .filter(d => d.status === 'Planned' && d.operationalYear <= year)
        .reduce((sum, d) => sum + d.h100Equivalents, 0);

      const annualExisting = this.processedData
        .filter(d => d.status === 'Existing' && d.operationalYear === year)
        .reduce((sum, d) => sum + d.h100Equivalents, 0);

      const annualPlanned = this.processedData
        .filter(d => d.status === 'Planned' && d.operationalYear === year)
        .reduce((sum, d) => sum + d.h100Equivalents, 0);

      return {
        year,
        existingCumulative: existingCapacity,
        plannedCumulative: plannedCapacity,
        totalCumulative: existingCapacity + plannedCapacity,
        annualExisting,
        annualPlanned,
        annualTotal: annualExisting + annualPlanned,
      };
    });
  }

  // Get company analysis data
  getCompanyData() {
    const companyStats = {};
    
    this.processedData.forEach(d => {
      if (!companyStats[d.owner]) {
        companyStats[d.owner] = {
          existing: 0,
          planned: 0,
          total: 0,
          systems: 0,
        };
      }
      
      if (d.status === 'Existing') {
        companyStats[d.owner].existing += d.h100Equivalents;
      } else if (d.status === 'Planned') {
        companyStats[d.owner].planned += d.h100Equivalents;
      }
      
      companyStats[d.owner].total += d.h100Equivalents;
      companyStats[d.owner].systems += 1;
    });

    return Object.entries(companyStats)
      .map(([name, stats]) => ({ name, ...stats }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 20);
  }

  // Get geographic data
  getGeographicData() {
    const countryStats = {};
    
    this.processedData.forEach(d => {
      if (!countryStats[d.country]) {
        countryStats[d.country] = {
          existing: 0,
          planned: 0,
          total: 0,
          systems: 0,
        };
      }
      
      if (d.status === 'Existing') {
        countryStats[d.country].existing += d.h100Equivalents;
      } else if (d.status === 'Planned') {
        countryStats[d.country].planned += d.h100Equivalents;
      }
      
      countryStats[d.country].total += d.h100Equivalents;
      countryStats[d.country].systems += 1;
    });

    return Object.entries(countryStats)
      .map(([name, stats]) => ({ name, ...stats }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 15);
  }

  // Get key insights
  getKeyInsights() {
    const existing = this.processedData.filter(d => d.status === 'Existing');
    const planned = this.processedData.filter(d => d.status === 'Planned');
    
    const existingCapacity = existing.reduce((sum, d) => sum + d.h100Equivalents, 0);
    const plannedCapacity = planned.reduce((sum, d) => sum + d.h100Equivalents, 0);
    const totalCapacity = existingCapacity + plannedCapacity;

    // Find 2026 specific data
    const systems2026 = this.processedData.filter(d => d.operationalYear === 2026);
    const capacity2026 = systems2026.reduce((sum, d) => sum + d.h100Equivalents, 0);

    // Find largest systems
    const largestExisting = existing.sort((a, b) => b.h100Equivalents - a.h100Equivalents)[0];
    const largestPlanned = planned.sort((a, b) => b.h100Equivalents - a.h100Equivalents)[0];

    return {
      totalSystems: this.processedData.length,
      existingSystems: existing.length,
      plannedSystems: planned.length,
      existingCapacity,
      plannedCapacity,
      totalCapacity,
      plannedMultiplier: plannedCapacity / existingCapacity,
      capacity2026,
      systems2026: systems2026.length,
      inflectionMultiplier: capacity2026 / existingCapacity,
      largestExisting: largestExisting?.name || 'Unknown',
      largestPlanned: largestPlanned?.name || 'Unknown',
      countries: new Set(this.processedData.map(d => d.country)).size,
    };
  }

  // Get 2026 specific analysis
  get2026Analysis() {
    const systems2026 = this.processedData.filter(d => d.operationalYear === 2026);
    
    const companyBreakdown = {};
    const countryBreakdown = {};
    
    systems2026.forEach(d => {
      // Company breakdown
      if (!companyBreakdown[d.owner]) {
        companyBreakdown[d.owner] = { capacity: 0, systems: 0 };
      }
      companyBreakdown[d.owner].capacity += d.h100Equivalents;
      companyBreakdown[d.owner].systems += 1;
      
      // Country breakdown
      if (!countryBreakdown[d.country]) {
        countryBreakdown[d.country] = { capacity: 0, systems: 0 };
      }
      countryBreakdown[d.country].capacity += d.h100Equivalents;
      countryBreakdown[d.country].systems += 1;
    });

    return {
      systems: systems2026.sort((a, b) => b.h100Equivalents - a.h100Equivalents),
      totalCapacity: systems2026.reduce((sum, d) => sum + d.h100Equivalents, 0),
      companies: Object.entries(companyBreakdown)
        .map(([name, stats]) => ({ name, ...stats }))
        .sort((a, b) => b.capacity - a.capacity),
      countries: Object.entries(countryBreakdown)
        .map(([name, stats]) => ({ name, ...stats }))
        .sort((a, b) => b.capacity - a.capacity),
    };
  }
}

// Sample data for development (we'll replace this with actual CSV parsing)
export const sampleData = [
  {
    Name: "xAI Colossus Memphis Phase 2",
    Status: "Existing",
    "H100 equivalents": 200000,
    "Power Capacity (MW)": 150,
    Country: "United States of America",
    Owner: "xAI",
    "First Operational Date": "2024-03-30",
    "Chip type (primary)": "NVIDIA H100 SXM5 80GB",
    Sector: "Private"
  },
  {
    Name: "Abu Dhabi UAE/USA 5GW Campus Phase 2",
    Status: "Planned",
    "H100 equivalents": 20262759,
    "Power Capacity (MW)": 5000,
    Country: "United Arab Emirates",
    Owner: "G42",
    "First Operational Date": "",
    "Chip type (primary)": "",
    Sector: "Public/Private"
  },
  // Add more sample data as needed...
];

export default AICapacityDataProcessor;