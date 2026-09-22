import { Link } from "react-router-dom";
import { ArrowRight, Mail, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero({ t, lang, settings }) {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setRoleIdx((i) => (i + 1) % t.hero.roles.length), 2600);
    return () => clearInterval(iv);
  }, [t]);

  const socials = [
    { Icon: Github, href: settings.github },
    { Icon: Linkedin, href: settings.linkedin },
    { Icon: Twitter, href: settings.twitter },
    { Icon: MessageCircle, href: `https://wa.me/${(settings.whatsapp || "").replace(/[^0-9]/g, "")}` },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent2/10 text-accent2 text-xs font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse" />
            {t.hero.available}
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink dark:text-white tracking-tight">
            {t.hero.greet} <br />
            Paulo Mkenya<span className="text-accent">.</span>
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-semibold text-accent2">
            {t.hero.roles[roleIdx]}
          </p>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-md">
            {settings.heroTagline?.[lang] || t.hero.blurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink dark:bg-white text-white dark:text-ink font-semibold text-sm hover:opacity-90 transition"
            >
              {t.hero.viewProjects} <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/20 text-ink dark:text-white font-semibold text-sm hover:border-accent hover:text-accent transition"
            >
              <Mail size={16} /> {t.hero.contactMe}
            </Link>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map(({ Icon, href }, i) => (
              
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-accent hover:border-accent transition"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-light via-accent2-light to-accent2 opacity-90" />
            <div className="absolute inset-[6px] rounded-[1.7rem] bg-gray-100 dark:bg-white/5 overflow-hidden flex items-center justify-center">
              {/* Replace with: <img src="/profile.jpg" alt="Paulo Mkenya" className="w-full h-full object-cover" /> */}
              <span className="font-display font-extrabold text-6xl text-gray-300 dark:text-white/20">PM</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-ink rounded-2xl shadow-soft px-4 py-3 border border-black/5 dark:border-white/10">
              <p className="font-display font-bold text-xl text-ink dark:text-white">3+</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">{t.status.years}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
