"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
  year: string
  title: string
  subtitle: string
  description: string
}

export default function TimelineItem({ year, title, subtitle, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900"
      />

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-1">{year}</div>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</div>
        <div className="mt-2 text-gray-700 dark:text-gray-300">{description}</div>
      </div>
    </div>
  )
}
