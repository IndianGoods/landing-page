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
    <section className="py-24 px-6 bg-[#f97415]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-3">
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
              className="group bg-white rounded-xl overflow-hidden border border-orange-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Lighter Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#fff3e0]/90 via-[#ffe0b2]/80 to-[#ffd699]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 bg-[#f97415] rounded-full hover:bg-[#ff8c33] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href={member.email}
                    className="flex items-center justify-center w-11 h-11 bg-[#f97415] rounded-full hover:bg-[#ff8c33] transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#f97415] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
