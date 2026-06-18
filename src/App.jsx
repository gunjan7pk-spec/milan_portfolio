import "./App.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div>

      {/* NAVBAR */}
      <motion.header
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">Milan.dev</div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      {/* HERO */}
      <section id="home" className="hero">

        <motion.div
          className="hero-box"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Hi, I'm <span>Milan Kumar Singh</span></h1>

          <p>B.Tech CSE | AKTU University</p>

          <p className="sub">
            C • C++ • HTML • CSS • Excel • Web Development
          </p>

          {/* BUTTONS */}
          <motion.div className="btn-group">

            <motion.a
              href="mailto:milan10102005@gmail.com"
              className="glow-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              className="glow-btn"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>

          </motion.div>
        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About</h2>
        <p>
          I am a Computer Science Engineering student at AKTU University.
          I enjoy building modern, responsive web applications.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>C</span>
          <span>C++</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Excel</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>React + Vite modern UI</p>
          </div>

          <div className="card">
            <h3>Calculator</h3>
            <p>C++ logic-based project</p>
          </div>

          <div className="card">
            <h3>Landing Pages</h3>
            <p>Responsive HTML/CSS design</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <b>milan10102005@gmail.com</b></p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/gunjan7pk-spec">
            gunjan7pk-spec
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Milan Kumar Singh</p>
      </footer>

    </div>
  );
}