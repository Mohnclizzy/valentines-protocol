"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [started, setStarted] = useState(false)
  const router = useRouter()

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      {!started ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold">
            Initializing Valentine Optimization Protocol...
          </h1>
          <p className="text-pink-400">
            Scanning emotional variables...
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-pink-500 px-6 py-3 rounded-xl hover:bg-pink-400 transition"
          >
            ACCESS SYSTEM
          </button>
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
