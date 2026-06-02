import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Check, Zap, Crown, Sparkles } from "lucide-react";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for beginners exploring the arena",
      features: [
        "Access to public arenas",
        "Basic skill challenges",
        "Community forums",
        "Monthly tournaments",
        "Profile & stats",
      ],
      color: "#06b6d4",
      popular: false,
    },
    {
      name: "Pro",
      icon: Crown,
      monthlyPrice: 29,
      annualPrice: 290,
      description: "For serious competitors climbing the ranks",
      features: [
        "Everything in Starter",
        "Premium arenas & challenges",
        "1-on-1 mentorship sessions",
        "Exclusive tournaments",
        "Priority support",
        "Advanced analytics",
        "Custom profile badges",
      ],
      color: "#a855f7",
      popular: true,
    },
    {
      name: "Elite",
      icon: Sparkles,
      monthlyPrice: 99,
      annualPrice: 990,
      description: "Maximum advantage for champions",
      features: [
        "Everything in Pro",
        "Private coaching sessions",
        "Early access to new arenas",
        "Championship qualification",
        "Team collaboration tools",
        "API access",
        "White-glove support",
        "Exclusive swag & merch",
      ],
      color: "#00d4ff",
      popular: false,
    },
  ];

  return (
    <section ref={ref} id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121f] to-[#0a0a0f]" />

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Unlock your full potential with the right plan
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 p-2 rounded-full bg-white/5 border border-white/10"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual
                  ? "bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-black font-semibold"
                  : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isAnnual
                  ? "bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-black font-semibold"
                  : "text-gray-400"
              }`}
            >
              Annual
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-[#10b981] text-white">
                Save 17%
              </span>
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-black font-semibold text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative rounded-2xl overflow-hidden backdrop-blur-sm h-full transition-all ${
                  plan.popular
                    ? "bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#00d4ff]/50 scale-105"
                    : "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}10)`
                      }}
                    >
                      <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>

                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    </div>
                    {isAnnual && plan.annualPrice > 0 && (
                      <div className="text-sm text-gray-500 mt-1">
                        ${(plan.annualPrice / 12).toFixed(2)}/month billed annually
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: `0 0 30px ${plan.color}50`
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-black"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.monthlyPrice === 0 ? "Get Started Free" : "Start Trial"}
                  </motion.button>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="mt-0.5 p-1 rounded-full"
                          style={{ backgroundColor: `${plan.color}20` }}
                        >
                          <Check className="w-4 h-4" style={{ color: plan.color }} />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {plan.popular && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
                    style={{
                      boxShadow: `0 0 60px ${plan.color}40`
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
