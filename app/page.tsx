"use client";

import { FloatingNavDemo } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/skill-badge";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectCard } from "@/components/project-card";
import { AnimatedSection } from "@/components/animated-section";
import { StaggeredContainer } from "@/components/staggered-container";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { ColourfulText } from "@/components/ui/colourful-text";
import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const skills = [
  { name: "MongoDB", skillId: "mongodb", level: "Advanced" as const },
  { name: "Express.js", skillId: "express", level: "Advanced" as const },
  { name: "React", skillId: "react", level: "Advanced" as const },
  { name: "Node.js", skillId: "nodejs", level: "Advanced" as const },
  { name: "Next.js", skillId: "nextjs", level: "Advanced" as const },
  { name: "TailwindCSS", skillId: "tailwind", level: "Advanced" as const },
  { name: "TypeScript", skillId: "ts", level: "Intermediate" as const },
  { name: "Git", skillId: "git", level: "Intermediate" as const },
  { name: "AWS", skillId: "aws", level: "Begineer" as const },
  // { name: "React Native", skillId: "react", level: "Intermediate" as const }, // Note: React Native uses the same React icon
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN e-commerce solution with payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart, and Stripe payment integration. Includes admin dashboard for inventory management.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Stripe",
      "JWT",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "/modern-ecommerce-interface.png",
    year: "2024",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A modern task management application with real-time collaboration features, drag-and-drop functionality, team workspaces, and progress tracking. Built with Next.js and Socket.io for seamless real-time experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Prisma",
      "PostgreSQL",
      "Shadcn UI",
    ],
    githubUrl: "https://github.com/johndoe/task-manager",
    demoUrl: "https://taskmanager-demo.vercel.app",
    imageUrl: "/task-management-dashboard.png",
    year: "2024",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    longDescription:
      "A comprehensive social media analytics dashboard that aggregates data from multiple platforms, provides insights, and helps manage social media presence with scheduling features and performance metrics.",
    technologies: [
      "React",
      "D3.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Chart.js",
    ],
    githubUrl: "https://github.com/johndoe/social-dashboard",
    demoUrl: "https://social-dashboard-demo.vercel.app",
    imageUrl: "/social-media-analytics-dashboard.png",
    year: "2023",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with location-based forecasts",
    longDescription:
      "A sleek weather application providing detailed forecasts, interactive maps, and location-based weather alerts. Features beautiful animations and responsive design for optimal user experience across devices.",
    technologies: [
      "React Native",
      "TypeScript",
      "OpenWeather API",
      "Expo",
      "Async Storage",
    ],
    githubUrl: "https://github.com/johndoe/weather-app",
    imageUrl: "/weather-forecast-mobile-app-interface.png",
    year: "2023",
  },
  {
    title: "Blog CMS Platform",
    description: "Content management system for bloggers and writers",
    longDescription:
      "A powerful content management system designed for bloggers and content creators, featuring rich text editing, media management, SEO optimization, and multi-author support with role-based permissions.",
    technologies: [
      "Next.js",
      "Sanity CMS",
      "TailwindCSS",
      "Vercel",
      "TypeScript",
    ],
    githubUrl: "https://github.com/johndoe/blog-cms",
    demoUrl: "https://blog-cms-demo.vercel.app",
    imageUrl: "/blog-content-management-system-interface.png",
    year: "2023",
  },
  {
    title: "Fitness Tracker API",
    description: "RESTful API for fitness and workout tracking applications",
    longDescription:
      "A robust RESTful API built for fitness applications, providing endpoints for workout tracking, progress monitoring, user management, and integration with wearable devices. Includes comprehensive documentation and testing suite.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Swagger",
      "Jest",
    ],
    githubUrl: "https://github.com/johndoe/fitness-api",
    imageUrl: "/fitness-tracking-api-documentation.png",
    year: "2022",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavDemo />
      {/* <Navigation /> */}
      <main className="container mx-auto px-4">
        <section className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-12">
          {/* <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black"> */}
          {/* <motion.img
              src="https://assets.aceternity.com/linear-demo.webp"
              className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
            /> */}
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-black dark:text-white relative z-2 font-sans">
              Hi, I&apos;m <ColourfulText text="Vishnu" /> <br />
              <p className="text-4xl">A Software Engineer</p>
            </h1>
          </div>
          <motion.div className="pt-10">
            {/* <motion.p
              className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I craft modern web applications with React, Node.js, and
              cutting-edge technologies. Passionate about creating seamless user
              experiences and scalable solutions.
            </motion.p> */}
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex h-6 w-4 justify-center rounded-full border-2 border-muted-foreground/30">
              <div className="mt-2 h-1 w-1 rounded-full bg-muted-foreground/50"></div>
            </div>
          </motion.div>
          {/* </div> */}
          {/* <div className="mx-auto max-w-4xl text-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Vishnu
                  </span>
                </motion.h1>
                <motion.h2
                  className="text-xl font-semibold text-muted-foreground sm:text-2xl lg:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  a Software Engineer
                </motion.h2>
              </motion.div>

              <motion.p
                className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I craft modern web applications with React, Node.js, and
                cutting-edge technologies. Passionate about creating seamless
                user experiences and scalable solutions.
              </motion.p>

              <motion.div
                className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="mailto:john@example.com"
                      aria-label="Email Contact"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex h-6 w-4 justify-center rounded-full border-2 border-muted-foreground/30">
                <div className="mt-2 h-1 w-1 rounded-full bg-muted-foreground/50"></div>
              </div>
            </motion.div>
          </div> */}
        </section>

        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            // transition={{
            //   duration: 0.5,
            //   ease: [0.4, 0.0, 0.2, 1],
            // }}
            className="text-2xl px-4 md:text-4xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            I craft modern web applications with React, Node.js, and
            cutting-edge technologies. Passionate about creating seamless
            <Highlight className="text-black dark:text-white">
              user experiences and scalable solutions.
            </Highlight>
          </motion.h1>
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:john@example.com" aria-label="Email Contact">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </HeroHighlight>

        <section id="skills" className="py-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on the MERN
              stack and cutting-edge development tools.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                skillId={skill.skillId}
              />
            ))}
          </StaggeredContainer>
        </section>

        <section id="experience" className="py-20 bg-muted/30">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Experience & Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey as a Full-Stack Developer, from
              internships to leading development teams.
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-4xl mx-auto" delay={0.2}>
            <ExperienceTimeline />
          </AnimatedSection>
        </section>

        <section id="projects" className="py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in
              full-stack development and modern web technologies.
            </p>
          </AnimatedSection>

          <StaggeredContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            staggerDelay={0.15}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                longDescription={project.longDescription}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                imageUrl={project.imageUrl}
                year={project.year}
                featured={project.featured}
              />
            ))}
          </StaggeredContainer>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </AnimatedSection>
        </section>

        <section className="py-20 bg-muted/30">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to bring your ideas to life? I&apos;m always excited to work
              on new projects and collaborate with amazing teams.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
}
