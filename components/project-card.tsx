"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectCardProps {
  title: string
  teamSize: number
  skills: string[]
  description: string
  points: string[]
}

export default function ProjectCard({ title, teamSize, skills, description, points }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            <span>Team: {teamSize}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex items-center justify-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              Show More
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
