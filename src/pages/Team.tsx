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

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    bio: 'Passionate about empowering youth through technology. Over 15 years in software development and education.',
    image: 'https://via.placeholder.com/150/1E3A8A/F9FAFB?text=Alice',
    social: {
      linkedin: '#',
      github: '#',
      email: 'alice@example.com',
    },
  },
  {
    name: 'Bob Williams',
    role: 'Lead Instructor',
    bio: 'Specializes in Python and web development. Loves making complex concepts easy to understand.',
    image: 'https://via.placeholder.com/150/F97316/F9FAFB?text=Bob',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Carol Davis',
    role: 'Curriculum Developer',
    bio: 'Designs engaging and effective coding curricula for all age groups. Background in educational psychology.',
    image: 'https://via.placeholder.com/150/1E3A8A/F9FAFB?text=Carol',
    social: {
      linkedin: '#',
      email: 'carol@example.com',
    },
  },
  {
    name: 'David Lee',
    role: 'Operations Manager',
    bio: 'Ensures smooth operations and manages logistics for all CalCoders programs and events.',
    image: 'https://via.placeholder.com/150/F97316/F9FAFB?text=David',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Eve Green',
    role: 'Community Outreach',
    bio: 'Connects CalCoders with local schools and community organizations to expand our reach.',
    image: 'https://via.placeholder.com/150/1E3A8A/F9FAFB?text=Eve',
    social: {
      linkedin: '#',
      email: 'eve@example.com',
    },
  },
  {
    name: 'Frank White',
    role: 'Volunteer Coordinator',
    bio: 'Manages our amazing team of volunteers and ensures they have a rewarding experience.',
    image: 'https://via.placeholder.com/150/F97316/F9FAFB?text=Frank',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
];

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
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
