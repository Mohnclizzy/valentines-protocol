"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CookForYouPage() {
  const router = useRouter()
  const [suggestions, setSuggestions] = useState("")

  const handleSubmit = () => {
    console.log("Cooking suggestions:", suggestions)
    // You can add logic here to save the suggestions
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-pink-400">
          Let Me Cook For You 👨‍🍳
        </h1>
        <p className="text-lg text-gray-300">
          Any suggestions for what I should make?
        </p>
        <p className="text-sm text-gray-400">
          (suggestions are not legally required to be selected)
        </p>

        <textarea
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
          placeholder="e.g., pasta, steak, something spicy, surprise me..."
          className="w-full h-48 p-4 rounded-xl text-black text-base bg-white"
        />

        <div className="space-y-3 pt-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-pink-500 hover:bg-pink-400 transition px-6 py-3 rounded-xl font-bold text-lg"
          >
            Submit Suggestions ❤️
          </button>
          <button
            onClick={() => router.push("/cooking")}
            className="w-full bg-gray-700 hover:bg-gray-600 transition px-6 py-3 rounded-xl"
          >
            ← Back
          </button>
        </div>
      </motion.div>
    </main>
  )
}
