"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Loader2 } from "lucide-react"

const projects = [
  {
    title: "Smart Daycare Monitoring System",
    description:
      "AI-based monitoring solution for daycare facilities with real-time tracking and alerts.",
    tech: ["Python", "AI/ML", "Computer Vision"],
    inProgress: true,
  },
  {
    title: "Smart Canteen Monitoring System",
    description:
      "Intelligent canteen management system with inventory tracking and analytics.",
    tech: ["Python", "SQL", "Data Analytics"],
    inProgress: true,
  },
  {
    title: "Library Management System",
    description:
      "Complete library management solution with book tracking, member management, and database integration.",
    tech: ["Java", "OOP", "Database"],
    inProgress: false,
  },
  {
    title: "Airport Runway Management System",
    description:
      "Efficient scheduling and runway allocation system for airport operations management.",
    tech: ["Algorithms", "Scheduling", "Optimization"],
    inProgress: false,
  },
  {
    title: "Electronic Voting Machine",
    description:
      "Digital logic design project implementing a secure electronic voting system.",
    tech: ["Digital Logic", "Hardware Design"],
    inProgress: false,
  },
  {
    title: "Arduino-Based Hardware Project",
    description:
      "Embedded systems project utilizing Arduino IDE for hardware programming and sensor integration.",
    tech: ["Arduino", "C++", "Embedded Systems"],
    inProgress: false,
  },
  {
    title: "Hotel Management System",
    description:
      "Comprehensive hotel management solution with booking, guest management, and billing features.",
    tech: ["Java", "OOP", "GUI"],
    inProgress: false,
  },
  {
    title: "Hospital Management System",
    description:
      "Healthcare management system for patient records, appointments, and hospital operations.",
    tech: ["Java", "Database", "OOP"],
    inProgress: false,
  },
  {
    title: "Shopping Cart Development System",
    description:
      "E-commerce shopping cart with product management and checkout functionality.",
    tech: ["Java", "OOP", "Data Structures"],
    inProgress: false,
  },
  {
    title: "Online Quiz System",
    description:
      "Interactive quiz platform with question management, scoring, and user authentication.",
    tech: ["C++", "File Handling", "OOP"],
    inProgress: false,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills and learning journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.inProgress && (
                        <span className="flex items-center gap-1 px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <button
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
