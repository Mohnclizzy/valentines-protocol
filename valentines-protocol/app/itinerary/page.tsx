"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ItineraryPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const target = new Date(2026, 2, 1) // March 1st, 2026 - Our Anniversary
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
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-pink-600 to-pink-400 py-16 px-4 text-center shadow-2xl z-50"
      >
        <p className="text-2xl text-pink-100 mb-6 font-bold">YOU KNOW WHAT THE FAHHHH GOING ON!!</p>
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
        <p className="text-pink-100 text-lg mt-6 font-bold">March 1st will be here soon!</p>
      </motion.div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white mt-80">
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-pink-400">
              Valentine's Day
            </h1>
            <p className="text-2xl text-gray-200">
              Here's what I have planned for us
            </p>

            <div className="space-y-6 text-left bg-gray-900 p-8 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="border-l-4 border-pink-500 pl-6"
              >
                <p className="text-xl font-bold text-pink-300">Breakfast</p>
                <p className="text-lg text-gray-300">Kerbey Lane Cafe</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-pink-500 pl-6"
              >
                <p className="text-xl font-bold text-pink-300">da arts</p>
                <p className="text-lg text-gray-300">Blanton Art Museum - once we're satisfied with breakfast</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="border-l-4 border-pink-500 pl-6"
              >
                <p className="text-xl font-bold text-pink-300">Relax & Recharge</p>
                <p className="text-lg text-gray-300">A peaceful nap to recharge</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="border-l-4 border-pink-500 pl-6"
              >
                <p className="text-xl font-bold text-pink-300">Adventure</p>
                <p className="text-lg text-gray-300">Spontaneous fun - wherever the moment takes us</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="border-l-4 border-pink-500 pl-6"
              >
                <p className="text-xl font-bold text-pink-300">Dinner</p>
                <p className="text-lg text-gray-300">You'll get to choose what we do for dinner</p>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => router.push("/drinks")}
              className="bg-pink-500 hover:bg-pink-400 transition px-8 py-4 rounded-xl font-bold text-xl mt-8"
            >
              Pick Dinner
            </motion.button>
          </motion.div>
        </div>
      </main>
    </>
  )
}
