import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import OurReach from "./Components/OurReach";
import Advertise from "./Components/Advertise";
import Features from "./Components/Features";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App space-y-14 md:space-y-20 bg-[#f0f6f8]">
      <Navbar />
      <Banner />
      <AboutUs />
      <OurReach />
      <Features />
      <Clients />
      <Advertise />
      <Footer />
    </div>
  );
}

export default App;
