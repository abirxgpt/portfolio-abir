import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills, { Contact } from './sections/Skills';
import Education from './sections/Education';
import Lenis from 'lenis'
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import SocialDock from './components/SocialDock';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Background />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <div style={{ position: 'fixed', bottom: '20px', left: 0, width: '100%', zIndex: 100, pointerEvents: 'none' }}>
              <div style={{ pointerEvents: 'auto' }}>
                <SocialDock />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
