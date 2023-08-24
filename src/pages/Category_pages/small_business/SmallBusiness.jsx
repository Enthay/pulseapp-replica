import { Link, NavLink } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"
import { LeftIcon, RightIcon } from "../../../assets/HomepageSvg"

export const SmallBusiness = () => {
  return (
    <div className="blog-layouts">
        <h1>Small Business</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog">
            <div>
              <Link to="/blog/5-cash-flow-tips-and-business-insights-for-self-employed-millennials-from-justin-green-cfp">
               <img src="../../data/images/blog4.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>5 Cash Flow Tips and Business Insights for Self-Employed Millennials from Justin Green CFP</h3>
                 <p>
                   Justin Green is a fiduciary financial planner for Millennials.
                   Here’s how he built his business to fit the market’s needs, 
                   plus his cash flow tips for small business owners.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/balancing-your-side-hustle-and-full-time-gig-how-greg-marano-juggles-teaching-and-freelancing">
               <img src="../../data/images/blog7.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>Balancing Your Side-Hustle and Full-Time Gig: How Greg Marano Juggles Teaching and Freelancing</h3>
                 <p>
                   Greg Marano is an English teacher and a resume writer
                   who’s passionate about both lines of work. Here is how he manages his side-hustle.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/big-goals-and-basic-cash-flow-how-isaac-mashman-built-his-top-rated-pr-firm">
               <img src="../../data/images/blog8.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>Big Goals and Basic Cash Flow: How Isaac Mashman Built His Top-Rated PR Firm</h3>
                 <p>
                   Isaac Mashman of Mashman Ventures rapidly grew his PR business during the pandemic by following his gut.
                   Learn how going against the grain and developing a solid team made all the difference.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/growing-a-consultancy-agency-with-ecommerce-consultant-sam-waldman-of-goodz">
               <img src="../../data/images/blogg1.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>How Sam Waldman of Goodz Grew his Ecommerce Consultancy Agency</h3>
                 <p>
                   How do you grow a business?
                   Sam Waldman of Goodz tells us how he boosted his ecommerce agency in this interview.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/3-cash-flow-tips-for-fintech-startups-how-to-support-your-finance-team-and-foster-growth">
               <img src="../../data/images/blogg3.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>3 Cash Flow Tips for Fintech Startups: How to Support Your Finance Team and Foster Growth</h3>
                 <p>
                   Fintech startup cash flow management doesn’t need to be time-consuming.
                   Here are three tips from Airbase founder Thejo Kote.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/4-ways-small-businesses-can-connect-with-consumers-during-covid-19-beyond">
               <img src="../../data/images/blo2.jpg" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>4 Ways Small Businesses can Connect with Consumers During COVID-19 & Beyond</h3>
                 <p>
                   Despite the effects of COVID-19, small businesses are finding ways to connect with their customers.
                   Here are 4 ways you can reinvent your business model.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/8-invoicing-tips-to-maximize-cash-flow-for-your-small-business">
               <img src="../../data/images/home3.jpg" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>8 Invoicing Tips to Maximize Cash Flow for Your Small Business</h3>
                 <p>
                   To keep your business in the black, it’s crucial to invoice your clients the right way.
                   Here are eight tips that will make invoicing more efficient and less stressful for you and your clients.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/overcoming-seasonal-fluctuations-in-your-small-business">
               <img src="../../data/images/blo1.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>Overcoming Seasonal Fluctuations in Your Small Business</h3>
                 <p>Use cash flow forecasting to stay on top of natural ebbs and flows.</p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/new-years-resolution-understand-your-cash-flow">
               <img src="../../data/images/FinalDrafts-NewYears.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>New Year’s Resolution: Understand Your Cash Flow</h3>
                 <p>The beginning of a new year is always a time for fresh starts.</p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            </div>
         </div>
        </div>
        <nav>
            <ul>
             <li style={{marginTop: "-5px"}}><LeftIcon /></li>
             <NavLink onClick={(e)=> e.preventDefault()} to=""><li>1</li></NavLink>
             <Link to="/category/small-business/page/2"><li>2</li></Link>
             <Link to="/category/small-business/page/2"><li style={{marginTop: "-5px"}}><RightIcon /></li></Link>
            </ul>
          </nav>
    </div>
  )
}
