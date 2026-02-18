"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Mail, BadgeCheck, ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import { GithubCard, LinkedinCard } from "@/components/SocialCards"
import { socialLinks, siteConfig } from "@/lib/data"
import { useLanguage } from "@/components/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition; // Scroll to exact top of section
    const duration = 1000; // 1 second duration for "premium" feel
    let start: number | null = null;

    const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

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
          {/* ... existing profile code ... */}
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative cursor-pointer group rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <Avatar className="h-28 w-28 rounded-xl border-2 border-border transition-transform group-hover:scale-105">
                    <AvatarImage src="/images/profile-final.jpg" alt={siteConfig.name} className="rounded-xl object-cover" />
                    <AvatarFallback className="rounded-xl">TP</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white font-medium">
                    View
                  </div>
                  <span className="sr-only">View Profile Picture</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-none shadow-none">
                 <DialogTitle className="sr-only">Profile Picture</DialogTitle>
                 <div className="relative h-80 w-80 mx-auto rounded-xl overflow-hidden border-4 border-background">
                    <Image 
                      src="/images/profile-final.jpg" 
                      alt={`${siteConfig.name} Profile`}
                      fill 
                      className="object-cover"
                    />
                 </div>
              </DialogContent>
            </Dialog>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight">{siteConfig.name}</h1>
                <BadgeCheck className="h-6 w-6 text-blue-500 fill-blue-500/10" />
              </div>
              <p className="text-muted-foreground font-medium">{t.hero.role}</p>
            </div>
          </div>

          <p className="mt-2 max-w-[600px] text-lg text-muted-foreground md:text-xl">
             {t.hero.description}
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
             <a href="#contact" onClick={handleContactClick}>
               {t.hero.cta}
               <ArrowRight className="ml-2 h-4 w-4" />
             </a>
           </Button>
           <Button asChild variant="outline" className="h-10 px-6 rounded-full font-medium">
             <Link href={siteConfig.links.resume} target="_blank" rel="noopener noreferrer">
               {t.hero.resume}
               <Download className="mr-2 h-4 w-4" />
             </Link>
           </Button>
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
             <HoverCard key={social.label} openDelay={0} closeDelay={0}>
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
             <HoverCardContent className="w-80 p-0 border-none shadow-xl overflow-hidden bg-transparent">
                  {social.label === 'GitHub' && (
                     <GithubCard />
                  )}
                  {social.label === 'LinkedIn' && (
                     <LinkedinCard />
                  )}
                  {social.label !== 'GitHub' && social.label !== 'LinkedIn' && (
                     <div className="p-4 bg-popover text-popover-foreground rounded-md border text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                           <social.icon className="h-5 w-5" />
                           <span className="font-semibold">{social.label}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                           View my profile on {social.label}
                        </p>
                     </div>
                  )}
             </HoverCardContent>
             </HoverCard>
           ))}
        </motion.div>
      </div>
    </section>
  )
}
