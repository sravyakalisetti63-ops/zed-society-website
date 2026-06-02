import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Calendar, Users, Trophy, Clock } from "lucide-react";

export function Tournaments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tournaments = [
    {
      title: "Global AI Hackathon 2026",
      date: "June 15-17, 2026",
      prize: "$50,000",
      participants: "2,450",
      slots: "3,000",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      deadline: new Date("2026-06-15T00:00:00"),
    },
    {
      title: "Web3 Development Sprint",
      date: "June 22-24, 2026",
      prize: "$35,000",
      participants: "1,823",
      slots: "2,500",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      deadline: new Date("2026-06-22T00:00:00"),
    },
    {
      title: "Cybersecurity CTF Championship",
      date: "July 5-7, 2026",
      prize: "$75,000",
      participants: "3,127",
      slots: "5,000",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      deadline: new Date("2026-07-05T00:00:00"),
    },
  ];

  return (
    <section ref={ref} id="tournaments" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121f] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Upcoming Tournaments
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Compete for glory and massive prize pools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/50 transition-all">
                <div
                  className="h-48 relative"
                  style={{ background: tournament.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <span className="text-[#00d4ff] font-bold">{tournament.prize}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">{tournament.title}</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Calendar className="w-4 h-4 text-[#00d4ff]" />
                      <span>{tournament.date}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Users className="w-4 h-4 text-[#a855f7]" />
                      <span>{tournament.participants} / {tournament.slots} registered</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Trophy className="w-4 h-4 text-[#f59e0b]" />
                      <span>Prize Pool: {tournament.prize}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Registration</span>
                      <span className="text-[#00d4ff] font-semibold">
                        {Math.round((parseInt(tournament.participants.replace(',', '')) / parseInt(tournament.slots.replace(',', ''))) * 100)}% Full
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? {
                          width: `${(parseInt(tournament.participants.replace(',', '')) / parseInt(tournament.slots.replace(',', ''))) * 100}%`
                        } : {}}
                        transition={{ delay: index * 0.2 + 0.3, duration: 1 }}
                        className="h-full bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] rounded-full"
                        style={{ boxShadow: "0 0 10px rgba(0, 212, 255, 0.8)" }}
                      />
                    </div>
                  </div>

                  <CountdownTimer deadline={tournament.deadline} />

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-black font-bold rounded-lg"
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountdownTimer({ deadline }: { deadline: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex items-center gap-2 pt-2">
      <Clock className="w-4 h-4 text-[#00d4ff]" />
      <div className="flex gap-2 text-sm">
        <span className="text-white font-bold">{timeLeft.days}d</span>
        <span className="text-gray-400">:</span>
        <span className="text-white font-bold">{timeLeft.hours}h</span>
        <span className="text-gray-400">:</span>
        <span className="text-white font-bold">{timeLeft.minutes}m</span>
        <span className="text-gray-400">:</span>
        <span className="text-white font-bold">{timeLeft.seconds}s</span>
      </div>
    </div>
  );
}
