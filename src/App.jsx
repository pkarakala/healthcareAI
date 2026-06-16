import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Trust from "./components/Trust.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import ROICalculator from "./components/ROICalculator.jsx";
import Integrations from "./components/Integrations.jsx";
import Pricing from "./components/Pricing.jsx";
import Security from "./components/Security.jsx";
import DemoForm from "./components/DemoForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Trust />
        <HowItWorks />
        <Features />
        <ROICalculator />
        <Integrations />
        <Pricing compareHref={`${import.meta.env.BASE_URL}pricing.html`} />
        <Security />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
