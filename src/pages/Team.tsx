import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

// No team members for now
const teamMembers: TeamMember[] = [];

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-accent-orange"
      />
      <h3 className="text-2xl font-semibold mb-1 font-poppins">{member.name}</h3>
      <p className="text-accent-orange text-lg mb-3">{member.role}</p>
      <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
      <div className="flex space-x-3">
        {member.social.linkedin && (
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-deep-blue hover:text-accent-orange transition-colors">
            <Linkedin size={20} />
          </a>
        )}
        {member.social.github && (
          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-deep-blue hover:text-accent-orange transition-colors">
            <Github size={20} />
          </a>
        )}
        {member.social.email && (
          <a href={`mailto:${member.social.email}`} className="text-deep-blue hover:text-accent-orange transition-colors">
            <Mail size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-deep-blue">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-poppins"
      >
        Meet Our Amazing Team
      </motion.h1>

      <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Our team is composed of passionate educators, experienced developers, and dedicated volunteers
        who are committed to making a positive impact through coding education.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-full text-center text-gray-500 text-2xl py-24">
          Coming Soon
        </div>
      </div>
    </div>
  );
};

export default Team;
