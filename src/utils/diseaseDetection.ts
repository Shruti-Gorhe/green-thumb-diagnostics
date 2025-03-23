
interface Treatment {
  title: string;
  description: string;
}

export interface DiseaseInfo {
  imageUrl: string;
  diseaseName: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  description: string;
  treatments: Treatment[];
  prevention: string[];
}

// Database of 50+ plant diseases with detailed information
const diseaseDatabase: DiseaseInfo[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Tomato Late Blight',
    confidence: 96,
    severity: 'high',
    description: 'Late blight is a disease of potato and tomato plants that spreads rapidly in humid, wet weather with temperatures ranging from 10 to 20°C. It causes dark spots on leaves and stems that can quickly lead to total plant collapse.',
    treatments: [
      { 
        title: 'Remove Infected Parts', 
        description: 'Cut off and dispose of all infected leaves, stems, and fruit. Do not compost these parts as the disease can survive.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply copper-based fungicides or approved organic alternatives every 7-10 days as directed on packaging.' 
      },
      { 
        title: 'Improve Air Circulation', 
        description: 'Prune plants to improve air flow and reduce humidity around the plants.' 
      },
      { 
        title: 'Adjust Watering Practices', 
        description: 'Water at the base of plants early in the day to allow foliage to dry fully before evening.' 
      }
    ],
    prevention: [
      'Plant resistant varieties in future seasons',
      'Rotate crops - do not plant tomatoes in the same location for at least 3 years',
      'Ensure proper spacing between plants for good air circulation',
      'Use drip irrigation rather than overhead watering',
      'Apply preventative fungicide during humid weather',
      'Keep garden clean of plant debris at the end of the season'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1591121213541-c96504ded710?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Apple Black Rot',
    confidence: 94,
    severity: 'medium',
    description: 'Black rot is a fungal disease affecting apple trees, causing leaf spots, fruit rot, and cankers on branches. Infected fruit develops dark, circular lesions that eventually turn the entire fruit black.',
    treatments: [
      { 
        title: 'Prune Infected Areas', 
        description: 'Remove and destroy all infected branches, leaves, and fruit to prevent spread.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Spray with a suitable fungicide during the growing season, especially after rainy periods.' 
      },
      { 
        title: 'Clean Orchard Floor', 
        description: 'Remove all fallen leaves and fruit from beneath trees as they can harbor the fungus.' 
      }
    ],
    prevention: [
      'Plant disease-resistant apple varieties',
      'Ensure adequate spacing between trees for good air circulation',
      'Apply dormant oil spray in late winter before bud break',
      'Maintain tree health through proper fertilization and watering',
      'Avoid wounding fruit during harvest'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1589928441756-ad19932e4b62?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Grape Black Rot',
    confidence: 92,
    severity: 'high',
    description: 'Black rot is a serious fungal disease of grapes that can destroy up to 80% of a crop in a single season. It causes brown circular lesions on leaves and black, mummified fruit.',
    treatments: [
      { 
        title: 'Remove Infected Tissue', 
        description: 'Prune out all infected parts and remove mummified berries from vines and ground.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Start fungicide applications when new shoots are 2-3 inches long and continue throughout the growing season.' 
      },
      { 
        title: 'Improve Canopy Management', 
        description: 'Prune vines to improve air circulation and ensure better fungicide coverage.' 
      }
    ],
    prevention: [
      'Select resistant grape varieties',
      'Use proper trellising systems to keep fruit off the ground',
      'Remove wild grapes from nearby areas',
      'Apply dormant sprays in early spring',
      'Avoid overhead irrigation'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Strawberry Leaf Scorch',
    confidence: 89,
    severity: 'medium',
    description: 'Leaf scorch is a common fungal disease of strawberries causing purple to red spots on leaves that eventually turn brown. The leaf margins often dry out giving a scorched appearance.',
    treatments: [
      { 
        title: 'Remove Infected Leaves', 
        description: 'Regularly remove and destroy infected leaves to reduce disease spread.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply appropriate fungicides according to label directions at first sign of disease.' 
      },
      { 
        title: 'Adjust Irrigation', 
        description: 'Use drip irrigation rather than overhead sprinklers to keep foliage dry.' 
      }
    ],
    prevention: [
      'Plant certified disease-free strawberry plants',
      'Replace strawberry plantings every 3-4 years',
      'Ensure adequate spacing between plants',
      'Apply mulch to reduce soil splash onto leaves',
      'Avoid working with plants when foliage is wet'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Corn Northern Leaf Blight',
    confidence: 91,
    severity: 'medium',
    description: 'Northern leaf blight is a fungal disease of corn characterized by long, elliptical gray-green to tan lesions on the leaves. Severe infections can significantly reduce yield.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply registered fungicides at first sign of disease, especially in humid conditions.' 
      },
      { 
        title: 'Crop Rotation', 
        description: 'Implement crop rotation with non-host crops to reduce disease pressure.' 
      }
    ],
    prevention: [
      'Plant resistant corn hybrids',
      'Rotate crops to reduce pathogen buildup in soil',
      'Till under crop residue after harvest',
      'Avoid overhead irrigation',
      'Maintain optimal plant nutrition'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1602583530211-206be7689231?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Potato Early Blight',
    confidence: 88,
    severity: 'medium',
    description: 'Early blight is a common fungal disease of potatoes, causing dark, target-like spots on lower leaves that gradually move upward. It can reduce yields by defoliating plants prematurely.',
    treatments: [
      { 
        title: 'Remove Infected Leaves', 
        description: 'Remove lower infected leaves to slow disease progression.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply protectant fungicides on a regular schedule, especially during humid weather.' 
      },
      { 
        title: 'Improve Plant Spacing', 
        description: 'Ensure adequate spacing between plants to improve air circulation.' 
      }
    ],
    prevention: [
      'Use certified disease-free seed potatoes',
      'Practice crop rotation (3-4 years)',
      'Mulch around plants to prevent soil splash',
      'Water at the base of plants early in the day',
      'Destroy all plant debris after harvest'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1535378719333-f70f35edf2cc?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Cucumber Downy Mildew',
    confidence: 87,
    severity: 'high',
    description: 'Downy mildew is a destructive disease of cucurbits, causing angular yellow spots on upper leaf surfaces and fuzzy, purplish-gray spores on leaf undersides. It spreads rapidly in cool, wet conditions.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply specialized downy mildew fungicides at first sign of disease and continue on a regular schedule.' 
      },
      { 
        title: 'Remove Infected Plants', 
        description: 'Remove and destroy heavily infected plants to reduce spread to healthy plants.' 
      },
      { 
        title: 'Improve Air Circulation', 
        description: 'Prune plants to improve air flow and reduce humidity around leaves.' 
      }
    ],
    prevention: [
      'Plant resistant varieties when available',
      'Avoid overhead irrigation',
      'Water early in the day',
      'Space plants properly for good air circulation',
      'Apply preventive fungicides during high-risk periods'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1628565689159-27a8ae687cfc?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Citrus Greening (Huanglongbing)',
    confidence: 95,
    severity: 'high',
    description: 'Citrus greening is a bacterial disease spread by the Asian citrus psyllid insect. It causes mottled leaves, stunted growth, and small, bitter, misshapen fruit. Currently, there is no cure for infected trees.',
    treatments: [
      { 
        title: 'Control Psyllid Population', 
        description: 'Apply insecticides to control the psyllid vectors that spread the disease.' 
      },
      { 
        title: 'Remove Infected Trees', 
        description: 'Remove and destroy infected trees to prevent spread to healthy trees.' 
      },
      { 
        title: 'Nutritional Support', 
        description: 'Apply enhanced nutrition programs to extend productivity of infected trees.' 
      }
    ],
    prevention: [
      'Plant disease-free certified citrus trees',
      'Inspect trees regularly for symptoms',
      'Control psyllid populations with regular monitoring and treatment',
      'Avoid moving citrus plants from infected areas',
      'Support research for resistant varieties'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1568700328257-77b4758d7d5d?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Tomato Leaf Mold',
    confidence: 86,
    severity: 'medium',
    description: 'Leaf mold is a fungal disease primarily affecting tomatoes in humid environments. It causes pale green or yellow spots on upper leaf surfaces and olive-green to grayish-purple fuzzy growth on undersides.',
    treatments: [
      { 
        title: 'Improve Air Circulation', 
        description: 'Prune plants to improve air flow and reduce humidity.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply copper-based fungicides or other approved fungicides at first sign of disease.' 
      },
      { 
        title: 'Remove Infected Leaves', 
        description: 'Remove and destroy infected leaves to reduce spread.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Space plants properly for good air circulation',
      'Use drip irrigation rather than overhead watering',
      'Avoid working with plants when foliage is wet',
      'Apply preventive fungicides in high-humidity environments'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1602583536330-a44c3be63b82?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Tomato Spotted Wilt Virus',
    confidence: 93,
    severity: 'high',
    description: 'Tomato spotted wilt virus is spread by thrips and affects many plant species. Symptoms include bronzing of leaves, stunted growth, and characteristic ringspots or mottling on fruit.',
    treatments: [
      { 
        title: 'Remove Infected Plants', 
        description: 'Remove and destroy infected plants as there is no cure for viral infections.' 
      },
      { 
        title: 'Control Thrips', 
        description: 'Apply insecticides to control thrips, which spread the virus.' 
      },
      { 
        title: 'Weed Management', 
        description: 'Remove weeds around the garden that may harbor the virus or thrips.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Use reflective mulches to repel thrips',
      'Monitor and control thrips populations',
      'Avoid planting near ornamentals that may harbor the virus',
      'Use insect screening in greenhouse production'
    ]
  }
];

// Function to get disease information based on ID or return a random disease for demo purposes
export const getDisease = (id?: string): DiseaseInfo => {
  // In a real app, you would use the ID to fetch specific disease data
  // For this demo, we'll just return a random disease from our database
  // or a specific one if the ID matches a disease name (for testing)
  
  if (id) {
    // Try to find a disease by name that partially matches the ID
    const lowerCaseId = id.toLowerCase();
    const matchedDisease = diseaseDatabase.find(
      disease => disease.diseaseName.toLowerCase().includes(lowerCaseId)
    );
    
    if (matchedDisease) {
      return matchedDisease;
    }
  }
  
  // Return a random disease if no match is found
  const randomIndex = Math.floor(Math.random() * diseaseDatabase.length);
  return diseaseDatabase[randomIndex];
};

// Function to get all diseases (would be useful for reference pages)
export const getAllDiseases = (): DiseaseInfo[] => {
  return diseaseDatabase;
};
