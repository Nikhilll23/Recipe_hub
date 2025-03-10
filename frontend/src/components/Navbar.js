import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (buttonName) => {
    const baseStyle = styles.navBtn;
    const hoverStyle =
      buttonName === "logout" ? styles.logoutBtnHover : styles.navBtnHover;
    return hoveredButton === buttonName
      ? { ...baseStyle, ...hoverStyle }
      : baseStyle;
  };

  return (
    <nav style={styles.topNavbar}>
      <h1 style={styles.logo} onClick={() => navigate("/")}>
        ForkPlay🍴
      </h1>
      <div style={styles.navButtons}>
        {token ? (
          <>
            <button
              style={getButtonStyle("home")}
              onClick={() => navigate("/")}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </button>
            <button
              style={getButtonStyle("my-recipes")}
              onClick={() => navigate("/Dashboard")}
              onMouseEnter={() => handleMouseEnter("my-recipes")}
              onMouseLeave={handleMouseLeave}
            >
              My Recipes
            </button>
            <button
              style={getButtonStyle("new-recipe")}
              onClick={() => navigate("/create-recipe")}
              onMouseEnter={() => handleMouseEnter("new-recipe")}
              onMouseLeave={handleMouseLeave}
            >
              New Recipe?
            </button>
            <button
              style={getButtonStyle("about")}
              onClick={() => navigate("/about")}
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              About
            </button>
            <button
              style={getButtonStyle("logout")}
              onClick={handleLogout}
              onMouseEnter={() => handleMouseEnter("logout")}
              onMouseLeave={handleMouseLeave}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              style={getButtonStyle("new-recipe")}
              onClick={() => navigate("/create-recipe")}
              onMouseEnter={() => handleMouseEnter("new-recipe")}
              onMouseLeave={handleMouseLeave}
            >
              New Recipe?
            </button>
            <button
              style={getButtonStyle("about")}
              onClick={() => navigate("/about")}
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              About
            </button>
            <button
              style={getButtonStyle("login")}
              onClick={() => navigate("/login")}
              onMouseEnter={() => handleMouseEnter("login")}
              onMouseLeave={handleMouseLeave}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  topNavbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 90px",
    height: "70px",
    background: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "50px",
    fontWeight: "bold",
    fontFamily: "'Times New Roman', serif",
    color: "#222",
    cursor: "pointer",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)",
  },
  navButtons: {
    display: "flex",
    gap: "12px",
  },
  navBtn: {
    background: "#fff",
    color: "#ff7e5f",
    padding: "10px 18px",
    border: "1px solid #ff7e5f",
    borderRadius: "20px",
    cursor: "pointer",
  },
  navBtnHover: {
    transform: "scale(1.1)",
    backgroundColor: "#ff7e5f",
    color: "#fff",
  },
  logoutBtnHover: {
    backgroundColor: "#ff4e4e",
  },
};

export default Navbar;
