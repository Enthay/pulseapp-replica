import { Link } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"

export const Entrepreneurship = () => {
  return (
    <div className="blog-layouts">
        <h1>Entrepreneurship</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog">
            <div>
              <Link to="/blog/monetizing-a-network-how-jodi-brandstetter-started-her-second-business">
               <img src="../../data/images/home2.png" alt="" />
               <section>
                 <span>ENTREPRENEURSHIP</span>
                 <h3>Monetizing a Network: How Jodi Brandstetter Started Her Second Business</h3>
                 <p>
                   STEM talent consultant Jodi Brandstetter started her second business
                   during the pandemic—a business book publishing network. Here’s how she made it work.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/starting-a-services-business-tips-from-writer-nicole-rollender-of-strand-writing-services">
               <img src="../../data/images/blog5.png" alt="" />
               <section>
                 <span>ENTREPRENEURSHIP</span>
                 <h3>Starting a Services Business: Tips from Writer Nicole Rollender of Strand Writing Services</h3>
                 <p>
                   Nicole Rollender started Strand Writing Services back in 2018, and, since then,
                   her business has only grown. Now she’s learning to keep her business and her work ethic sustainable.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/milestone-one">
               <img src="../../data/images/blo5.png" alt="" />
               <section>
                 <span>ENTREPRENEURSHIP</span>
                 <h3>Milestone One</h3>
                 <p>The tough love and practical advice you need to get an actual business off the ground.</p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/startups-need-cash-flow-projections">
               <img src="../../data/images/blogg3.png" alt="" />
               <section>
                 <span>ENTREPRENEURSHIP</span>
                 <h3>Startups Need Cash Flow Projections</h3>
                 <p>​So you’re working on a startup? That’s great. Welcome to the enchanted world of cash flow projections.</p>
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
