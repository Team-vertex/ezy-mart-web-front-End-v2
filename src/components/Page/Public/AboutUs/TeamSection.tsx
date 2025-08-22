import { routes } from "@/constants/route";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  bio?: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  imageSrc,
  bio,
  social,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
    >
      <div className="text-center">
        <div className="relative mb-6 mx-auto w-32 h-32">
          <img
            src={imageSrc}
            alt={`${name} profile`}
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0A65FC]/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0A65FC] transition-colors">
          {name}
        </h3>
        <p className="text-[#0A65FC] font-semibold mb-4">{position}</p>

        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{bio}</p>
        )}

        {social && (
          <div className="flex justify-center gap-3">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0A65FC] hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0A65FC] hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={`${name}'s GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0A65FC] hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export function TeamSection() {
  const navigate = useNavigate();

  // Navigation function for the CTA button
  const handleJoinTeamClick = () => {
    navigate(routes.contactUs);
  };

  const teamMembers: TeamMemberProps[] = [
    {
      name: "Bamindu Jayakodi",
      position: "CEO & Founder",
      imageSrc:"public/images/teamProfiles/bamidu.jpeg",
      bio: "Visionary leader driving EzyShop's mission to revolutionize local shopping experiences.",
      social: {
        linkedin: "https://www.linkedin.com/in/bamidujayakodi/",
      },
    },
    {
      name: "Thamoddya Rashmitha",
      position: "CTO & Co-Founder",
      imageSrc:
        "",
      bio: "Technology innovator building scalable solutions for the future of commerce.",
      social: {
        linkedin: "public/images/teamProfiles/avatar.jpg",
      },
    },
    {
      name: "Shehan Hansaka",
      position: "CMO & Co-Founder",
      imageSrc:
        "public/images/teamProfiles/shehan.jpeg",
      bio: "Marketing strategist connecting communities with local businesses nationwide.",
      social: {
        linkedin: "https://www.linkedin.com/in/shehan-hansaka-687781373/",
      },
    },
    {
      name: "Rishika Mandakini",
      position: "UX Designer",
      imageSrc:
        "public/images/teamProfiles/rishika.jpeg",
      bio: "User experience specialist ensuring every interaction is smooth and meaningful.",
      social: {
        linkedin: "https://www.linkedin.com/in/rishika-mandakini-823822270/",
      },
    },
    {
      name: "Pasindu Wijesinghe",
      position: "UX Designer",
      imageSrc:
        "public/images/teamProfiles/pasindu.jpeg",
      bio: "Creative designer crafting intuitive user experiences that delight customers.",
      social: {
        linkedin: "https://www.linkedin.com/in/pasindudilshan2001/",
      },
    },
    {
      name: "Mohan Chanaka Jayaweera",
      position: "Java Developer",
      imageSrc:
        "public/images/teamProfiles/mohan.jpg",
      bio: "Develops functional software aligned with business goals.",
      social: {
        linkedin: "https://www.linkedin.com/in/mohan-chanaka-2504a7290/",
      },
    },
    {
      name: "Sithijaya",
      position: "Back-End Developer",
      imageSrc:
        "",
      bio: "Develops server-side solutions aligned with business goals.",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Sasindu Deshan",
      position: "Front-End Developer",
      imageSrc:
        "",
      bio: "Develops functional front-end solutions aligned with business goals.",
      social: {
        linkedin: "https://www.linkedin.com/in/sasindu-deshan-39852b2b0/",
      },
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <FormattedMessage id="aboutUs.team.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <FormattedMessage id="aboutUs.team.subtitle" />
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <FormattedMessage id="aboutUs.team.cta.title" />
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              <FormattedMessage id="aboutUs.team.cta.description" />
            </p>
            <button
              onClick={handleJoinTeamClick}
              className="group bg-[#0A65FC] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FormattedMessage id="aboutUs.team.cta.button" />
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
