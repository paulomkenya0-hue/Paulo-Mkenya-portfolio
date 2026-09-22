// src/components/ProjectsGrid.jsx
import { useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ t, lang, projects, showToast }) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const title = lang === "sw" ? p.title_sw : p.title_en;
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesQuery = title.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <div className="text-center max-w-xl mx-auto mb-10">
        <p className="text-accent2 font-semibold text-sm mb-2">
          {lang === "sw" ? "Miradi Yangu" : "Featured Projects"}
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink dark:text-white mb-3">
          {t.projectsPage.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{t.projectsPage.subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex gap-2">
          {[["All", t.projectsPage.all], ["Web", t.projectsPage.web], ["Mobile", t.projectsPage.mobile]].map(
            ([val, label]) => (
              <button
                key={val}
                onClick={() => setFilter(val)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  filter === val
                    ? "bg-accent text-white border-accent"
                    : "border-black/10 dark:border-white/15 text-gray-600 dark:text-gray-300 hover:border-accent hover:text-accent"
                }`}
              >
                {label}
              </button>
            )
          )}
        </div>
        <div className="relative">
          <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.projectsPage.search}
            className="pl-9 pr-3 py-2 rounded-full border border-black/10 dark:border-white/15 bg-transparent text-sm text-ink dark:text-white outline-none focus:border-accent min-w-[200px]"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} t={t} lang={lang} showToast={showToast} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center py-10 text-gray-500">{t.projectsPage.noResults}</p>
        )}
      </div>
    </section>
  );
}
