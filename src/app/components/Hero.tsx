import { motion } from "motion/react";
import { Play, ArrowDown, Trophy, Users, Zap } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticlesBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-gray-300">Now Live: Season 3 Championships</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent"
            >
              The Future Of 
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#00d4ff] bg-clip-text text-transparent mt-2"
            >
              Cyber Combination
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            The next-generation cyber arena where students battle through real-world digital skill challenges and rise through global rankings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-black font-bold rounded-xl overflow-hidden shadow-2xl shadow-[#00d4ff]/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join the Arena
                <Trophy className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#a855f7] text-white font-semibold rounded-xl hover:bg-[#a855f7]/10 transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Trailer
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, label: "50K+ Players", color: "#00d4ff" },
              { icon: Trophy, label: "500+ Competitions", color: "#a855f7" },
              { icon: Zap, label: "10M+ Skill Points", color: "#06b6d4" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/50 transition-all">
                  <stat.icon className="w-8 h-8 mb-3 mx-auto" style={{ color: stat.color }} />
                  <div className="text-2xl font-bold text-white">{stat.label.split(' ')[0]}</div>
                  <div className="text-sm text-gray-400">{stat.label.split(' ').slice(1).join(' ')}</div>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: `0 0 30px ${stat.color}40` }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-[#00d4ff]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
