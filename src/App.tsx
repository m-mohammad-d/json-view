import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <IntroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
