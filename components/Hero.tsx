"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Github, Linkedin, Mail, BadgeCheck } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const socialLinks = [
  { icon: Github, href: "https://github.com/Tarcizioo", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tarcizio-pereira-neto-135299279", label: "LinkedIn" },
]

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="mb-16 pt-24 md:pt-32">
       <div className="flex justify-end mb-4">
          <ThemeToggle />
       </div>

      <div className="flex flex-col items-start gap-8">
        {/* Profile Card Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer group">
                  <Avatar className="h-28 w-28 rounded-xl border-2 border-border transition-transform group-hover:scale-105">
                    <AvatarImage src="/images/profile-final.jpg" alt="Tarcizio" className="rounded-xl object-cover" />
                    <AvatarFallback className="rounded-xl">TP</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white font-medium">
                    View
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-none shadow-none">
                 <DialogTitle className="sr-only">Profile Picture</DialogTitle>
                 <div className="relative h-80 w-80 mx-auto rounded-xl overflow-hidden border-4 border-background">
                    <Image 
                      src="/images/profile-final.jpg" 
                      alt="Tarcizio Profile" 
                      fill 
                      className="object-cover"
                    />
                 </div>
              </DialogContent>
            </Dialog>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Tarcizio</h1>
                <BadgeCheck className="h-6 w-6 text-blue-500 fill-blue-500/10" />
              </div>
              <p className="text-muted-foreground font-medium">Front-end Developer</p>
            </div>
          </div>

          <p className="mt-2 max-w-[600px] text-lg text-muted-foreground md:text-xl">
             Hey, I'm Tarcizio. Computer Engineering Student (5th Sem) focused on Front-end Development (React/Next.js) and Web Design. I create modern interfaces and explore IoT solutions.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
           className="flex flex-wrap gap-3"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
           <Button asChild className="h-10 px-6 rounded-full font-medium">
             <Link href="mailto:tarcizioneto10@gmail.com">
               <Mail className="mr-2 h-4 w-4" />
               Send an email
             </Link>
           </Button>
           {/* More buttons if needed like "Book a call" */}
        </motion.div>


        {/* Social Pills */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
           <p className="w-full text-sm font-semibold text-muted-foreground mb-1">Here are my socials</p>
           {socialLinks.map((social) => (
             <HoverCard key={social.label}>
               <HoverCardTrigger asChild>
                 <Button
                   variant="outline"
                   size="sm"
                   className="rounded-full h-9 px-4 hover:bg-muted/80 transition-all duration-200"
                   asChild
                 >
                   <Link href={social.href} target="_blank" rel="noopener noreferrer">
                     <social.icon className="mr-2 h-4 w-4" />
                     {social.label}
                   </Link>
                 </Button>
               </HoverCardTrigger>
               <HoverCardContent className="w-80">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                       <Avatar className="h-10 w-10">
                          <AvatarImage src="https://github.com/Tarcizioo.png" />
                          <AvatarFallback>TP</AvatarFallback>
                       </Avatar>
                       <div className="space-y-0.5">
                          <h4 className="text-sm font-semibold">@{social.label === 'GitHub' ? 'Tarcizioo' : 'tarcizio-neto'}</h4>
                          <p className="text-xs text-muted-foreground">
                             {social.label === 'GitHub' ? 'Building cool stuff on GitHub' : 'Connect with me on LinkedIn'}
                          </p>
                       </div>
                    </div>
                    
                    {/* Placeholder for the "Print" user asked about. */}
                    <div className="relative h-32 w-full overflow-hidden rounded-md bg-muted mt-2 border">
                        <div className="absolute inset-0 flex items-center justify-center text-center p-2">
                           <span className="text-xs text-muted-foreground">
                              (Optional) Add a screenshot of your {social.label} profile here
                           </span>
                        </div>
                        {/* 
                           To add the print as requested:
                           <Image src="/path-to-your-print.png" fill className="object-cover" />
                        */}
                    </div>
                  </div>
               </HoverCardContent>
             </HoverCard>
           ))}
        </motion.div>
      </div>
    </section>
  )
}
