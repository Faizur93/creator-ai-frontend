'use client'
import { motion } from 'framer-motion'

export default function Header({ credits = 0 }) {
  return (
    <header className="flex items-center justify-between p-4 backglass rounded-2xl shadow-sm">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
          C
        </div>
        <div>
          <div className="text-lg font-semibold">Creator<span className="text-indigo-300">AI</span></div>
          <div className="text-xs text-gray-300">AI tools for creators</div>
        </div>
      </motion.div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 1v22" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M5 7h14" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div className="text-sm font-medium">{credits}</div>
        </div>

        <div className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center text-sm">U</div>
      </div>
    </header>
  )
          }
