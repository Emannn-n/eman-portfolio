"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, BookOpen, Code } from "lucide-react"

const education = [
  {
    institution: "University of Home Economics, Lahore",
    degree: "Bachelor's in Computer Science",
    period: "2024 - 2028",
    icon: GraduationCap,
    current: true,
  },
  {
    institution: "PGC",
    degree: "Intermediate",
    period: "2021 - 2022",
    icon: BookOpen,
    current: false,
  },
  {
    institution: "Lahore Grammar School",
    degree: "Matriculation",
    period: "2019 - 2020",
    icon: BookOpen,
    current: false,
  },
]

const completedCourses = [
  "Software Engineering",
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "C++",
  "Java",
  "HTML/CSS Basics",
]

const ongoingCourses = [
  "Database Systems",
  "Artificial Intelligence",
  "Assembly Language",
  "SQL",
  "Python",
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey and relevant coursework
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.institution}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.15 }}
                      className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        item.current
                          ? "bg-primary text-primary-foreground"
                          : "glass-card text-muted-foreground"
                      }`}
                    >
                      <Icon size={20} />
                    </motion.div>

                    {/* Content card */}
                    <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.institution}
                        </h3>
                        {item.current && (
                          <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-1">{item.degree}</p>
                      <p className="text-sm text-muted-foreground/70">
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Coursework */}
          <div className="space-y-8">
            {/* Completed Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Completed Coursework
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {completedCourses.map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Ongoing Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Currently Learning
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {ongoingCourses.map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="px-3 py-1.5 text-sm border border-primary/30 text-primary rounded-lg"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
