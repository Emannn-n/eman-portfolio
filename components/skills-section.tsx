"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Layers, Brain, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["C++", "Java", "Python", "SQL", "HTML/CSS"],
  },
  {
    title: "Software Development",
    icon: Layers,
    skills: ["OOP Concepts", "SDLC", "DSA Basics", "Software Engineering", "Git / GitHub"],
  },
  {
    title: "AI & Tech",
    icon: Brain,
    skills: ["AI/ML Basics", "Cybersecurity Basics", "DBMS", "AI Automation Tools"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Communication", "Presentation", "Content Writing", "Problem Solving", "Teamwork"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and professional capabilities
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-xl hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* All Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            And more skills I&apos;m continuously developing...
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Data Analysis", "UI/UX Basics", "Technical Documentation", "Research"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="px-3 py-1 text-xs border border-border text-muted-foreground rounded-full"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
