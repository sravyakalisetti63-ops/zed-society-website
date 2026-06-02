import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Full Stack Developer",
      university: "Stanford University",
      text: "Zed Society transformed my learning journey. The competitive environment pushed me to master skills I never thought possible. Landed my dream job at Google!",
      rating: 5,
      color: "#00d4ff",
    },
    {
      name: "James Wilson",
      role: "AI Researcher",
      university: "MIT",
      text: "The AI League challenges are incredibly realistic. I went from zero to building production ML models in 6 months. The community support is unmatched.",
      rating: 5,
      color: "#a855f7",
    },
    {
      name: "Sophia Chen",
      role: "UX Designer",
      university: "Berkeley",
      text: "Winning the Design Battle championship was life-changing. The real-time feedback and mentorship helped me build a world-class portfolio.",
      rating: 5,
      color: "#06b6d4",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from students who leveled up their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 h-full hover:border-[#00d4ff]/50 transition-all">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16" style={{ color: testimonial.color }} />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current"
                        style={{ color: testimonial.color }}
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}88)`
                      }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.university}</div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: `0 0 40px ${testimonial.color}30` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
