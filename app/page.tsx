"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [started, setStarted] = useState(false)

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
            ACCESS SYSTEM 🔐
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
            Please input your Valentine preferences for maximum happiness optimization.
          </p>
          <div className="space-y-4">
            <input
              className="w-64 p-2 rounded text-black"
              placeholder="Favorite flowers 🌸"
            />
            <input
              className="w-64 p-2 rounded text-black"
              placeholder="Favorite chocolate 🍫"
            />
            <input
              className="w-64 p-2 rounded text-black"
              placeholder="Secret wish 👀"
            />
          </div>
          <button className="bg-pink-500 px-6 py-3 rounded-xl hover:bg-pink-400 transition">
            TRANSMIT DATA ❤️
          </button>
        </motion.div>
      )}
    </main>
  )
}
