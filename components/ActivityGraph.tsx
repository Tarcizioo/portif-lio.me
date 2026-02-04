"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import type { Activity } from "react-activity-calendar"

const ActivityCalendar = dynamic(() => import("react-activity-calendar").then((mod: any) => mod.ActivityCalendar), { ssr: false }) as any

// Generate last 365 days of mock data
const generateData = (): Activity[] => {
  const data: Activity[] = []
  const now = new Date()
  for (let i = 365; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    // Random activity level 0-4, weighted towards 0
    const count = Math.random() > 0.4 ? Math.floor(Math.random() * 5) * 2 : 0
    // Level is count mapped to 0-4 roughly
    const level = count === 0 ? 0 : count < 4 ? 1 : count < 6 ? 2 : count < 8 ? 3 : 4
    
    data.push({
      date: date.toISOString().split("T")[0],
      count,
      level: level as 0 | 1 | 2 | 3 | 4,
    })
  }
  return data
}

export default function ActivityGraph() {
  const [data, setData] = useState<Activity[]>([])
  
  useEffect(() => {
    setData(generateData())
  }, [])
  
  // Custom theme colors for the graph
  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    // Using a monochrome/gray scale for dark mode per user preference "Minimalist/Polished"
    // Or green if we want "Github-like". User said "simule o Github Contribution Graph".
    // I will stick to Github colors but adjusted for dark mode if needed.
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  }

  return (
    <motion.section 
      className="mb-24 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Activity</h2>
        <span className="text-sm text-muted-foreground">Last 365 days</span>
      </div>
      <div className="w-full overflow-x-auto rounded-xl border border-border bg-card/50 p-6 glass">
        <div className="min-w-[600px] flex justify-center">
            <ActivityCalendar
              data={data}
              theme={theme}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              hideColorLegend={false}
              hideMonthLabels={false}
              showWeekdayLabels
            />
        </div>
      </div>
    </motion.section>
  )
}
