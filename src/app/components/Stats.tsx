import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: 50000, suffix: "+", label: "Players" },
    { value: 120, suffix: "+", label: "Universities" },
    { value: 10, suffix: "M+", label: "Skill Points Earned" },
    { value: 500, suffix: "+", label: "Competitions Hosted" },
  ];

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121f] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/50 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                    <CountUp end={stat.value} isInView={isInView} />
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "0 0 40px rgba(0, 212, 255, 0.2)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, isInView }: { end: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return <>{count.toLocaleString()}</>;
}
