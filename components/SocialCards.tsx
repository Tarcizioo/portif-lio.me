"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Link as LinkIcon, Users, Building2 } from "lucide-react"
import Image from "next/image"

export function GithubCard() {
  return (
    <div className="flex flex-col gap-3 p-4 bg-[#0d1117] text-white rounded-md border border-[#30363d] font-sans w-full h-full">
      <div className="flex gap-3 items-start">
        <Avatar className="w-12 h-12 border border-[#30363d]">
          <AvatarImage src="/images/real-profile.png" alt="Tarcizio" />
          <AvatarFallback>TP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold text-base leading-tight text-[#c9d1d9] hover:text-[#58a6ff] cursor-pointer">
            Tarcizio Neto
          </span>
          <span className="text-[#8b949e] text-sm font-light">Tarcizioo</span>
        </div>
      </div>
      
      <div className="text-sm text-[#c9d1d9] leading-snug">
        Computer Engineering Student (5th Sem). 🎨 Front-end Enthusiast focused on UI/Design & 3D Web.
      </div>

      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-center gap-2 text-xs text-[#8b949e]">
           <Users className="w-3.5 h-3.5" />
           <span><strong className="text-[#c9d1d9] font-semibold">0</strong> followers</span>
           <span>·</span>
           <span><strong className="text-[#c9d1d9] font-semibold">1</strong> following</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#8b949e]">
           <MapPin className="w-3.5 h-3.5" />
           <span>Sorocaba, Brazil</span>
        </div>
      </div>
    </div>
  )
}

export function LinkedinCard() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#1b1f23] rounded-md overflow-hidden border border-border w-full h-full relative">
       {/* Cover Image Simulation */}
       <div className="h-16 bg-[#a0b4b7] w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-100 opacity-80" />
       </div>

       <div className="px-3 pb-3 relative">
          {/* Avatar overlapping cover */}
          <div className="-mt-8 mb-2">
             <Avatar className="w-16 h-16 border-2 border-white dark:border-[#1b1f23]">
                <AvatarImage src="/images/real-profile.png" alt="Tarcizio" />
                <AvatarFallback>TP</AvatarFallback>
             </Avatar>
          </div>

          <div className="flex flex-col items-start gap-0.5">
             <div className="flex items-center gap-1">
                <span className="font-semibold text-base text-black dark:text-white leading-tight">
                   Tarcizio Pereira Neto
                </span>
             </div>
             
             <span className="text-xs text-muted-foreground leading-snug">
                Desenvolvedor Front-end | UX/UI Designer
             </span>

             <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
                <span>Sorocaba, São Paulo</span>
                <span>·</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Contact info</span>
             </div>

             <div className="flex items-center gap-2 mt-2 w-full">
                <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-sm w-full border border-border/50">
                    <div className="w-4 h-4 rounded-full overflow-hidden bg-white shrink-0">
                       <Image src="/images/facens-logo.png" width={16} height={16} alt="Facens" className="object-cover" />
                    </div>
                    <span className="text-[10px] font-medium truncate dark:text-gray-300">
                       Centro Universitário Facens
                    </span>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
