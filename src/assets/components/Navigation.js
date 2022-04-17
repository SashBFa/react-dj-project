import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100px 5px)`,
      background: "rgba(255, 255, 255, 1)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 20px)",
      background: "rgba(255, 255, 255, 0)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const variant = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 100%)"
      strokeLinecap="round"
      {...props}
    />
  );
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src="./assets/images/logo.png" alt="DJ Angerone" />
      </div>
      <motion.div
        className="nav__burger"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.div className="nav__bg" variants={sidebar} />
        <button className="nav__button" onClick={() => toggleOpen()}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
        <motion.ul className="nav__box" variants={variant}>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <motion.li
              className="nav__link"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              home
            </motion.li>
          </NavLink>

          <NavLink
            to={"/discography"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <motion.li
              className="nav__link"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              discography
            </motion.li>
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <motion.li
              className="nav__link"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              gallery
            </motion.li>
          </NavLink>
          <NavLink
            to={"/about"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <motion.li
              className="nav__link"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              about
            </motion.li>
          </NavLink>
          <NavLink
            to={"/tour"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <motion.li
              className="nav__link"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              tour
            </motion.li>
          </NavLink>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;
