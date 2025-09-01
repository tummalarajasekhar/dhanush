// components/Hero.js
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MultiStepForm from "./MultiStepForm";

const Hero = () => {
     const [show, setShow] = useState(false);
    
      useEffect(() => {
        setTimeout(() => setShow(true), 100); // small delay for smooth load
      }, []);
    const particlesInitialized = useRef(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const initializeParticles = async () => {
            if (window.particlesJS && !particlesInitialized.current) {
                window.particlesJS("particles-js", {
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
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            random: true,
                            out_mode: "out",
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: true, mode: "grab" } },
                    },
                    retina_detect: true,
                });

                particlesInitialized.current = true;
                return;
            }

            if (!window.particlesJS) {
                const script = document.createElement("script");
                script.src =
                    "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
                script.async = true;
                script.onload = () => {
                    if (!particlesInitialized.current) {
                        window.particlesJS("particles-js", {
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
                                    width: 1,
                                },
                                move: {
                                    enable: true,
                                    speed: 2,
                                    random: true,
                                    out_mode: "out",
                                },
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: { onhover: { enable: true, mode: "grab" } },
                            },
                            retina_detect: true,
                        });

                        particlesInitialized.current = true;
                    }
                };
                document.head.appendChild(script);
            }
        };

        initializeParticles();

        return () => {
            const particlesContainer = document.getElementById("particles-js");
            if (particlesContainer) {
                particlesContainer.innerHTML = "";
            }
        };
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 z-10 top-10">
            <div
                id="particles-js"
                className="absolute w-full h-full top-0 left-0 z-0"
            />
            <h1 className="font-clash top-10 font-bold text-3xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
                We Build Digital Experiences That Convert.
            </h1>

            <motion.div
                animate={{
                    width: expanded
                        ? (typeof window !== "undefined" && window.innerWidth < 640 ? '100%' : typeof window !== "undefined" && window.innerWidth < 1024 ? 400 : 600)
                        : (typeof window !== "undefined" && window.innerWidth < 640 ? '100%' : 200),
                    height: expanded
                        ? (typeof window !== "undefined" && window.innerWidth < 640 ? 'auto' : 495)
                        : (typeof window !== "undefined" && window.innerWidth < 640 ? 60 : 60),
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`bg-gradient-to-r from-blue-500 to-purple-600 duration-500 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative transition-all duration-700 ease-out transform ${
                    show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl`}
                style={{
                    minWidth: expanded ? undefined : 'auto',
                }}
            >
                {!expanded && (
                    <motion.button
                        onClick={() => setExpanded(true)}
                        className="text-white font-medium overflow-hidden py-2 px-4 w-full sm:w-auto"
                    >
                        Start a Project
                    </motion.button>
                )}

                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="w-full text-black overflow-hidden"
                        >
                            <MultiStepForm />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Hero;
