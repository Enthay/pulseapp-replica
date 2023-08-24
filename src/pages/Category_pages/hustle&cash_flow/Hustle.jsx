import { Link } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"

export const Hustle = () => {
  return (
    <div className="blog-layouts">
        <h1>Hustle & Cash Flow</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog" style={{justifyContent: "flex-start"}}>
            <div style={{marginLeft: "10px", marginRight: "10px"}}>
              <Link to="/blog/cash-flow-for-independent-contractors-dont-price-yourself-out">
               <img src="../../data/images/blogg4.png" alt="" />
               <section>
                 <span>HUSTLE & CASH FLOW</span>
                 <h3>Cash Flow for Independent Contractors: Don’t Price Yourself Out</h3>
                 <p>
                   Tile installation contractors in Oklahoma have a lot of expenses to balance.
                   Here’s how one woman keeps her cash flow positive.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div style={{marginLeft: "10px", marginRight: "10px"}}>
              <Link to="/blog/solving-human-problems-with-a-robotics-venture-kompaï-robotics">
               <img src="../../data/images/blogg7.jpg" alt="" />
               <section>
                 <span>HUSTLE & CASH FLOW</span>
                 <h3>How KOMPAÏ Robotics Solves Human Problems</h3>
                 <p>
                   CEO Vincent Dupourqué of KOMPAÏ Robotics built his dream after years of study,
                   testing, and fundraising.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            </div>
         </div>
        </div>
    </div>
  )
}
