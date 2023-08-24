
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"

 
 export const Nav = () => {

  const [backgroundColor, setBackgroundColor] = useState('#eafaf1')
  const location = useLocation();

  const handleResize = () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      setBackgroundColor('#fff')
    }
  }

  useEffect(()=>{
    if(
      location.pathname.includes('blog')
      || location.pathname.includes('category')
      || location.pathname === '/about'
       ){
        setBackgroundColor('#fcfcfc')
       }else if(window.matchMedia("(max-width: 900px)").matches){
        setBackgroundColor('#fff')
       }
       else{
        setBackgroundColor('#eafaf1')
       }

       window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [location])
 
   return (
    <div className="navbar" style={{background: backgroundColor}}>
      <div className="left">
        <Link to="/">
          <img
            width={120}
            src="../../../data/pulselogo.svg"
            alt="Pulse Logo" 
            aria-hidden="true"
          />
        </Link>
      </div>
      
      <div className="right">
        <nav>
         <NavLink to="features" className="nav">Features</NavLink>
         <NavLink to="customer-stories" className="nav">Customer Stories</NavLink>
         <NavLink to="pricing" className="nav">Pricing</NavLink>
         <NavLink to="blog/" className="nav">Blog</NavLink>
         <Link to="plus" className="btn-sign-container"><div className="btn-sign">Sign Up</div></Link>   
        </nav>
      </div>
    </div>
   )
 }

 /*|| window.matchMedia("(max-width: 900px)").matches*/
