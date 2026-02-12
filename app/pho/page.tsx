"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PhoPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const target = new Date(2026, 2, 1)
      const diff = target.getTime() - now.getTime()
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        })
      }
    }
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-r from-pink-600 to-pink-400 py-16 px-4 text-center shadow-2xl"
      >
        <p className="text-2xl text-pink-100 mb-6 font-bold">💕 Time until our anniversary 💕</p>
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="text-center">
            <div className="text-8xl font-black text-white">{countdown.days}</div>
            <div className="text-2xl text-pink-100 font-semibold mt-2">Days</div>
          </div>
          <div className="text-center">
            <div className="text-8xl font-black text-white">{countdown.hours}</div>
            <div className="text-2xl text-pink-100 font-semibold mt-2">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-8xl font-black text-white">{countdown.minutes}</div>
            <div className="text-2xl text-pink-100 font-semibold mt-2">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-8xl font-black text-white">{countdown.seconds}</div>
            <div className="text-2xl text-pink-100 font-semibold mt-2">Seconds</div>
          </div>
        </div>
        <p className="text-pink-100 text-lg mt-6 font-bold">March 1st will be here soon! 🎉</p>
      </motion.div>
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold text-pink-400">
            Pho 🍜
          </h1>
          <p className="text-lg text-gray-300">
            Coming soon...
          </p>

          <button
            onClick={() => router.push("/")}
            className="bg-gray-700 hover:bg-gray-600 transition px-6 py-3 rounded-xl"
          >
            ← Back
          </button>
        </motion.div>
      </div>
    </main>
  )
}
