
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import DiagnosisResult from '@/components/results/DiagnosisResult';

const Results = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch data based on the id
  const sampleData = {
    imageUrl: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Tomato Late Blight',
    confidence: 96,
    severity: 'high' as const,
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
  };

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Diagnosis Results</h1>
          <p className="text-lg text-muted-foreground">
            Our AI has analyzed your image and provided the following diagnosis and recommendations.
          </p>
        </div>
        
        <DiagnosisResult {...sampleData} />
      </div>
    </Layout>
  );
};

export default Results;
