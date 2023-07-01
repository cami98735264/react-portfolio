import "./App.css";
import { color, motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        className="App"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="App-header">
          <h3>
            <span style={{ color: "#A52A2A", textDecoration: "underline" }}>
              Backend
            </span>{" "}
            &{" "}
            <span style={{ color: "#3d15b0", textDecoration: "underline" }}>
              Frontend
            </span>{" "}
            Developer
          </h3>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            className="github-profile-image"
          >
            <img
              src="https://avatars.githubusercontent.com/u/65141870?v=4"
              className="github-profile"
              alt="github-logo"
            />
          </motion.div>
          <div className="social-media">
            <a href="https://github.com/cami98735264">
              <img src="/github-logo.png"></img>
            </a>
            <a href="https://www.linkedin.com/in/cristi%C3%A1n-camilo-rodr%C3%ADguez-montealegre-8a8697272/">
              <img src="/linkedin-logo.png"></img>
            </a>
            <a href="https://wa.me/573186562061">
              <img src="/whatsapp-logo.png"></img>
            </a>
          </div>
          <div className="footer">
            <ul>
              <li><a href="/metas">Metas ✨</a></li>
              <li><a href="/habilidades">Habilidades 💡</a></li>
              <li><a href="/proyectos">Proyectos 💻</a></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default App;
