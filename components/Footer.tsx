"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/20 pb-12 pt-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Subscribe to my newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get updates on my latest projects and articles.
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" className="bg-background" />
            <Button size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tarcizio Pereira Neto. All rights reserved.
          </p>
          <p className="text-sm italic text-muted-foreground">
            "Simplicity is the ultimate sophistication."
          </p>
        </div>
      </div>
    </footer>
  )
}
