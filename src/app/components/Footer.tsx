import { motion } from "motion/react";
import { Zap, Twitter, Github, Linkedin, Youtube, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Tournaments", "Leaderboards", "API"],
    Company: ["About", "Blog", "Careers", "Press Kit", "Partners"],
    Resources: ["Documentation", "Community", "Support", "Status", "Changelog"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/10 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="relative">
                <Zap className="w-8 h-8 text-[#00d4ff]" fill="#00d4ff" />
                <div className="absolute inset-0 blur-xl bg-[#00d4ff]/50" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                Zed Society
              </span>
            </motion.div>

            <p className="text-gray-400 mb-6 max-w-sm">
              The next-generation cyber arena where students compete, learn, and dominate through real-world digital skill challenges.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00d4ff]/50 hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-[#00d4ff] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-400">Get the latest tournaments, challenges, and updates</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-black font-semibold rounded-lg whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2026 Zed Society. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
