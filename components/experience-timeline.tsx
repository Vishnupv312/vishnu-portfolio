"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  type: "work" | "internship" | "freelance";
}

const experiences: ExperienceItem[] = [
  // {
  //   title: "Senior Full-Stack Developer",
  //   company: "TechCorp Solutions",
  //   location: "San Francisco, CA",
  //   period: "2022 - Present",
  //   description:
  //     "Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
  //   technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
  //   type: "work",
  // },
  {
    title: "Full-Stack Developer",
    company: "Crista Technologies LLP",
    location: "Ahmedabad",
    period: "2024 - Present",
    description:
      "Built and scaled e-commerce platform Shopico.in using MERN stack. Developed admin panel, SEO-friendly frontend, multi-gateway payments, and deployed via CI/CD pipelines on AWS & Vercel.",
    technologies: [
      "React",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Razorpay",
      "AWS",
      "Vercel",
    ],
    type: "work",
  },

  {
    title: "FullStack Developer Intern",
    company: "TM Marketing",
    location: "Surat",
    period: "2023-2024",
    description:
      "Developed responsive websites for clients using modern frontend technologies. Collaborated with design team to implement pixel-perfect UIs.",
    technologies: ["React", "Next.js", "TailwindCSS", "Figma"],
    type: "internship",
  },
];

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <motion.div
        className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className="absolute left-4 w-3 h-3 bg-primary rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.2 + 0.3,
                type: "spring",
              }}
            />

            {/* Content */}
            <div
              className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              } md:w-1/2`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant={
                          exp.type === "work"
                            ? "default"
                            : exp.type === "internship"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {exp.type === "work"
                          ? "Full-time"
                          : exp.type === "internship"
                          ? "Internship"
                          : "Freelance"}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
