import "./App.css";
import HeroSection from "./pages/HeroSection/HeroSection";
import Navigation from "./pages/Shared/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
