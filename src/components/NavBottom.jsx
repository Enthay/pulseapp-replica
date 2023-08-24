import { Link } from "react-router-dom"
import { Table } from "./Table"

export const NavBottom = () => {
  return (
    <div className="nav-bottom">
        <footer>
          <div className="bnav-left">
           <Link to="/">
             <img src="../../../data/pulselogo.svg" alt="" aria-hidden="true"/>
           </Link>
           <div className="b-container">
            <Link to="plus" className="btn-bnav-container">
             <button className="btn-bnav">Sign Up for a Free 30-Day Trial</button>
            </Link>
           </div>
          </div>
          <div className="c-container">
           <Link to="plus">
             <button className="btn-bnav">Sign Up for a Free 30-Day Trial</button>
            </Link>
          </div>
          <div className="bnav-right">
            <div><Table /></div>
          </div>
        </footer>
        <div className="foot">
          <small>&copy; 2019 Pulseapp.com, Inc. All Rights Reserved | 
           <Link to=""> Terms of Use</Link> |
           <Link to=""> Privacy Policy</Link> |
           <Link to=""> EU Privacy</Link><br />
           this website is not <a href="https://pulseapp.com/">Pulseapp.com</a> it's just a replica created 
           by me, you can find my portfolio at <Link to="/">blah blah dot cum</Link>
          </small>
        </div>
    </div>
  )
}
