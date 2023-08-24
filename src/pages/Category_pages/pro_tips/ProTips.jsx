import { Link } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"

export const ProTips = () => {
  return (
    <div className="blog-layouts">
        <h1>Pro Tips</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog">
            <div>
              <Link to="/blog/5-steps-to-optimizing-a-services-business-from-brogan-renshaw-founder-of-firewire-digital">
               <img src="../../data/images/home3.jpg" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>5 Steps to Optimizing A Services Business from Brogan Renshaw, Founder of FireWire Digital</h3>
                 <p>
                   Brogan Renshaw filled a gap in his local market by starting an SEO agency, FireWire Digital.
                   Here’s what he’s learned from niching down and streamlining his business.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/how-ryan-david-of-we-buy-houses-pennsylvania-launched-and-grew-his-business">
               <img src="../../data/images/blog9.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>How Ryan David of We Buy Houses Pennsylvania Launched and Grew his Business</h3>
                 <p>
                   Cash flow can make or break a real estate business.
                   Learn what one investor does to stay cash positive.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/how-agencies-can-adopt-subscription-models-for-predictable-cash-flow">
               <img src="../../data/images/blogg8.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>How Agencies can Adopt Subscription Models for Predictable Cash Flow</h3>
                 <p>
                   Can creative agencies leverage a subscription business model? They can.
                   Here’s why and how your agency can create predictable cash flow with subscriptions.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/ways-business-owners-can-use-cash-flow-projection-to-scale-growth">
               <img src="../../data/images/blogg9.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>5 Ways to Use Cash Flow Projection to Scale Growth</h3>
                 <p>Here are five examples of how business owners can use cash flow projection to grow.</p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/never-use-quickbooks-and-spreadsheets-for-cash-flow">
               <img src="../../data/images/blog6.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>Never Use QuickBooks and Spreadsheets for Cash Flow</h3>
                 <p>
                   Profitable businesses fail every day because they run out of cash. You have to forecast cash flow.
                   But you don’t have to use spreadsheets.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/using-pulse-to-track-actuals-alongside-projections">
               <img src="../../data/images/blogg9.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>Using Pulse To Track Actuals Alongside Projections</h3>
                 <p>
                   One of the most common questions from our customers and prospects is whether Pulse can be
                   used to track actual income and expenses alongside projected income and expenses. The answer is yes!
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
             <Link to="/blog/using-cash-flow-scenarios-for-decisions-in-pulse">
               <img src="../../data/images/home2.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>Using Cash Flow Scenarios for Decisions in Pulse</h3>
                 <p>
                   Planning for the future is necessary to grow your business–it'll also give you peace of mind.
                   Here are some tips for predicting future cash flow so you can make decisions with confidence.
                 </p>
                 <small>Read More →</small>
               </section>
             </Link>
            </div>
            <div>
              <Link to="/blog/color-coding-projected-income-and-expenses">
               <img src="../../data/images/blog5.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>Color Coding Projected Income and Expenses</h3>
                 <p>
                   By using financial accounts creatively, you can make Pulse even more powerful for cash flow projections.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/why-your-startup-needs-pulse-for-cash-management">
               <img src="../../data/images/home1.png" alt="" />
               <section>
                 <span>PRO TIPS</span>
                 <h3>Why Your Startup Needs Pulse for Cash Management</h3>
                 <p>
                   You need Pulse for cash management and forecasting your cash decisions.
                   Pulse helps you see what could happen in the future and the impacts that can happen from different scenarios.
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
