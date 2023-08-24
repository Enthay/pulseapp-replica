
import { Link, Outlet, useLocation } from "react-router-dom"
import { Nav } from "../components/Nav"
import { NavBottom } from "../components/NavBottom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ulVariants = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition: {duration: 0.5, when: "beforeChildren",  staggerChildren: 0.1}
  }
}
const listVariants = {
  start: { 
    y: 20,
    opacity: 0
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.5}
  }
}

export const Main = () => {

  //hidden .menu's displayValue state
  const [menuDisplayValue, setMenuDisplayValue] = useState("none");

  //hidden menu animation key state
  const [key, setKey] = useState(0);

  //All pages displayValue state
  const [displayValue, setDisplayValue] = useState("block");

  const location = useLocation()
  
  const handleDisplayValue = () => {
    setKey(key +1); 
    if (displayValue == "block"){
      setDisplayValue("none")
      setMenuDisplayValue("block")
    } else{
      setDisplayValue("block")
      setMenuDisplayValue("none")
    }
  }

  const handleResize = () => {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      setMenuDisplayValue("none")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    setKey(key +1);
    scrollToTop();
    setMenuDisplayValue("none")
    if (!window.matchMedia("(max-width: 900px)").matches) {
      setMenuDisplayValue("none")
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [location]);

  return (
    <div className="layout">
        
        <div className="hidden-menu">
        <Nav />
        <button className="btn-hidden" onClick={handleDisplayValue}>
         <svg width="30" height="30">
           <line x1="0" y1="10" x2="100" y2="10" stroke="#00ad6a" strokeWidth="2" />
           <line x1="0" y1="20" x2="100" y2="20" stroke="#00ad6a" strokeWidth="2" />
           <line x1="0" y1="30" x2="100" y2="30" stroke="#00ad6a" strokeWidth="4" />
         </svg>
        </button>
        </div>
        <motion.main style={{display: displayValue}}
         key={key}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 1}}
        >
          <Outlet />            
        </motion.main>
        <div style={{display: displayValue}}>
        <NavBottom />
        </div>
        <div
         className="menu" style={{backgroundColor: "#eafaf1", display: menuDisplayValue}}
        >
          <motion.ul onClick={handleDisplayValue}
           key={key}
           variants={ulVariants}
           initial="start"
           animate="end">
            <motion.li variants={listVariants}><Link to='features'>Features</Link></motion.li>
            <motion.li variants={listVariants}><Link to='customer-stories'>Customer Stories</Link></motion.li>
            <motion.li variants={listVariants}><Link to='pricing'>Pricing</Link></motion.li>
            <motion.li variants={listVariants}><Link to='blog'>Blog</Link></motion.li>
            <motion.li variants={listVariants}><Link to='about'>Contact</Link></motion.li>
            <motion.li variants={listVariants}><Link to='about'>Support</Link></motion.li>
            <motion.li variants={listVariants} className="layout-btn">
             <Link to="plus">
               <button className="btn-bnav"></button>
             </Link>
            </motion.li>
          </motion.ul>
        </div>
    </div>
  )
} 