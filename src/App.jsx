import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text-primary)]">
      <ScrollProgress />
      <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

