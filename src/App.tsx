import FeaturesSection from "./Components/FeaturesSection";
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
    </div>
  );
}

export default App;
