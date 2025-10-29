'use client'
import { motion } from 'framer-motion'

export default function ToolCard({ tool, onUse, disabled=false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-4 backglass rounded-2xl flex items-center justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold capital">{tool.name}</h3>
        <p className="text-sm text-gray-300 mt-1">{tool.description}</p>
        <div className="mt-3 text-xs text-gray-400">Cost: <span className="font-medium">{tool.cost} credit{tool.cost>1?'s':''}</span></div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <button
          onClick={onUse}
          disabled={disabled}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:opacity-60"
        >
          Use
        </button>
        <button className="text-xs text-gray-300">Preview</button>
      </div>
    </motion.div>
  )
}
