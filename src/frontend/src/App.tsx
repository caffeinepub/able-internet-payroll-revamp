import Hero from './components/Hero';
import FeaturesOverview from './components/FeaturesOverview';
import MobileAccessSection from './components/MobileAccessSection';
import ComplianceSection from './components/ComplianceSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturesOverview />
      <MobileAccessSection />
      <ComplianceSection />
      <Footer />
    </div>
  );
}

export default App;
