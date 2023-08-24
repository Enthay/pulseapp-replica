import { Link } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"

export const Survive = () => {
  return (
    <div className="blog-layouts">
        <h1>Survive & Thrive</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog" style={{justifyContent: "flex-start"}}>
            <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <Link to="/blog/growth-in-a-downturn-how-arash-fayz-of-la-tutoring-pivoted-after-an-80-client-drop">
               <img src="../../data/images/home1.png" alt="" />
               <section>
                 <span>SURVIVE & THRIVE</span>
                 <h3>Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An 80% Client Drop</h3>
                 <p>
                   Arash Fayz of LA Tutors knew he needed to change his business model when the pandemic hit.
                   Here’s how he scaled his tutoring business after an 80% drop in clients.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <Link to="/blog/4-tips-on-optimizing-your-second-draw-ppp-check">
               <img src="../../data/images/blogg5.jpg" alt="" />
               <section>
                 <span>SURVIVE & THRIVE</span>
                 <h3>4 PPP Tips on Optimizing Your Second Draw Check</h3>
                 <p>Are you slotted to receive a second PPP loan? Here’s how you can make the most of it.</p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <Link to="/blog/how-to-quickly-add-ecommerce-to-your-business-strategy">
               <img src="../../data/images/blog7.png" alt="" />
               <section>
                 <span>SURVIVE & THRIVE</span>
                 <h3>How to (Quickly!) add eCommerce to your Business Strategy</h3>
                 <p>Small businesses need to pivot during this pandemic. For many, eCommerce may be the solution.</p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <Link to="/blog/5-practical-cash-flow-survival-tips-for-your-business-during-coronavirus">
               <img src="../../data/images/blo3.png" alt="" />
               <section>
                 <span>SURVIVE & THRIVE</span>
                 <h3>5 Practical Cash Flow Survival Tips for Your Business During Coronavirus</h3>
                 <p>
                   COVID-19 has made 2020 anything but easy for small businesses.
                   Our 5 practical cash flow survival tips can help you take back control.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <Link to="/blog/the-6-things-that-can-kill-your-agency-dead">
               <img src="../../data/images/blo4.png" alt="" />
               <section>
                 <span>SURVIVE & THRIVE</span>
                 <h3>The 6 Things That Can Kill Your Agency Dead</h3>
                 <p>To survive in business, you need to use common sense and understand one thing: cash flow management.</p>
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
