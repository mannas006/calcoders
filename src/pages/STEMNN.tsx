import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Brain, Lightbulb } from 'lucide-react';

const STEMNN = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 py-12 text-deep-blue">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-poppins"
      >
        STEMNN Program
      </motion.h1>

      <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        The STEMNN program (Science, Technology, Engineering, Mathematics, and Neuroscience Network)
        is an initiative by CalCoders to provide advanced and interdisciplinary learning opportunities
        for students interested in the cutting edge of STEM fields.
      </p>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg mb-12"
      >
        <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">What is STEMNN?</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Atom size={64} className="text-deep-blue flex-shrink-0" />
          <p className="text-lg leading-relaxed">
            STEMNN goes beyond traditional coding education, delving into the fascinating intersections
            of computer science with other scientific disciplines, particularly neuroscience.
            This program is designed for curious and ambitious students who want to explore complex
            topics and engage in research-oriented projects.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg mb-12"
      >
        <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Key Focus Areas</h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Brain size={64} className="text-deep-blue flex-shrink-0" />
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li><strong>Computational Neuroscience:</strong> Understanding brain function through computational models.</li>
            <li><strong>Bioinformatics:</strong> Applying computational techniques to biological data.</li>
            <li><strong>Advanced AI/ML:</strong> Deep dives into neural networks and machine learning algorithms.</li>
            <li><strong>Data Science for STEM:</strong> Analyzing scientific datasets to draw insights.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Who Should Join?</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Lightbulb size={64} className="text-deep-blue flex-shrink-0" />
          <p className="text-lg leading-relaxed">
            This program is ideal for high school students with a strong foundation in mathematics and
            at least one programming language (e.g., Python). Students should have a keen interest in
            scientific research, interdisciplinary studies, and pushing the boundaries of their knowledge.
          </p>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="text-center mt-12"
      >
        <p className="text-xl font-semibold mb-4">
          Ready to explore the frontiers of STEM?
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent-orange text-white-light px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
        >
          Inquire About STEMNN
        </a>
      </motion.div>
    </div>
  );
};

export default STEMNN;
