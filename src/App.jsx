import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import StoreSearch from "./components/StoreSearch/StoreSearch";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main>
        <HeroSection />
        <StoreSearch />
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
