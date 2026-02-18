import { techStack } from "@/lib/data"


export function TechStack() {
  return (
    <section className="w-full border-y bg-background py-8">
      <div className="container mx-auto px-4 md:px-6">       
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-8">
                {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
            <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-8" aria-hidden="true">
                {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
