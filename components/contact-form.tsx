"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after success
    setTimeout(() => {
      setSubmitStatus("idle");
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Get In Touch</CardTitle>
        <CardDescription>
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or how we can work together..."
              rows={5}
              required
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : submitStatus === "success" ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                Send Message
              </>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              Thanks for your message! I&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Please try again or email me directly.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
