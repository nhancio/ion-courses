import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyTejas: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-8"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Tejas?
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img 
            src="/images/course-cards/course (1).avif" 
            alt="Why Tejas" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
            Tejas provides industry-focused education in VLSI design with cutting-edge tools, expert guidance, and strong industry collaborations.
          </motion.p>
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-gray-800 mb-4">
            Key Highlights:
          </motion.h3>
          <motion.ul variants={itemVariants} className="list-disc list-inside space-y-2 text-lg text-gray-700 leading-relaxed">
            <li><strong>Industry-Relevant Curriculum:</strong> Covers digital & analog design, FPGA, ASIC, and verification methodologies.</li>
            <li><strong>Hands-on Learning:</strong> Modern labs, real-world projects, and advanced simulation tools.</li>
            <li><strong>Expert-Led Training:</strong> Faculty from top semiconductor firms & guest lectures by industry leaders.</li>
            <li><strong>Career & Networking Support:</strong> Internship tie-ups, alumni connections, and job placement assistance.</li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyTejas;
