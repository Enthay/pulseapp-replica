import { Link } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"

export const CashFlowBasics = () => {
  return (
    <div className="blog-layouts">
        <h1>Cash Flow Basics</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog">
            <div>
              <Link to="/blog/startup-success-fundraising-and-cash-flow-with-very-good-security">
               <img src="../../data/images/blogg2.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>Startup Success: Fundraising and Cash Flow Advice from Very Good Security</h3>
                 <p>
                   Colin Gerber of Very Good Security (VGS) explains how proper
                   cash flow management drives success for early-stage startups.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/why-monitoring-cash-flow-is-like-working-out">
               <img src="../../data/images/blogg6.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>Why Monitoring Cash Flow is Like Working Out</h3>
                 <p>
                   Like working out, monitoring your cash flow keeps your business healthy and prepared for the future.
                   Read on to learn more tips on monitoring your cash flow.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/the-cost-vs-cash-flow-conundrum">
               <img src="../../data/images/blo7.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>The Cost vs. Cash Flow Conundrum</h3>
                 <p>
                   Dallas runs his entire business on his MacBook. While cruising through a client project one
                   morning at his favorite coffee shop, Dallas manages to spill water on his… business.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/7-questions-for-better-cash-flow">
               <img src="../../data/images/blogg8.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>7 Questions for Better Cash Flow</h3>
                 <p>
                   How closely do you monitor your business cash flow?
                   Often or never or only on special occasions like panic attacks?
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/what-is-cash-flow-projection">
               <img src="../../data/images/blo8.jpg" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>What is Cash Flow Projection?</h3>
                 <p>We’re revisiting some of the basics for an obvious reason: we stop practicing them.</p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
            <Link to="/blog/cashflow-the-lifeblood-of-your-business">
               <img src="../../data/images/blogg6.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>Cash Flow: The Lifeblood of Your Business</h3>
                 <p>
                   Cash flow is the life blood of your business.
                   Understanding cash flow is the key to keeping your business alive.
                 </p>
                 <small>Read More →</small>
               </section>
            </Link>
          </div>
          <div>
            <Link to="/blog/four-tips-for-managing-your-startups-burn-rate">
               <img src="../../data/images/blog9.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>Four Tips for ​Managing Your Startup's Burn Rate</h3>
                 <p>
                   Managing your burn rate is critical for startups. This article will give you some tools
                   for managing your burn rate and integrating cash flow management into growing your business.
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
