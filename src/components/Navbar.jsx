import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

export default function Navbar({ lang, setLang, mode, setMode, t, onDownloadCV }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/#about", label: lang === "sw" ? "Kunihusu" : "About" },
    { to: "/projects", label: t.nav.projects },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/85 dark:bg-ink/85 backdrop-blur-md shadow-sm"
          : "bg-white/60 dark:bg-ink/60 backdrop-blur-sm"
      } border-b border-black/5 dark:border-white/10`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-ink dark:text-white">
          Paulo<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600 dark:text-gray-300">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-accent transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center border border-black/10 dark:border-white/15 rounded-full p-0.5">
            {["sw", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === l ? "bg-accent text-white" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-black/10 dark:border-white/15 text-gray-600 dark:text-gray-300 hover:text-accent"
            aria-label="Toggle theme"
          >
            {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={onDownloadCV}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink dark:bg-white text-white dark:text-ink text-sm font-semibold hover:opacity-90 transition"
          >
            <Download size={15} /> {t.hero.downloadCV}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-ink dark:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white dark:bg-ink px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-base font-medium text-ink dark:text-white">
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center border border-black/10 dark:border-white/15 rounded-full p-0.5">
              {["sw", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    lang === l ? "bg-accent text-white" : "text-gray-500"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} className="p-2 rounded-full border border-black/10 dark:border-white/15">
              {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
