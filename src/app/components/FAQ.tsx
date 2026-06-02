import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Zed Society?",
      answer: "Zed Society is a competitive learning platform where students battle through real-world digital skill challenges, compete in tournaments, and climb global rankings across multiple disciplines including AI, web development, design, and cybersecurity.",
    },
    {
      question: "How do tournaments work?",
      answer: "Tournaments are time-limited competitive events where participants solve challenges to earn points. Rankings are based on accuracy, speed, and creativity. Winners receive prizes, exclusive badges, and recognition on our global leaderboard.",
    },
    {
      question: "Can I compete as a team?",
      answer: "Yes! Pro and Elite members can form teams, collaborate on challenges, and compete in team-based tournaments. Team features include shared workspaces, voice chat, and collaborative coding environments.",
    },
    {
      question: "What skill levels are supported?",
      answer: "We support all skill levels from complete beginners to advanced practitioners. Our adaptive challenge system ensures you're always working on problems that match your current abilities while pushing you to grow.",
    },
    {
      question: "How are rankings calculated?",
      answer: "Rankings are based on XP (Experience Points) earned through completing challenges, tournament placements, community contributions, and consistency. Our algorithm factors in difficulty, speed, and solution quality.",
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "You can cancel anytime. You'll retain access to premium features until the end of your billing period. Your progress, achievements, and profile remain saved, and you can reactivate at any time.",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Zed Society
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border backdrop-blur-sm transition-all ${
                  openIndex === index
                    ? "border-[#00d4ff]/50"
                    : "border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-[#00d4ff]/50 transition-all"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
