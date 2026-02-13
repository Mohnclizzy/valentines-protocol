"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CookingPage() {
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
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 w-full py-1 sm:py-3 md:py-8 px-4 text-center shadow-2xl z-50"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/IMG_4975.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed'
        }}
      >
        <p className="text-xs sm:text-lg md:text-2xl text-pink-100 mb-3 sm:mb-4 md:mb-6 font-bold">YOU KNOW WHAT THE FAHHHH GOING ON!!</p>
        <div className="flex justify-center gap-2 sm:gap-6 md:gap-12 flex-wrap">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-8xl font-black text-white">{countdown.days}</div>
            <div className="text-base sm:text-lg md:text-2xl text-pink-100 font-semibold mt-2">Days</div>
          </div>
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-8xl font-black text-white">{countdown.hours}</div>
            <div className="text-base sm:text-lg md:text-2xl text-pink-100 font-semibold mt-2">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-8xl font-black text-white">{countdown.minutes}</div>
            <div className="text-base sm:text-lg md:text-2xl text-pink-100 font-semibold mt-2">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-8xl font-black text-white">{countdown.seconds}</div>
            <div className="text-base sm:text-lg md:text-2xl text-pink-100 font-semibold mt-2">Seconds</div>
          </div>
        </div>
        <p className="text-pink-100 text-xs sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-6 font-bold">March 1st will be here soon!</p>
      </motion.div>
      <main className="flex flex-col items-center bg-black text-white mt-20 sm:mt-28 md:mt-40 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8 w-full max-w-2xl"
        >
          <h1 className="text-4xl font-bold text-pink-400">
            Cooking
          </h1>
          <p className="text-lg text-gray-300">
            Which sounds better to you?
          </p>

          <div className="grid grid-cols-2 gap-6">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => router.push("/cook-for-you")}
              className="bg-pink-500 hover:bg-pink-400 transition px-8 py-8 rounded-xl text-xl font-bold transform hover:scale-105"
            >
              <span className="text-2xl block mb-2"></span>
              Let Me Cook For You
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => router.push("/cooking-together")}
              className="bg-pink-500 hover:bg-pink-400 transition px-8 py-8 rounded-xl text-xl font-bold transform hover:scale-105"
            >
              <span className="text-2xl block mb-2"></span>
              Cook Together
            </motion.button>
          </div>

          <button
            onClick={() => router.push("/")}
            className="mt-8 bg-gray-700 hover:bg-gray-600 transition px-6 py-3 rounded-xl text-sm"
          >
            ← Back
          </button>
        </motion.div>
      </main>
    </>
  )
}
