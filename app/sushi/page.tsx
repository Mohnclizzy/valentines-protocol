"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SushiPage() {
  const router = useRouter()
  const [preferences, setPreferences] = useState("")

  const handleSubmit = () => {
    console.log("Sushi preferences:", preferences)
    // You can add logic here to save the preferences
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-pink-400">
          Sushi Preferences 
        </h1>
        <p className="text-lg text-gray-300">
          Tell me about your favorite sushi and preferences!
        </p>

        <textarea
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="e.g., I love spicy tuna rolls, salmon nigiri, cucumber rolls..."
          className="w-full h-48 p-4 rounded-xl text-black text-base"
        />

        <div className="space-y-3 pt-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-pink-500 hover:bg-pink-400 transition px-6 py-3 rounded-xl font-bold text-lg"
          >
            Save Preferences 
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full bg-gray-700 hover:bg-gray-600 transition px-6 py-3 rounded-xl"
          >
            ← Back
          </button>
        </div>
      </motion.div>
    </main>
  )
}
