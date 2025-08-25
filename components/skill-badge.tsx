"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  skillId: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export function SkillBadge({
  name,
  skillId,
  level = "Advanced",
}: SkillBadgeProps) {
  const levelColors = {
    Beginner: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    Intermediate: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    Advanced: "bg-primary/10 text-primary border-primary/20",
    Expert: "bg-accent/10 text-accent border-accent/20",
  };

  const iconUrl = `https://skillicons.dev/icons?i=${skillId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      whileTap={{ scale: 0.95 }}
      className="perspective-1000"
    >
      <Card className="group relative overflow-hidden flex items-center gap-4 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/20">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        {/* Logo container with enhanced animations */}
        <motion.div
          className={`relative rounded-xl p-3 ${levelColors[level]} flex items-center justify-center min-w-fit`}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(var(--primary), 0)",
              "0 0 0 4px rgba(var(--primary), 0.1)",
              "0 0 0 0 rgba(var(--primary), 0)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Floating animation for the icon */}
          <motion.img
            src={iconUrl}
            alt={`${name} icon`}
            className="h-10 w-10 object-contain relative z-10"
            loading="lazy"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              filter: "brightness(1.1) saturate(1.1)",
              transition: { duration: 0.2 },
            }}
          />

          {/* Animated background circle */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
            initial={false}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text content with stagger animation */}
        <motion.div
          className="relative z-10"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.h3
            className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-sm text-muted-foreground mt-1"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {level}
          </motion.p>
        </motion.div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full"
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />
      </Card>
    </motion.div>
  );
}
