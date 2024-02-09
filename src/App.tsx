// import Aos from 'aos';
// import 'aos/dist/aos.css';

import Hero from "./components/Hero";
import Header from "./components/Header";
import Overwiew from "./components/Overwiew";
import Brands from "./components/Brands";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import Testimonilas from "./components/Testimonilas";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Overwiew />
      <Brands/>
      <Feature1/>
      <Feature2/>
      <Feature3/>
      <Product/>
      <Pricing/>
      <Testimonilas/>
    </div>
  );
}

export default App;
