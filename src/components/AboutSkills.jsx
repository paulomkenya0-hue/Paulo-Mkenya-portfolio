import { User, Code2, Server, Smartphone, Database } from "lucide-react";

const SKILLS = {
  frontend: { icon: Code2, items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  backend: { icon: Server, items: ["Node.js", "Express.js", "PHP", "Laravel"] },
  mobile: { icon: Smartphone, items: ["Flutter", "Dart", "Android (Kotlin)"] },
  database: { icon: Database, items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"] },
};

export default function AboutSkills({ t, lang, settings }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-12">
      {/* About */}
      <div>
        <p className="text-accent2 font-semibold text-sm mb-2">{t.about.title}</p>
        <h2 className="font-display font-bold text-3xl text-ink dark:text-white mb-4">
          {lang === "sw" ? "Kunihusu" : "About Me"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {settings.about1?.[lang] || t.about.p1}
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {settings.about2?.[lang] || t.about.p2}
        </p>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 w-fit">
          <User size={18} className="text-accent" />
          <span className="text-sm text-ink dark:text-white">
            <strong>{t.about.university}:</strong> Ruaha Catholic University
          </span>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="font-display font-bold text-3xl text-ink dark:text-white mb-6">
          {t.skills.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(SKILLS).map(([key, { icon: Icon, items }]) => (
            <div
              key={key}
              className="p-5 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-soft"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="font-semibold text-ink dark:text-white mb-2 capitalize">
                {t.skills.categories[key]}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
