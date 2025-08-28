"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  year: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  longDescription,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
  year,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${
          featured ? "ring-2 ring-primary/20" : ""
        } h-full`}
      >
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {demoUrl ? (
              <LinkPreview url={demoUrl} width={400} height={240}>
                <span className="block w-full h-48 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Hover to preview
                  </span>
                </span>
              </LinkPreview>
            ) : (
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={`${title} project screenshot`}
                width={400}
                height={240}
                className="w-full h-48 object-cover"
              />
            )}
          </motion.div>
          {featured && (
            <motion.div
              className="absolute top-3 left-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </motion.div>
          )}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {year}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {longDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 bg-transparent"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button size="sm" asChild className="flex-1">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
