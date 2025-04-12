"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
}

export default function SkillsSection() {
  const [animateSkills, setAnimateSkills] = useState(true)

  const technicalSkills: Skill[] = [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "Front-End Web Development", level: 90 },
    { name: "JDBC", level: 70 },
    { name: "Data Visualization", level: 75 },
  ]

  const softSkills: Skill[] = [
    { name: "Team Leadership", level: 85 },
    { name: "Task Management", level: 90 },
    { name: "Communication Skills", level: 80 },
    { name: "Creative Problem Solving", level: 95 },
    { name: "Presentation Skills", level: 85 },
    { name: "Agile", level: 75 },
  ]

  const otherSkills: Skill[] = [
    { name: "AI", level: 70 },
    { name: "ML", level: 65 },
    { name: "Networking", level: 75 },
    { name: "Github", level: 90 },
  ]

  return (
    <Tabs defaultValue="technical" className="w-full" onValueChange={() => setAnimateSkills(true)}>
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="technical">Technical</TabsTrigger>
        <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>

      <TabsContent value="technical">
        <div className="space-y-6">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <motion.div
                initial={animateSkills ? { width: 0 } : { width: `${skill.level}%` }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                onAnimationComplete={() => setAnimateSkills(false)}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="soft">
        <div className="space-y-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <motion.div
                initial={animateSkills ? { width: 0 } : { width: `${skill.level}%` }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                onAnimationComplete={() => setAnimateSkills(false)}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="other">
        <div className="space-y-6">
          {otherSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <motion.div
                initial={animateSkills ? { width: 0 } : { width: `${skill.level}%` }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                onAnimationComplete={() => setAnimateSkills(false)}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
