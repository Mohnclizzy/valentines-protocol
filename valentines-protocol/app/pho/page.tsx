"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function PhoPage() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-pink-400">
          Pho 🍜
        </h1>
        <p className="text-lg text-gray-300">
          Coming soon...
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-gray-700 hover:bg-gray-600 transition px-6 py-3 rounded-xl"
        >
          ← Back
        </button>
      </motion.div>
    </main>
  )
}
