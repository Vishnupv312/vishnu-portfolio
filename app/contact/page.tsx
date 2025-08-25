"use client";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Clock, Coffee } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      {/* <Navigation /> */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">
              Let&apos;s Create Something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amazing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I&apos;m always excited to connect with fellow
              developers and potential clients.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection className="order-2 lg:order-1" direction="left">
              <ContactForm />
            </AnimatedSection>

            <div className="order-1 lg:order-2 space-y-6">
              <AnimatedSection direction="right" delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      Let&apos;s Connect
                    </CardTitle>
                    <CardDescription>
                      I&apos;m always open to discussing new opportunities and
                      interesting projects.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Ahmedabad, India (Open to Remote)</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Usually responds within 24 hours</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle>Find Me Online</CardTitle>
                    <CardDescription>
                      Connect with me on social media or check out my work.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        variant="outline"
                        asChild
                        className="justify-start h-12 bg-transparent"
                      >
                        <a
                          href="https://github.com/johndoe"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <Github className="h-5 w-5" />
                          <div className="text-left">
                            <div className="font-medium">GitHub</div>
                            <div className="text-sm text-muted-foreground">
                              @Vishnupv312
                            </div>
                          </div>
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        asChild
                        className="justify-start h-12 bg-transparent"
                      >
                        <a
                          href="https://linkedin.com/in/johndoe"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <Linkedin className="h-5 w-5" />
                          <div className="text-left">
                            <div className="font-medium">LinkedIn</div>
                            <div className="text-sm text-muted-foreground">
                              vishnu-vijayan-p
                            </div>
                          </div>
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        asChild
                        className="justify-start h-12 bg-transparent"
                      >
                        <a
                          href="mailto:john@example.com"
                          className="flex items-center gap-3"
                        >
                          <Mail className="h-5 w-5" />
                          <div className="text-left">
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-muted-foreground">
                              vishnupv312@gmail.com
                            </div>
                          </div>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* <AnimatedSection direction="right" delay={0.6}>
                <Card>
                  <CardHeader>
                    <CardTitle>What I Can Help With</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Full-stack web application development
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        MERN stack consulting and architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Code reviews and technical mentoring
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        API development and integration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Performance optimization
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
