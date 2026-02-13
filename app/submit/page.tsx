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
        className="fixed top-0 left-0 right-0 w-full py-16 px-4 text-center shadow-2xl z-50"
        style={{
          backgroundImage: "url('/IMG_4975.jpg')",
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white mt-80">
        <div className="flex-1 flex items-center justify-center">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 max-w-3xl px-6"
            >
              <h1 className="text-6xl font-bold text-pink-400">I LOVE YOU</h1>
              <div className="mt-8 text-center text-lg text-white leading-relaxed whitespace-pre-line max-w-2xl">
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
    </>
  )
}
