// src/components/ProjectCard.jsx
import { Github, ExternalLink } from "lucide-react";

const CATEGORY_GRADIENT = {
  Web: "from-accent-light to-accent",
  Mobile: "from-accent2-light to-accent2",
};

export default function ProjectCard({ project, t, lang, showToast }) {
  const title = lang === "sw" ? project.title_sw : project.title_en;
  const desc = lang === "sw" ? project.desc_sw : project.desc_en;
  const subtitle = project.subtitle || project.category;
  const gradient = CATEGORY_GRADIENT[project.category] || CATEGORY_GRADIENT.Web;

  const noLink = (e) => {
    e.preventDefault();
    showToast?.(t.projectsPage.soon, "error");
  };

  return (
    <div className="group rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all">
      {/* Screenshot placeholder */}
      <div className={`h-44 bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
        {/* Replace with: <img src={project.image_url} alt={title} className="w-full h-full object-cover" /> */}
        <span className="font-display font-extrabold text-3xl text-white/90">
          {title?.slice(0, 2).toUpperCase()}
        </span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-ink">
          {project.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-ink dark:text-white leading-tight">
          {title}
        </h3>
        <p className="text-accent2 text-xs font-semibold mt-1 mb-3">{subtitle}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {(project.tech || []).map((tc) => (
            <span
              key={tc}
              className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 font-medium"
            >
              {tc}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          
            href={project.github || "#"}
            onClick={!project.github ? noLink : undefined}
            target={project.github ? "_blank" : undefined}
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-black/10 dark:border-white/15 text-sm font-medium text-ink dark:text-white hover:border-accent hover:text-accent transition"
          >
            <Github size={15} /> {t.projectsPage.code}
          </a>
          
            href={project.live || "#"}
            onClick={!project.live ? noLink : undefined}
            target={project.live ? "_blank" : undefined}
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-ink dark:bg-white text-white dark:text-ink text-sm font-semibold hover:opacity-90 transition"
          >
            <ExternalLink size={15} /> {t.projectsPage.live}
          </a>
        </div>
      </div>
    </div>
  );
}
