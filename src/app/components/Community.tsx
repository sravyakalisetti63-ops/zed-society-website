import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, Users, TrendingUp, Globe } from "lucide-react";

export function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const discussions = [
    {
      title: "Best practices for AI model training",
      author: "Sarah Chen",
      replies: 127,
      category: "AI League",
      color: "#a855f7",
    },
    {
      title: "How to optimize React performance",
      author: "Mike Johnson",
      replies: 89,
      category: "Web Dev",
      color: "#06b6d4",
    },
    {
      title: "Cybersecurity CTF writeup - June",
      author: "Alex Park",
      replies: 156,
      category: "Security",
      color: "#f59e0b",
    },
  ];

  return (
    <section ref={ref} id="community" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121f] to-[#0a0a0f]" />

      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with thousands of competitive learners worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#06b6d4]/20">
                  <MessageCircle className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Active Discussions</h3>
                  <p className="text-gray-400">15.2K conversations today</p>
                </div>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d4ff]/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold group-hover:text-[#00d4ff] transition-colors">
                        {discussion.title}
                      </h4>
                      <span
                        className="px-2 py-1 rounded text-xs font-semibold"
                        style={{ backgroundColor: `${discussion.color}20`, color: discussion.color }}
                      >
                        {discussion.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>by {discussion.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {discussion.replies} replies
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#ec4899]/20">
                  <Users className="w-8 h-8 text-[#a855f7]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Online Now</h3>
                  <p className="text-gray-400">
                    <span className="inline-block w-2 h-2 bg-[#10b981] rounded-full mr-2 animate-pulse" />
                    8,432 members active
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Reach", value: "120+ Countries" },
                  { icon: TrendingUp, label: "Growth", value: "+45% MoM" },
                  { icon: MessageCircle, label: "Messages", value: "2.5M/month" },
                  { icon: Users, label: "Active", value: "50K+ Daily" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <stat.icon className="w-5 h-5 text-[#00d4ff] mb-2" />
                    <div className="text-white font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Discord</h3>
              <p className="text-gray-400 mb-6">
                Connect with mentors, teammates, and competitors in real-time
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-black font-bold rounded-lg"
              >
                Join Discord Server
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
