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
      className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2"
    >
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src={imageSrc}
            alt={`${name} profile`}
            className="object-cover w-full h-full transition-transform duration-300 border-4 border-white rounded-full shadow-lg group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0A65FC]/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0A65FC] transition-colors">
          {name}
        </h3>
        <p className="text-[#0A65FC] font-semibold mb-4">{position}</p>

        {bio && (
          <p className="mb-6 text-sm leading-relaxed text-gray-600">{bio}</p>
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
      imageSrc: "/images/teamProfiles/bamidu.jpeg",
      bio: "Visionary leader driving EzyShop's mission to revolutionize local shopping experiences.",
      social: {
        linkedin: "https://www.linkedin.com/in/bamidujayakodi/",
      },
    },
    {
      name: "Thamoddya Rashmitha",
      position: "CTO & Co-Founder",
      imageSrc: "/images/teamProfiles/thamoddya.png",
      bio: "Technology innovator building scalable solutions for the future of commerce.",
      social: {
        linkedin: "https://www.linkedin.com/in/thamoddya-rashmitha",
      },
    },
    {
      name: "Shehan Hansaka",
      position: "CMO & Co-Founder",
      imageSrc: "/images/teamProfiles/shehan.jpg",
      bio: "Marketing strategist connecting communities with local businesses nationwide.",
      social: {
        linkedin: "https://www.linkedin.com/in/shehan-hansaka-687781373/",
      },
    },
    {
      name: "Mohan Chanaka Jayaweera",
      position: "Java Developer",
      imageSrc: "/images/teamProfiles/mohan.jpg",
      bio: "Develops functional software aligned with business goals.",
      social: {
        linkedin: "https://www.linkedin.com/in/mohan-chanaka-2504a7290/",
      },
    },
    {
      name: "Rishika Mandakini",
      position: "UX Designer",
      imageSrc: "/images/teamProfiles/rishika.png",
      bio: "User experience specialist ensuring every interaction is smooth and meaningful.",
      social: {
        linkedin: "https://www.linkedin.com/in/rishika-mandakini-823822270/",
      },
    },
    {
      name: "Pasindu Dilshan",
      position: "UX Designer",
      imageSrc: "/images/teamProfiles/avatar.jpg",
      bio: "Creative designer crafting intuitive user experiences that delight customers.",
      social: {
        linkedin: "https://www.linkedin.com/in/pasindudilshan2001/",
      },
    },
    {
      name: "Sithijaya",
      position: "Back-End Developer",
      imageSrc: "/images/teamProfiles/sithijaya.jpg",
      bio: "Develops server-side solutions aligned with business goals.",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Sasindu Deshan",
      position: "Front-End Developer",
      imageSrc: "/images/teamProfiles/sasindu.jpg",
      bio: "Develops functional front-end solutions aligned with business goals.",
      social: {
        linkedin: "www.linkedin.com/in/sasindu-deshan-39852b2b0",
      },
    },
  ];

  return (
    <section className="px-4 py-20 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            <FormattedMessage id="aboutUs.team.title" />
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            <FormattedMessage id="aboutUs.team.subtitle" />
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          className="mt-16 text-center"
        >
          <div className="p-12 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-3xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              <FormattedMessage id="aboutUs.team.cta.title" />
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              <FormattedMessage id="aboutUs.team.cta.description" />
            </p>
            <button
              onClick={handleJoinTeamClick}
              className="group bg-[#0A65FC] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FormattedMessage id="aboutUs.team.cta.button" />
              <span className="inline-block ml-2 transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
