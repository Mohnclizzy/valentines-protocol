"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFormData } from "@/app/context/FormContext"

export default function PicnicPage() {
  const router = useRouter()
  const { updateFormData } = useFormData()
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [preferences, setPreferences] = useState("")

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

  const handleSubmit = () => {
    console.log("Picnic preferences:", preferences)
    updateFormData({
      dinnerChoice: "Picnic",
      dinnerDetails: preferences
    })
    router.push("/picnic/sweet-treats")
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 w-full py-1 sm:py-3 md:py-8 px-4 text-center shadow-2xl z-50 bg-gray-900"
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
      <img
        src="/IMG_4975.jpg"
        alt="cat"
        className="absolute bottom-20 right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover opacity-90 shadow-lg"
      />
      <main className="flex min-h-screen flex-col items-center bg-black text-white mt-40 sm:mt-56 md:mt-80 px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 pb-20 sm:pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 sm:space-y-8 md:space-y-10 max-w-2xl w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-400 mt-2">
              Picnic Must-Haves
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              What are the must-have items or activities for our picnic?
            </p>

            <textarea
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder=""
              className="w-full h-40 sm:h-48 md:h-64 p-4 rounded-xl text-black text-base bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-pink-500 hover:bg-pink-400 transition px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-bold text-base sm:text-lg"
            >
              Save Preferences
            </button>
            <button
              onClick={() => router.push("/")}
              className="w-full bg-gray-700 hover:bg-gray-600 transition px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl text-base sm:text-lg mb-4"
            >
              ← Back
            </button>
          </motion.div>
      </main>
    </>
  )
}
