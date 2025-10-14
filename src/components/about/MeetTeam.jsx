import React from "react";
import { Linkedin, Mail } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ayan Srivastav",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      linkedin: "#",
      email: "mailto:ayan@indiangoods.com",
    },
    {
      name: "Riya Sharma",
      role: "COO",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      linkedin: "#",
      email: "mailto:riya@indiangoods.com",
    },
    {
      name: "Vikram Patel",
      role: "CTO",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      linkedin: "#",
      email: "mailto:vikram@indiangoods.com",
    },
    {
      name: "Sneha Verma",
      role: "Marketing Head",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      linkedin: "#",
      email: "mailto:sneha@indiangoods.com",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Leadership Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-slate-800/70"
            >
              {/* Image */}
              <div className="relative w-full h-80 overflow-hidden bg-slate-700">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-slate-900" />
                  </a>
                  
                  <a
                    href={member.email}
                    className="flex items-center justify-center w-11 h-11 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-slate-900" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}