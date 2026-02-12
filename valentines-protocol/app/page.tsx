"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [started, setStarted] = useState(false)
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
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      {!started ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold">
            Will you be my Valentines?
          </h1>
          <p className="text-pink-400">Type "yes" to enter.</p>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (answer.trim().toLowerCase() === "yes") setStarted(true)
                else alert("I KNOW I KNOW IM SORRY IM LATE BUT YOURE MY VALENTINES FOR THE REST OF OUR LIFE")
              }
            }}
            className="mx-auto mt-2 w-48 p-2 rounded text-black bg-white"
            placeholder="yes"
          />
          <div>
            <button
              onClick={() => {
                if (answer.trim().toLowerCase() === "yes") setStarted(true)
                else alert("I KNOW I KNOW IM SORRY IM LATE BUT YOURE MY VALENTINES FOR THE REST OF OUR LIFE")
              }}
              className="bg-pink-500 px-6 py-3 rounded-xl hover:bg-pink-400 transition"
            >
              SUBMIT
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold text-pink-400">
            Welcome, Agent Girlfriend
          </h2>
          <div className="text-lg text-gray-300 space-y-2">
            <p>Only {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, and {countdown.seconds} seconds until our 1 year anniversary (March 1st)! ❤️</p>
          </div>
          <p>
            Make yo pick finnashawty
          </p>
          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => router.push("/sushi")} className="bg-pink-500 hover:bg-pink-400 transition px-6 py-4 rounded-xl font-bold text-lg">
              Sushi 🍣
            </button>
            <button onClick={() => router.push("/cooking")} className="bg-pink-500 hover:bg-pink-400 transition px-6 py-4 rounded-xl font-bold text-lg">
              Cooking Together 👨‍🍳
            </button>
            <button onClick={() => router.push("/pho")} className="bg-pink-500 hover:bg-pink-400 transition px-6 py-4 rounded-xl font-bold text-lg">
              Pho 🍜
            </button>
          </div>
        </motion.div>
      )}
    </main>
  )
}
