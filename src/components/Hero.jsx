// components/Hero.js
import { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';

const Hero = () => {
  const particlesInitialized = useRef(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    const initializeParticles = async () => {
      // Check if particles.js is already loaded
      if (window.particlesJS && !particlesInitialized.current) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00DDFF" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00DDFF",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            }
          },
          retina_detect: true
        });
        
        particlesInitialized.current = true;
        return;
      }

      // Load particles.js if not already loaded
      if (!window.particlesJS) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;
        script.onload = () => {
          if (!particlesInitialized.current) {
            window.particlesJS('particles-js', {
              particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00DDFF" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#00DDFF",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: { enable: true, mode: "grab" },
                  onclick: { enable: true, mode: "push" },
                  resize: true
                }
              },
              retina_detect: true
            });
            
            particlesInitialized.current = true;
          }
        };
        document.head.appendChild(script);
      }
    };

    initializeParticles();

    // Cleanup function
    return () => {
      // Remove the particles canvas if it exists
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 z-10">
      <div id="particles-js" className="absolute w-full h-full top-0 left-0 z-0" />
      <h1 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
        We Build Digital Experiences That Convert.
      </h1>
      
      <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Start a Project
            </button>
            <button className="border border-gray-700 hover:border-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              View Our Work
            </button>
          </motion.div>
    </section>
  );
};

export default Hero;