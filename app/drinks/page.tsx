"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFormData } from "@/app/context/FormContext"

export default function DrinksPage() {
  const router = useRouter()
  const { updateFormData } = useFormData()
  const [drinkPreference, setDrinkPreference] = useState("")
  const [submitted, setSubmitted] = useState(false)
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
        className="fixed top-0 left-0 right-0 w-full py-16 px-4 text-center shadow-2xl z-50"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/IMG_4975.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="flex-1 flex items-center justify-center w-full px-4">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-6 max-w-xl w-full"
            >
              <h1 className="text-4xl font-bold">But first...</h1>
              <p className="text-2xl text-pink-300">Would drinks interest you?</p>
              <p className="text-gray-300 text-lg">Tell me what you'd like to drink, or if you can't decide, that's okay - I'll have a bottle of wine for us</p>
              <textarea
                value={drinkPreference}
                onChange={(e) => setDrinkPreference(e.target.value)}
                placeholder=""
                className="w-full h-48 p-4 rounded-xl text-black text-base bg-white"
              />
              <button
                onClick={() => {
                  updateFormData({ drinkPreference })
                  setSubmitted(true)
                }}
                className="bg-pink-500 px-8 py-3 rounded-xl hover:bg-pink-400 transition font-bold text-lg"
              >
                Let's Move On
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl font-bold text-pink-400">Perfect!</h2>
              <p className="text-xl text-gray-300">Now let's pick what we're doing for dinner...</p>
              <button
                onClick={() => router.push("/menu")}
                className="bg-pink-500 px-8 py-3 rounded-xl hover:bg-pink-400 transition font-bold text-lg mt-6"
              >
                Choose Dinner
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </>
  )
}
