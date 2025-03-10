import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.container}
    >
      <div style={styles.heroSection}>
        <h1 style={styles.title}>Welcome to ForkPlay</h1>
      </div>

      <div style={styles.cardContainer}>
        <motion.div
          style={styles.card}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ff5722",
            color: "#fff",
          }}
        >
          <h2>Our Mission</h2>
          <p>
            At <strong>ForkPlay</strong>, we aim to bring food lovers from all
            around the world to share and discover amazing recipes.
          </p>
        </motion.div>

        <motion.div
          style={styles.card}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#4caf50",
            color: "#fff",
          }}
        >
          <h2>What We Offer</h2>
          <ul>
            <li>🍕 Wide variety of recipes.</li>
            <li>🥗 Healthy food options.</li>
            <li>📝 Easy step-by-step guides.</li>
            <li>❤️ Engaging food community.</li>
          </ul>
        </motion.div>

        <motion.div
          style={styles.card}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#007bb5",
            color: "#fff",
          }}
        >
          <h2>Join Our Community</h2>
          <p>
            Share your recipes, connect with passionate food lovers, and explore
            new cuisines.
          </p>
        </motion.div>
      </div>

      <div style={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:support@recipehub.com">support@ForkPlay.com</a>
        </p>
      </div>
    </motion.div>
  );
}

const styles = {
  container: {
    width: "100%",
    background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    textAlign: "center",
    paddingBottom: "50px",
    transition: "all 0.5s ease-in-out",
  },
  heroSection: {
    background: "linear-gradient(135deg, #007bb5, #4caf50)",
    padding: "60px 0",
    color: "#fff",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "0 50px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  },
  contactSection: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#ff5722",
    color: "#fff",
    borderRadius: "10px",
  },
};

export default About;
