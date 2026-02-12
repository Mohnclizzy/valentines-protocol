"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function CookingPage() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl font-bold text-pink-400">
          Cooking 👨‍🍳
        </h1>
        <p className="text-lg text-gray-300">
          Which sounds better to you?
        </p>

        <div className="grid grid-cols-2 gap-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => {
              console.log("Selected: Let me cook for her")
              // Add your logic here
            }}
            className="bg-pink-500 hover:bg-pink-400 transition px-8 py-8 rounded-xl text-xl font-bold transform hover:scale-105"
          >
            <span className="text-2xl block mb-2">👨‍🍳</span>
            Let Me Cook For You
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => {
              console.log("Selected: Us cooking together")
              // Add your logic here
            }}
            className="bg-pink-500 hover:bg-pink-400 transition px-8 py-8 rounded-xl text-xl font-bold transform hover:scale-105"
          >
            <span className="text-2xl block mb-2">👩‍🍳👨‍🍳</span>
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
  )
}
