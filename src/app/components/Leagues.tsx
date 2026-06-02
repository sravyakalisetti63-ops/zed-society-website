import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code, Brain, Palette, Shield, Rocket, TrendingUp } from "lucide-react";

export function Leagues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const leagues = [
    {
      icon: Palette,
      title: "UI/UX League",
      description: "Master design thinking and user experience",
      participants: "12.5K",
      color: "#00d4ff",
      progress: 78,
    },
    {
      icon: Brain,
      title: "AI League",
      description: "Build intelligent systems and ML models",
      participants: "8.3K",
      color: "#a855f7",
      progress: 65,
    },
    {
      icon: Code,
      title: "Web Dev League",
      description: "Create stunning full-stack applications",
      participants: "15.2K",
      color: "#06b6d4",
      progress: 82,
    },
    {
      icon: Shield,
      title: "Cybersecurity League",
      description: "Defend systems and hunt vulnerabilities",
      participants: "6.7K",
      color: "#f59e0b",
      progress: 71,
    },
    {
      icon: Rocket,
      title: "Design Battles",
      description: "Compete in rapid design sprints",
      participants: "9.1K",
      color: "#ec4899",
      progress: 88,
    },
    {
      icon: TrendingUp,
      title: "Startup Pitch Arena",
      description: "Present ideas to real investors",
      participants: "4.5K",
      color: "#10b981",
      progress: 54,
    },
  ];

  return (
    <section ref={ref} id="arena" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Cyber Skill Leagues
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your arena and compete with the best minds globally
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.map((league, index) => (
            <motion.div
              key={league.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/50 transition-all h-full">
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? 5 : 0,
                    rotateX: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                      <league.icon className="w-6 h-6" style={{ color: league.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{league.title}</h3>
                      <p className="text-sm text-gray-400">{league.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Active Players</span>
                      <span className="text-white font-semibold">{league.participants}</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-400">Season Progress</span>
                        <span className="text-white font-semibold">{league.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${league.progress}%` } : {}}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${league.color}, ${league.color}dd)`,
                            boxShadow: `0 0 10px ${league.color}80`
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-lg font-semibold text-white border transition-all"
                    style={{
                      borderColor: `${league.color}40`,
                      background: `${league.color}10`,
                    }}
                  >
                    Enter Arena
                  </motion.button>
                </motion.div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: `0 0 40px ${league.color}30` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
