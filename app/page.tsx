"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [answer, setAnswer] = useState("")
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const router = useRouter()

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const target = new Date(2026, 2, 1) // March 1st, 2026
      const diff = target.getTime() - now.getTime()

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        setCountdown({ days, hours, minutes, seconds })
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
        className="fixed top-0 left-0 right-0 w-full py-4 sm:py-8 md:py-16 px-4 text-center shadow-2xl z-50"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/IMG_4975.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed'
        }}
      >
        <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-6 font-bold">YOU KNOW WHAT THE FAHHHH GOING ON!!</p>
        <div className="flex justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
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
        <p className="text-pink-100 text-lg mt-6 font-bold">March 1st will be here soon!</p>
      </motion.div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white mt-24 sm:mt-40 md:mt-80">
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl font-bold">Will you be my Valentines?</h1>
            <p className="text-pink-400">Type "yes" to enter.</p>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (answer.trim().toLowerCase() === "yes") router.push("/itinerary")
                  else alert("I KNOW I KNOW IM SORRY IM LATE BUT YOURE MY VALENTINES FOR THE REST OF OUR LIFE")
                }
              }}
              className="mx-auto mt-2 w-48 p-2 rounded text-black bg-white"
              placeholder="yes"
            />
            <div>
              <button
                onClick={() => {
                  if (answer.trim().toLowerCase() === "yes") router.push("/itinerary")
                  else alert("I KNOW I KNOW IM SORRY IM LATE BUT YOURE MY VALENTINES FOR THE REST OF OUR LIFE")
                }}
                className="bg-pink-500 px-6 py-3 rounded-xl hover:bg-pink-400 transition"
              >
                SUBMIT
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
