import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 text-deep-blue">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 font-poppins"
      >
        About CalCoders
      </motion.h1>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white px-3 py-5 xs:px-4 sm:p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
      >
        <p className="text-base xs:text-lg leading-relaxed mb-4 sm:mb-6">
          CalCoders is a dedicated nonprofit organization with a deep commitment to empowering young students by introducing them to the dynamic world of coding, technology, and STEM (Science, Technology, Engineering, and Mathematics). Our mission is to help students not only acquire the essential skills needed to excel in these fields, but also to use their knowledge and talents to transform their lives, positively impact others, and contribute meaningfully to the world around them. By fostering creativity, critical thinking, and problem-solving abilities through coding and technology, we aim to create a generation of innovators who are equipped to shape the future.
        </p>
        <p className="text-base xs:text-lg leading-relaxed mb-4 sm:mb-6">
          To achieve this mission, we organize a variety of engaging educational programs, including classes, summer camps, workshops, and events, all centered around STEM and coding. These initiatives are designed to inspire curiosity, ignite passion, and provide hands-on experiences that are both fun and challenging. Whether it’s through an interactive coding camp or a hands-on robotics workshop, CalCoders strives to make learning about STEM and technology accessible, enjoyable, and impactful for students of all ages.
        </p>
        <p className="text-base xs:text-lg leading-relaxed mb-4 sm:mb-6">
          In addition to our classes and camps, we host community events that serve as opportunities for students, parents, and educators to come together and share their skills, experiences, and ideas in the fields of STEM and programming. These events allow participants to explore the endless possibilities of technology while fostering collaboration and networking. By creating a space for students to exchange knowledge and learn from each other, we hope to spark creativity and a sense of community, which will, in turn, inspire new projects and innovations that can have a lasting impact.
        </p>
        <p className="text-base xs:text-lg leading-relaxed mb-4 sm:mb-6">
          We believe that everyone has the potential to make a difference, and that by equipping students with the right tools and mindset, they can create unique and groundbreaking solutions. CalCoders also places a strong emphasis on mentorship, recognizing that personalized guidance and support can play a critical role in a student's journey toward success in STEM. We are proud to offer mentorship opportunities that pair students with experienced professionals, ensuring that each young learner has the chance to receive the advice and encouragement they need to overcome challenges and reach their full potential.
        </p>
        <p className="text-base xs:text-lg leading-relaxed">
          At CalCoders, we are not just about teaching coding—we are about fostering a growth mindset, nurturing future leaders, and cultivating a passion for STEM that will last a lifetime. We are here to inspire, guide, and empower students, helping them to see their potential and encouraging them to pursue careers and projects that contribute to the advancement of technology and society as a whole. Together, we believe we can create a brighter, more innovative future, one student at a time.
        </p>
      </motion.section>
    </div>
  );
};

export default About;
