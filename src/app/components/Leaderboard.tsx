import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Trophy, TrendingUp, Search } from "lucide-react";

export function Leaderboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [searchTerm, setSearchTerm] = useState("");

  const players = [
    { rank: 1, name: "Alex Chen", xp: "125,430", university: "MIT", badge: "🥇", trend: "+12" },
    { rank: 2, name: "Sarah Kim", xp: "118,920", university: "Stanford", badge: "🥈", trend: "+8" },
    { rank: 3, name: "Marcus Johnson", xp: "112,340", university: "Berkeley", badge: "🥉", trend: "+15" },
    { rank: 4, name: "Emma Wilson", xp: "108,750", university: "Harvard", badge: "💎", trend: "+5" },
    { rank: 5, name: "David Park", xp: "102,890", university: "CMU", badge: "💎", trend: "+3" },
    { rank: 6, name: "Lisa Zhang", xp: "98,560", university: "Caltech", badge: "💎", trend: "+7" },
    { rank: 7, name: "Ryan O'Neill", xp: "95,230", university: "Oxford", badge: "⭐", trend: "+4" },
    { rank: 8, name: "Maya Patel", xp: "91,780", university: "Cambridge", badge: "⭐", trend: "+6" },
  ];

  return (
    <section ref={ref} id="leaderboards" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Global Leaderboard
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track the top performers across all arenas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search players or universities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 transition-all"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Player</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">University</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">XP Points</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => (
                    <motion.tr
                      key={player.rank}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{player.badge}</span>
                          <span className="text-white font-bold">#{player.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center text-white font-bold">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-white font-semibold">{player.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-400">{player.university}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-[#f59e0b]" />
                          <span className="text-white font-bold">{player.xp}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-[#10b981]">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-semibold">{player.trend}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center"
          >
            <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-[#00d4ff]/50 transition-all">
              View Full Rankings
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
