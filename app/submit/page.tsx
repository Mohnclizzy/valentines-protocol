"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useFormData } from "@/app/context/FormContext"

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1471727518544429088/pwy-1DncXnQkMLzLM7cFurt1dgnyaVZjqRDRamAyLlfdLym1brXXyLyJID4KakK0FTIG"

export default function SubmitPage() {
  const { formData } = useFormData()
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [submitted, setSubmitted] = useState(false)

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

  const sendToDiscord = async () => {
    const message = {
      embeds: [
        {
          title: "Valentine's Day Response Received!",
          color: 0xec4899,
          fields: [
            {
              name: "Valentines Question",
              value: formData.valentinesAnswer || "Not provided",
              inline: false
            },
            {
              name: "Drink Preference",
              value: formData.drinkPreference || "Not provided",
              inline: false
            },
            {
              name: "Dinner Choice",
              value: formData.dinnerChoice || "Not provided",
              inline: true
            },
            {
              name: "Dinner Details",
              value: formData.dinnerDetails || "Not provided",
              inline: false
            },
            {
              name: "Sweet Treat Preference",
              value: formData.sweetTreatPreference || "Not provided",
              inline: false
            }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    }

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message)
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error sending to Discord:", error)
      setSubmitted(true)
    }
  }

  useEffect(() => {
    sendToDiscord()
  }, [])

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
      <main className="flex flex-col items-center bg-black text-white mt-20 sm:mt-28 md:mt-40 px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12">
        <div className="w-full max-w-3xl space-y-4 sm:space-y-6 md:space-y-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 max-w-3xl px-6"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-pink-400 mb-4">I LOVE YOU</h1>
              <div className="mt-6 sm:mt-8 text-center text-base sm:text-lg md:text-xl text-white leading-relaxed whitespace-pre-line max-w-2xl mx-auto px-2">
                {`you got this way of leaning in
like you're listening to the parts of me
i barely say out loud,
and maybe that's what belonging is
not a home,
just two nervous hearts
agreeing to be gentle.

I used to search for softer places in the world.
turns out
they were growing in your hands
the whole time
folded up like old letters i never sent
Our hands clasp, the sanctity of holiness
All in your ribcage, all in your veins,
And when our sweat mix to be the same
I know we must be alive and sane`}
              </div>
              <button
                onClick={() => window.location.href = "/"}
                className="bg-pink-500 px-8 py-3 rounded-xl hover:bg-pink-400 transition font-bold text-lg mt-6"
              >
                Start Over
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <p className="text-2xl text-pink-300">Saving your responses...</p>
            </motion.div>
          )}
        </div>
      </main>
      <img src="/IMG_4975.jpg" alt="cat" className="fixed bottom-20 right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover opacity-90 shadow-lg" />
    </>
  )
}
