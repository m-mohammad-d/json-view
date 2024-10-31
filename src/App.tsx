import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import JsonExamples from "./Components/JsonExamples";

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <IntroSection />
        <FeaturesSection />
        <JsonExamples />
      </main>
      <Footer />
    </div>
  );
}

export default App;
