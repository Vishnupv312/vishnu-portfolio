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
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { useEffect, useState } from "react";
import { LoaderThree } from "@/components/ui/loader";
import TextType from "@/components/ui/TextAnimations/TextType/TextType";
import GradientText from "@/components/ui/TextAnimations/GradientText/GradientText";
import ScrollFloat from "@/components/ui/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ui/TextAnimations/ScrollReveal/ScrollReveal";
// import SplashCursor from "@/components/ui/Animations/SplashCursor/SplashCursor";
const skills = [
  {
    name: "MongoDB",
    skillId: "mongodb",
    level: "Advanced" as const,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Express.js",
    skillId: "express",
    level: "Advanced" as const,
    url: "https://expressjs.com/",
  },
  {
    name: "React",
    skillId: "react",
    level: "Advanced" as const,
    url: "https://react.dev/",
  },
  {
    name: "Node.js",
    skillId: "nodejs",
    level: "Advanced" as const,
    url: "https://nodejs.org/en",
  },
  {
    name: "Next.js",
    skillId: "nextjs",
    level: "Advanced" as const,
    url: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    skillId: "tailwind",
    level: "Advanced" as const,
    url: "https://tailwindcss.com/",
  },
  {
    name: "TypeScript",
    skillId: "ts",
    level: "Intermediate" as const,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Git",
    skillId: "git",
    level: "Intermediate" as const,
    url: "https://git-scm.com/",
  },
  {
    name: "AWS",
    skillId: "aws",
    level: "Begineer" as const,
    url: "https://aws.amazon.com/",
  },
  // { name: "React Native", skillId: "react", level: "Intermediate" as const }, // Note: React Native uses the same React icon
];

const projects = [
  {
    title: "DigiDine - QR Code Menu Generator",
    description: "Full-stack MERN app for restaurants",
    longDescription:
      "DigiDine is a full-stack MERN application that allows restaurants to easily create and manage digital menus. Owners can sign up, customize their menu with categories, products, and pricing, and instantly generate a QR code that links to their restaurant page. Customers can scan the QR code to view a clean, responsive menu. Includes an admin dashboard for restaurant management, analytics, and theme customization.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TailwindCSS",
      "JWT",
      "Cloudinary",
      "Redis",
    ],
    githubUrl: "https://github.com/vishnupv312/digidine-frontend",
    demoUrl: "https://digidine-frontend.vercel.app",
    imageUrl: "/digidine-preview.png",
    year: "2025",
    featured: true,
  },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Changed from !loading to loading
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <LoaderThree />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavDemo />
      {/* <Navigation /> */}
      <main className="container mx-auto px-4">
        <section className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-12">
          {/* <SplashCursor /> */}
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
              <TextType
                text={["a Software Engineer", "a Full Stack Dev"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-4xl dark:text-white text-black"
              />
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
            className="text-md lg:px-4 md:text-4xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            I craft modern web applications with React, Node.js, and
            cutting-edge technologies. Passionate about creating seamless
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              user experiences and scalable solutions.
            </GradientText>
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
            {/* <h2 className="text-3xl font-bold text-foreground mb-4"> */}
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Skills & Technologies
            </ScrollFloat>
            {/* </h2> */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on the MERN
              stack and cutting-edge development tools.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <SkillBadge
                url={skill.url}
                key={skill.name}
                name={skill.name}
                skillId={skill.skillId}
              />
            ))}
          </StaggeredContainer>
        </section>

        <section
          id="experience"
          className="py-20 bg-muted/30"
          data-tall-section="true"
        >
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Experience & Journey
            </h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="!text-lg text-muted-foreground max-w-7xl mx-auto"
            >
              My professional journey as a Full-Stack Developer, from
              internships to leading development teams.
            </ScrollReveal>
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
