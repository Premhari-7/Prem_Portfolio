"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { nasalization } from "@/app/fonts";
import { ProjectCard } from "../Cards";
import { projectsData } from "@/constant/";

export const Projects = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="mx-auto px-4 lg:px-8 relative">

        {/* 🔥 Heading Section */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
          >
            Featured Projects
          </motion.h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            A collection of real-world applications and systems I’ve built using modern technologies,
            focusing on performance, usability, and scalable architecture.
          </p>
        </motion.div>

        {/* 🔥 Projects Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projectsData.length > 0 ? (
            projectsData.map((proj, index) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard
                  index={index}
                  title={proj.name}
                  desc={proj.description}
                  github={proj.github_link}
                  demo={proj.demo}
                  tech={proj.tech}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full">
              No projects available right now.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};