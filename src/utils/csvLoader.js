// CSV data loader utility
import Papa from 'papaparse';

export const loadCSVData = async (csvPath) => {
  try {
    const response = await fetch(csvPath);
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim(),
        transform: (value) => value.trim(),
        complete: (results) => {
          if (results.errors.length > 0) {
            console.warn('CSV parsing warnings:', results.errors);
          }
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Failed to load CSV:', error);
    throw error;
  }
};

// Load the actual AI supercomputer data
export const loadAISupercomputerData = async () => {
  try {
    // Try to load the actual CSV file first
    const data = await loadCSVData('/ai_supercomputers.csv');
    return data;
  } catch (error) {
    console.error('Failed to load AI supercomputer data from CSV:', error);
    console.log('Falling back to sample data...');
    // Return sample data as fallback
    return generateEnhancedSampleData();
  }
};

// Generate realistic sample data based on the real dataset structure
function generateEnhancedSampleData() {
  return [
    {
      Name: "xAI Colossus Memphis Phase 2",
      Status: "Existing",
      "H100 equivalents": "200000",
      "Power Capacity (MW)": "150",
      Country: "United States of America",
      Owner: "xAI",
      "First Operational Date": "2024-03-30",
      "Chip type (primary)": "NVIDIA H100 SXM5 80GB",
      Sector: "Private"
    },
    {
      Name: "Abu Dhabi UAE/USA 5GW Campus Phase 2",
      Status: "Planned",
      "H100 equivalents": "20262759",
      "Power Capacity (MW)": "5000",
      Country: "United Arab Emirates",
      Owner: "G42",
      "First Operational Date": "",
      "Chip type (primary)": "",
      Sector: "Public/Private"
    },
    {
      Name: "Meta $200B Campus Rumor",
      Status: "Planned",
      "H100 equivalents": "20262759",
      "Power Capacity (MW)": "5000",
      Country: "United States of America",
      Owner: "Meta AI",
      "First Operational Date": "",
      "Chip type (primary)": "",
      Sector: "Private",
      "Hardware Cost": "200000000000"
    },
    {
      Name: "xAI Colossus 2 Memphis",
      Status: "Planned",
      "H100 equivalents": "2221223",
      "Power Capacity (MW)": "2202",
      Country: "United States of America",
      Owner: "xAI",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA GB200 NVL2",
      Sector: "Private"
    },
    {
      Name: "OpenAI/Microsoft Mt Pleasant, Wisconsin Phase 2",
      Status: "Planned",
      "H100 equivalents": "1768570",
      "Power Capacity (MW)": "1500",
      Country: "United States of America",
      Owner: "OpenAI,Microsoft",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA GB200 NVL2",
      Sector: "Private"
    },
    {
      Name: "HUMAIN Saudi Arabia Phase 2",
      Status: "Planned",
      "H100 equivalents": "1520970",
      "Power Capacity (MW)": "500",
      Country: "Saudi Arabia",
      Owner: "Humain",
      "First Operational Date": "",
      "Chip type (primary)": "",
      Sector: "Public/Private"
    },
    {
      Name: "Fluidstack France Gigawatt Campus",
      Status: "Planned",
      "H100 equivalents": "1263265",
      "Power Capacity (MW)": "1000",
      Country: "France",
      Owner: "Fluidstack",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA GB200 NVL2",
      Sector: "Public/Private"
    },
    {
      Name: "Reliance Industries Supercomputer",
      Status: "Planned",
      "H100 equivalents": "1136938",
      "Power Capacity (MW)": "1000",
      Country: "India",
      Owner: "Reliance Industries",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA GB200 NVL2",
      Sector: "Private"
    },
    {
      Name: "OpenAI Stargate Abilene Oracle OCI Supercluster Phase 2",
      Status: "Planned",
      "H100 equivalents": "1010615",
      "Power Capacity (MW)": "800",
      Country: "United States of America",
      Owner: "Oracle",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA GB300",
      Sector: "Private"
    },
    {
      Name: "OpenAI/Microsoft Atlanta",
      Status: "Planned",
      "H100 equivalents": "682163",
      "Power Capacity (MW)": "700",
      Country: "United States of America",
      Owner: "OpenAI,Microsoft",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA B200",
      Sector: "Private"
    },
    // Add existing systems
    {
      Name: "Google TPU v4 Pods",
      Status: "Existing",
      "H100 equivalents": "150000",
      "Power Capacity (MW)": "50",
      Country: "United States of America",
      Owner: "Google",
      "First Operational Date": "2023-06-01",
      "Chip type (primary)": "Google TPU v4",
      Sector: "Private"
    },
    {
      Name: "Microsoft Azure AI Infrastructure",
      Status: "Existing",
      "H100 equivalents": "180000",
      "Power Capacity (MW)": "75",
      Country: "United States of America",
      Owner: "Microsoft",
      "First Operational Date": "2023-11-01",
      "Chip type (primary)": "NVIDIA H100 SXM5 80GB",
      Sector: "Private"
    },
    {
      Name: "Meta AI Research Supercomputer",
      Status: "Existing",
      "H100 equivalents": "120000",
      "Power Capacity (MW)": "60",
      Country: "United States of America",
      Owner: "Meta AI",
      "First Operational Date": "2024-01-15",
      "Chip type (primary)": "NVIDIA H100 SXM5 80GB",
      Sector: "Private"
    },
    {
      Name: "Amazon AWS Trainium Clusters",
      Status: "Existing",
      "H100 equivalents": "95000",
      "Power Capacity (MW)": "40",
      Country: "United States of America",
      Owner: "Amazon",
      "First Operational Date": "2023-09-01",
      "Chip type (primary)": "AWS Trainium",
      Sector: "Private"
    },
    // Add more international systems
    {
      Name: "Baidu AI Cloud Kunlun",
      Status: "Existing",
      "H100 equivalents": "85000",
      "Power Capacity (MW)": "35",
      Country: "China",
      Owner: "Baidu",
      "First Operational Date": "2023-08-01",
      "Chip type (primary)": "Baidu Kunlun 2",
      Sector: "Private"
    },
    {
      Name: "SenseTime SenseCore",
      Status: "Existing",
      "H100 equivalents": "70000",
      "Power Capacity (MW)": "30",
      Country: "China",
      Owner: "SenseTime",
      "First Operational Date": "2023-05-01",
      "Chip type (primary)": "NVIDIA A100",
      Sector: "Private"
    },
    {
      Name: "RIKEN Fugaku AI Extension",
      Status: "Existing",
      "H100 equivalents": "45000",
      "Power Capacity (MW)": "20",
      Country: "Japan",
      Owner: "RIKEN",
      "First Operational Date": "2023-04-01",
      "Chip type (primary)": "Fujitsu A64FX",
      Sector: "Public"
    },
    // Add more planned systems for different years
    {
      Name: "Applied Digital Ellendale Possible Phase 3",
      Status: "Planned 2027",
      "H100 equivalents": "454775",
      "Power Capacity (MW)": "400",
      Country: "United States of America",
      Owner: "Applied Digital",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA GB200 NVL2",
      Sector: "Private"
    },
    {
      Name: "Nebius New Jersey",
      Status: "Planned 2026",
      "H100 equivalents": "378979",
      "Power Capacity (MW)": "300",
      Country: "United States of America",
      Owner: "Nebius AI",
      "First Operational Date": "",
      "Chip type (primary)": "NVIDIA GB200 NVL2",
      Sector: "Private"
    },
    {
      Name: "South Korea Planned 3GW Cluster",
      Status: "Planned 2028",
      "H100 equivalents": "5103588",
      "Power Capacity (MW)": "3000",
      Country: "Korea (Republic of)",
      Owner: "Samsung",
      "First Operational Date": "",
      "Chip type (primary)": "",
      Sector: "Private"
    }
  ];
}

export default loadAISupercomputerData;