import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiCplusplus,
  SiFlutter,
  SiPostgresql,
  SiTensorflow,
} from "react-icons/si";
import "./index.css";

export default function App() {
  const [year] = useState(new Date().getFullYear());
  const [t, setT] = useState(0);
  const [text, setText] = useState("");

  const fullText = "Apasionado por la tecnología e IA";

  useEffect(() => {
    let i = 1; // empezamos en 1, así nunca estará vacío
    let deleting = false;
    let interval;

    const run = () => {
      interval = setInterval(
        () => {
          if (!deleting) {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
              deleting = true;
              clearInterval(interval);
              setTimeout(run, 500); // pausa antes de borrar
            }
          } else {
            i--;
            setText(fullText.slice(0, i));
            if (i === 1) {
              // 👈 nunca borra hasta 0
              deleting = false;
              clearInterval(interval);
              setTimeout(run, 500); // pausa antes de volver a escribir
            }
          }
        },
        deleting ? 60 : 80
      ); // velocidad distinta para escribir/borrar
    };

    run();
    return () => clearInterval(interval);
  }, []);

  // animación logo
  useEffect(() => {
    const interval = setInterval(() => setT((prev) => prev + 0.03), 30);
    return () => clearInterval(interval);
  }, []);

  // helper framer-motion
  const fadeIn = (dir = "up", delay = 0) => {
    let x = 0,
      y = 0;
    if (dir === "up") y = 40;
    if (dir === "down") y = -40;
    if (dir === "left") x = 40;
    if (dir === "right") x = -40;
    return {
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.8, delay },
      viewport: { once: true },
    };
  };

  return (
    <div className="min-h-screen relative bg-[#0f1724] text-[#e6eef8] font-sans overflow-hidden">
      {/* fondo animado con partículas */}
      <div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#9b5cff]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.4,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="max-w-[1100px] mx-auto px-6 py-12 relative z-10">
        {/* HEADER */}
        <motion.header
          {...fadeIn("down", 0.1)}
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-bold text-[#021026] shadow-lg"
              style={{
                background: "linear-gradient(135deg,#00f5ff,#9b5cff)",
                transform: `translateY(${Math.sin(t) * 4}px) rotate(${
                  Math.sin(t / 3) * 2
                }deg)`,
              }}
            >
              CF
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold">
                Cliver Fray Aguilar Sulca
              </h1>
              <p className="text-xs text-gray-400">
                Practicante Pro de Sistemas y Automatizaciones con IA — D&M
                Smart
              </p>
            </div>
          </div>
          <nav className="hidden sm:flex gap-4 text-sm text-gray-400">
            <a href="#projects" className="hover:text-[#00f5ff]">
              Proyectos
            </a>
            <a href="#experience" className="hover:text-[#00f5ff]">
              Experiencia
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md border border-white/5 bg-gradient-to-r from-[#00f5ff]/10 to-[#9b5cff]/10 text-[#00f5ff]"
            >
              Contacto
            </a>
          </nav>
        </motion.header>

        {/* HERO */}
        <motion.section
          {...fadeIn("up", 0.2)}
          className="grid md:grid-cols-[1fr_360px] gap-6 mt-10 items-start"
        >
          {/* LEFT - Typing */}
          <div className="rounded-xl p-6 bg-[#0b1220]/80 backdrop-blur-md border border-white/5">
            <h2 className="text-2xl font-semibold mb-2 whitespace-pre-wrap">
              {text}
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Soy egresado de Ingeniería de Sistemas de Información (UPC). Tengo
              experiencia en desarrollo web (C#, PHP), móvil (Flutter) y ML.
              Actualmente laboro en D&M Smart como practicante pro de sistemas y
              automatizaciones con IA (Inicio: Julio 2025) — Lima, Perú.
            </p>

            {/* ICONOS DE LENGUAJES */}
            <div className="flex flex-wrap gap-4 text-3xl text-[#00f5ff] mb-4">
              <FaJava title="Java" />
              <SiSpringboot title="Spring Boot" />
              <FaPython title="Python" />
              <SiTensorflow title="TensorFlow" />
              <SiFlutter title="Flutter" />
              <SiCplusplus title="C++" />
              <FaReact title="React" />
              <FaDocker title="Docker" />
              <FaAws title="AWS" />
              <SiPostgresql title="PostgreSQL" />
              <FaGitAlt title="Git" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Backend: Java · Spring Boot",
                "ML: PyTorch · TensorFlow",
                "Mobile: Flutter",
                "Cloud: AWS · Docker",
                "Lenguajes: C++ Intermedio",
              ].map((b, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full border border-white/5 bg-gradient-to-r from-[#00f5ff]/5 to-[#9b5cff]/5 text-xs text-[#00f5ff]"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mb-4">
              <a
                className="px-4 py-2 rounded-md bg-gradient-to-r from-[#9b5cff] to-[#ff4da6] text-[#021026] font-semibold"
                href="#projects"
              >
                Ver proyectos
              </a>
              <a
                className="px-3 py-2 rounded-md border border-white/5 text-gray-400 hover:text-[#00f5ff]"
                href="./public/CV_CliverFrayAguilarSulca_ProgramadorJunior.pdf"
                download
              >
                Descargar CV (PDF)
              </a>
            </div>

            <div className="text-xs text-gray-400">
              <p>
                <strong>Ubicación:</strong> Surco, Lima - Perú
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  className="text-[#00f5ff]"
                  href="mailto:cliver_2003@hotmail.com"
                >
                  cliver_2003@hotmail.com
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT - Contacto rápido */}
          <div className="rounded-xl p-5 bg-[#0b1220]/80 backdrop-blur-md border border-white/5">
            <h3 className="font-semibold mb-3">Contacto rápido</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="tel:+51932907945"
                className="flex items-center gap-2 hover:text-[#00f5ff]"
              >
                <FaPhone className="text-[#00f5ff]" /> +51 932 907 945
              </a>
              <a
                href="https://www.linkedin.com/in/cliver-fray-aguilar-sulca-52a62a281/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#00f5ff]"
              >
                <FaLinkedin className="text-[#0e76a8]" /> LinkedIn
              </a>
              <a
                href="https://github.com/cliverFray"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#00f5ff]"
              >
                <FaGithub className="text-white" /> GitHub
              </a>
              <a
                href="https://www.instagram.com/ncliver2/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#00f5ff]"
              >
                <FaInstagram className="text-pink-500" /> Instagram
              </a>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Habilidades</h4>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                {[
                  "Java · Spring Boot",
                  "C# · ASP.NET",
                  "Python · ML",
                  "Flutter",
                  "MySQL · PostgreSQL",
                  "Docker · AWS",
                  "C++ Intermedio",
                ].map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md border border-white/5 bg-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCIA - TIMELINE VERTICAL */}
        <motion.section
          id="experience"
          {...fadeIn("right", 0.2)}
          className="mt-12"
        >
          <h2 className="text-xl font-semibold mb-8">Experiencia</h2>

          <div className="relative border-l border-[#00f5ff]/30 ml-4">
            {/* ITEM 1 */}
            <div className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#00f5ff] to-[#9b5cff] rounded-full ring-4 ring-[#0f1724]"></span>
              <h3 className="font-semibold">
                D&M Smart — Practicante Pro de Sistemas y Automatizaciones con
                IA
              </h3>
              <p className="text-xs text-gray-400">
                Julio 2025 – Actualidad · Lima, Perú
              </p>
              <ul className="list-disc list-inside text-xs text-gray-400 mt-2 space-y-1">
                <li>
                  Desarrollo e integración de automatizaciones y pipelines con
                  componentes de IA.
                </li>
                <li>
                  Soporte en despliegue y pruebas de modelos para procesos
                  internos.
                </li>
              </ul>
            </div>

            {/* ITEM 2 */}
            <div className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#00f5ff] to-[#9b5cff] rounded-full ring-4 ring-[#0f1724]"></span>
              <h3 className="font-semibold">Grupo GN — Programador junior</h3>
              <p className="text-xs text-gray-400">
                Febrero 2025 – Mayo 2025 · Lima, Perú
              </p>
              <ul className="list-disc list-inside text-xs text-gray-400 mt-2 space-y-1">
                <li>
                  Desarrollo con PHP y MySQL, documentación en PHPmyAdmin.
                </li>
                <li>Presentación semanal de avances y coordinación con QA.</li>
              </ul>
            </div>

            {/* ITEM 3 */}
            <div className="ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#00f5ff] to-[#9b5cff] rounded-full ring-4 ring-[#0f1724]"></span>
              <h3 className="font-semibold">
                Grupo GN — Programador de sistemas web
              </h3>
              <p className="text-xs text-gray-400">
                Enero 2024 – Junio 2024 · Lima, Perú
              </p>
              <ul className="list-disc list-inside text-xs text-gray-400 mt-2 space-y-1">
                <li>Desarrollo y mantenimiento en C# ASP.NET.</li>
                <li>
                  Soporte, documentación y coordinación con clientes internos.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* EDUCACIÓN */}
        <motion.section id="education" {...fadeIn("up", 0.2)} className="mt-12">
          <h2 className="text-xl font-semibold mb-3">Formación Académica</h2>
          <div className="p-4 rounded-xl bg-[#0b1220]/80 border border-white/5">
            <strong>Universidad Peruana de Ciencias Aplicadas (UPC)</strong>
            <p className="text-xs text-gray-400">
              Ingeniería de Sistemas de Información
            </p>
            <ul className="list-disc list-inside text-xs text-gray-400 mt-2">
              <li>Honores: Décimo superior – Grupo de Excelencia Académica</li>
            </ul>
          </div>
        </motion.section>

        {/* PRPYECTOS */}
        <motion.section id="proyects" {...fadeIn("up", 0.2)} className="mt-12">
          {/* PROYECTOS */}

          <h2 className="text-xl font-semibold mb-4">Proyectos destacados</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "NutriScan — Aplicación Móvil (2025)",
                tech: "Flutter · PyTorch · TensorFlow · Django REST · OpenCV · AWS",
                desc: "App móvil que detecta desnutrición infantil usando modelos CNN. Backend con Django REST, autenticación OTP y reportes automatizados.",
              },
              {
                title: "Students'Room — Plataforma Web (2023)",
                tech: "Spring Boot · Angular · REST",
                desc: "Plataforma Full Stack para búsqueda y gestión de habitaciones, con roles de usuario, controladores REST y validación segura.",
              },
              {
                title: "Sistema clientes (Grupo GN)",
                tech: "PHP · MySQL · Documentación",
                desc: "Desarrollo de sistema de registro de clientes, documentación de cambios y coordinación con tester durante el ciclo de desarrollo.",
              },
            ].map((p, i) => (
              <article
                key={i}
                className="p-4 rounded-xl border border-white/5 bg-white/5"
              >
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 mb-2">{p.tech}</p>
                <p className="text-sm mb-3">{p.desc}</p>
                <a
                  className="px-3 py-2 rounded-md bg-gradient-to-r from-[#9b5cff] to-[#ff4da6] text-[#021026] text-sm font-semibold"
                  href="https://github.com/cliverFray"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en GitHub
                </a>
              </article>
            ))}
          </div>
        </motion.section>

        {/* MÚSICA */}
        <motion.section
          id="music"
          {...fadeIn("up", 0.2)}
          className="mt-16 text-center relative"
        >
          {/* ecualizador animado (detrás del título) */}
          <div className="absolute inset-x-0 top-1/2 flex justify-center gap-1 -z-10 pointer-events-none">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-[#00f5ff] via-[#9b5cff] to-[#ff4da6]"
                style={{
                  height: `${20 + (i % 7) * 8}px`,
                  animation: `equalize ${0.6 + (i % 5) * 0.15}s ${
                    i % 2 === 0 ? "ease-in-out" : "ease"
                  } infinite`,
                  transformOrigin: "bottom",
                  borderRadius: 2,
                  opacity: 0.9,
                }}
              />
            ))}
          </div>

          <h2 className="relative text-3xl md:text-4xl font-extrabold tracking-widest bg-gradient-to-r from-[#00f5ff] via-[#9b5cff] to-[#ff4da6] bg-clip-text text-transparent animate-pulse">
            WORK MUSIC / INSPIRACIÓN
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Música futurista para programar y mantener el flow creativo.
          </p>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Imagen inspiracional (coloca el archivo en public/assets/work-music.png) */}
            <img
              src="./assets/workmusic.jpg"
              alt="Work Music"
              className="hidden md:block w-[520px] h-36 object-cover rounded-xl shadow-2xl border border-white/5"
            />

            {/* Embed Spotify (ajusta playlist si quieres) */}
            <iframe
              className="rounded-xl shadow-lg w-full md:w-[420px] h-40"
              src="https://open.spotify.com/embed/playlist/2bSSwU5WAIImxDjvn3qZKQ?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </motion.section>

        {/* CONTACTO */}
        <motion.section id="contact" {...fadeIn("up", 0.2)} className="mt-12">
          <h2 className="text-xl font-semibold mb-3">Contacto</h2>
          <div className="p-4 rounded-xl bg-[#0b1220]/80 border border-white/5">
            <p className="text-sm text-gray-400 mb-3">
              ¿Quieres revisar el código o coordinar una entrevista? Contáctame.
            </p>
            <div className="flex gap-2 flex-wrap">
              <a
                className="px-3 py-2 rounded-md bg-gradient-to-r from-[#9b5cff] to-[#ff4da6] text-[#021026] text-sm font-semibold"
                href="mailto:cliver_2003@hotmail.com"
              >
                Enviar email
              </a>
              <a
                className="px-3 py-2 rounded-md bg-gradient-to-r from-[#9b5cff] to-[#ff4da6] text-[#021026] text-sm font-semibold"
                href="https://github.com/cliverFray"
                target="_blank"
                rel="noreferrer"
              >
                Ver GitHub
              </a>
            </div>
          </div>
        </motion.section>

        <footer className="text-center text-xs text-gray-500 mt-12">
          © {year} Cliver Fray — Portafolio | Hecho con ❤️ y curiosidad por la
          IA
        </footer>
      </main>

      {/* animaciones extra */}
      <style>{`
        @keyframes equalize {
          0% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
          100% { transform: scaleY(0.35); }
        }
      `}</style>
    </div>
  );
}
