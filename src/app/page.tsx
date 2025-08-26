// pages/index.js
"use client"
import Head from 'next/head';
import { useState,} from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance.",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design approach that creates intuitive and engaging digital experiences.",
      icon: "🎨"
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store development with secure payment integration and inventory management.",
      icon: "🛒"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      icon: "☁️"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your digital products.",
      icon: "🔧"
    }
  ];

  const portfolioItems = [
    {
      title: "FinTech Dashboard",
      category: "Web App",
      image: "/placeholder-finance.jpg"
    },
    {
      title: "Fitness Mobile App",
      category: "iOS & Android",
      image: "/placeholder-fitness.jpg"
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/placeholder-ecommerce.jpg"
    },
    {
      title: "Real Estate Portal",
      category: "Web App",
      image: "/placeholder-realestate.jpg"
    },
    {
      title: "Healthcare System",
      category: "Mobile App",
      image: "/placeholder-healthcare.jpg"
    },
    {
      title: "Travel Booking Platform",
      category: "Web Development",
      image: "/placeholder-travel.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Dhanush Technologies delivered an exceptional mobile app that has significantly increased our user engagement. Their team was professional and met all deadlines.",
      avatar: "/placeholder-avatar1.jpg"
    },
    {
      name: "Michael Chen",
      position: "Director of Operations, Global Retail",
      content: "The e-commerce platform developed by Dhanush Technologies has helped us scale our business internationally. Their technical expertise is impressive.",
      avatar: "/placeholder-avatar2.jpg"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, Innovate Co.",
      content: "Working with Dhanush Technologies was a game-changer for our digital presence. They transformed our website into a powerful marketing tool.",
      avatar: "/placeholder-avatar3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Dhanush Technologies Solutions | Web & Mobile App Development</title>
        <meta name="description" content="Dhanush Technologies builds high-quality websites and mobile applications with cutting-edge technology and modern design principles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
     <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4 px-6 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Dhanush Technologies<span className="text-white">.</span>
          </motion.div>
          
          
          <div className="hidden md:flex space-x-10">
            {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          
         
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        
       
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 mt-4 rounded-lg py-4"
          >
            <div className="flex flex-col space-y-4 px-6">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav> 
       {/* <nav  className="glass">
        <div className="logo">Nexus Create</div>
        <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <button class="theme-toggle" id="themeToggle">🌙</button>
    </nav> */}

       
<div className="relative h-screen flex items-center justify-center text-center">
<Hero  />
</div>

 {/* <section className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-70"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Crafting Digital <span className="text-accent">Experiences</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We build innovative websites and apps tailored for your business.
        </p>
        <a
          href="#contact"
          className="bg-accent text-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 cta-button"
        >
          Get Started
        </a>
      </div>
    </section> */}


      {/* Hero Section */}
      {/* <section id="home" className="pt-32 pb-20 px-6 h-screen">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transforming Ideas Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Digital Reality</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            We build high-performance websites and mobile applications that drive growth and deliver exceptional user experiences.
          </motion.p>
          
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
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-blue-400">Dhanush Technologies</span></h2>
              <p className="text-gray-300 mb-4">
                Founded in 2015, Dhanush Technologies Solutions has been at the forefront of digital innovation, helping businesses of all sizes leverage technology to achieve their goals.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of experienced developers, designers, and strategists work together to create digital solutions that not only look beautiful but also perform exceptionally across all devices and platforms.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-blue-400 mb-2">150+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-400 mb-2">98%</h3>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-blue-400 mb-2">40+</h3>
                  <p className="text-gray-400">Team Members</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-400 mb-2">7+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-6 transform rotate-1">
                <div className="bg-gray-700 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                  <div className="text-5xl">📊</div>
                </div>
              </div>
              <div className="absolute -inset-4 border border-blue-500/30 rounded-xl rotate-3 -z-10"></div>
              <div className="absolute -inset-6 border border-purple-500/20 rounded-xl rotate-6 -z-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-blue-400">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-purple-400">Portfolio</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of our recent projects that showcase our expertise and creativity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-xl bg-gray-700 border border-gray-600 hover:border-purple-500 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-4xl">
                    {item.category.includes('Mobile') ? '📱' : 
                     item.category.includes('Web') ? '💻' : '🛒'}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-purple-400">{item.category}</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-purple-400 transition-colors duration-300">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="border border-gray-700 hover:border-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              View All Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-blue-400">Testimonials</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our clients have to say about working with us and the results we&apos;ve delivered.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTestimonial === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 flex flex-col ${activeTestimonial === index ? 'z-10' : 'z-0'}`}
              >
                <div className="text-4xl mb-4">&quot;</div>
                <p className="text-lg mb-6 flex-1">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                    <div className="text-xl">👤</div>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${activeTestimonial === index ? 'bg-blue-400' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In <span className="text-purple-400">Touch</span></h2>
              <p className="text-gray-300 mb-8">
                Have a project in mind or want to discuss how we can help your business? Reach out to us and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl text-purple-400 mr-4">📍</div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-400">123 Tech Street, San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-2xl text-blue-400 mr-4">📧</div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-400">info@Dhanush Technologies.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-2xl text-green-400 mr-4">📞</div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <form className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6 md:mb-0">
              Dhanush Technologies<span className="text-white">.</span>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dhanush Technologies Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}