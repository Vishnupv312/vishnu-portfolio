"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-4xl" style={{ transform: "translateX(-50%)" }}>
      <div className="rounded-full border bg-background/80 backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-12 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="relative">
                  <motion.span
                    className={cn(
                      "transition-colors hover:text-primary relative z-10 px-3 py-1.5 rounded-full",
                      pathname === item.href ? "text-foreground" : "text-foreground/60",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  <AnimatePresence>
                    {pathname === item.href && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/10"
                        layoutId="activeTab"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center gap-4 text-sm md:hidden">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="relative">
                    <motion.span
                      className={cn(
                        "transition-colors hover:text-primary relative z-10 px-2 py-1 rounded-full text-sm",
                        pathname === item.href ? "text-foreground" : "text-foreground/60",
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                    <AnimatePresence>
                      {pathname === item.href && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/10"
                          layoutId="activeTabMobile"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                ))}
              </nav>
            </div>
            <nav className="flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <ThemeToggle />
              </motion.div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
