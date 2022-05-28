import Header from "./components/Header";
import Heading from "./components/Heading";
import Section2 from "./components/Section2";
import Destinations from "./components/Destinations";
import Guides from "./components/Guides";
import Testimonials from "./components/Testimonials";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Heading />
        <Section2 />
        <Destinations />
        <Guides />
        <Testimonials />
        <Trending />
        <Footer />
    </div>
  );
}

export default App;
