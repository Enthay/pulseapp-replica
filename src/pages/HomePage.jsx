import { Link } from "react-router-dom"
import { HomepageSvg, HomepageSvg2, SectionFive, SectionFour, SectionOne, SectionSix, SectionThree, SectionTwo } from "../assets/HomepageSvg"

export const Homepage = () => {
  return (
    <div className="home">
        <header>
          <div className="head">
           <h1>Yes, your business can<br/> survive that expense.
           <div className="svg2"><HomepageSvg2 /></div>
           </h1>
           <p className="margin">Do you know how much money you’ll have in two weeks? Two months? 
             Two years? Business owners who use Pulse have better cash flow habits and 
             a firm grasp on the pulse of their business. <strong>First month free.</strong>
           </p>
           <div className="blue-btn">
             <Link to="plus">Try 30 Days Free</Link>
           </div>
           <small >plans start at $29 <Link to="pricing">See full pricing.</Link></small>
          </div>
          <div  className="svg">
           <HomepageSvg />
          </div>
        </header>
        <div className="section-1">
          <div className="head">
            <h1>Business owners trust Pulse.</h1>
            <p>Below are real quotes from business owners.</p>
          </div>
          <article>
            <div>
              <h3>“I like that it provides the opportunity to test scenarios.”</h3>
              <p>
               You can quickly toggle income and expenses off and on to see what happens based on 
               different scenarios to see how they impact your bottom line. 
               When you can forecast your cash flow this quickly and easily, 
               you’re empowered to make smarter business decisions.
              </p>
            </div>
            <div>
              <h3>“Pulse shows me how to track cash flow the right way.”</h3>
              <p>
               Stop stumbling your way through spreadsheets not knowing what you don’t know. Pulse shows you a simple,
               easy to understand chart that answers the questions you have about your cash flow.
              </p>
            </div>
            <div>
              <h3>“It’s easy to set up and understand.”</h3>
              <p>
               Our user friendly design makes Pulse a breeze to set up and manage your cash flow.
               It’s so easy that over half of our
               customers are able to use Pulse every day without it taking up too much of their time.
              </p>
            </div>
            <div>
              <h3>“It used to take us hours to manually do in Excel what Pulse does out of the box.”</h3>
              <p>
               If you’re trying to manage your cash flow in systems that aren’t specifically designed for that purpose,
               you’re wasting the one resource more valuable than your cash, your time.
              </p>
            </div>
            <div>
              <h3>“I like the simplicity.”</h3>
              <p>
               Pulse is meant to do one thing really well—cash flow management.
               No other product on the market is as focused on putting you in 
               control of how cash moves in and out of your business.
              </p>
            </div>
            <div>
              <h3>“I like that Pulse is web-based.”</h3>
              <p>
               You can access Pulse from any computer, any time. There’s no software to install.
              </p>
            </div>
            <div>
              <h3>“I can connect it to my accounting software.”</h3>
              <p>
               With our direct connection to QuickBooks Online,
               keeping your cash flow projections and your actual performance in sync is a breeze.
              </p>
            </div>
          </article>
        </div>
        <div className="section-2">
          <div className="left">
            <h1>Make smarter business decisions with Pulse.</h1>
            <p>
             Do you know if you can hire another employee or take some money out of the company?
             Should you take on that new project or should turn it down? With Pulse,
             you immediately see how business decisions will impact your cash in the future,
             which in turn gives you the confidence you need to know if the decision is right.
            </p>
          </div>
          <div className="right">
            <div>
            <img src="./data/images/Carl_Smith.jpg" alt="" />  
            <h3>
              “Pulse makes my business smarter. We make better decisions because we can see further.
               You could say it has lowered our stress level by removing the fear of not knowing.”
            </h3>
            <p>CARL SMITH, BUREAU OF DIGITAL</p>
            <Link to="/">Read Customer Story →</Link>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="left">
           <h1>Pulse is specifically designed for small businesses.</h1>
           <p>
             Our customers include creative and technology agencies, service providers,
             restaurants, manufacturers, retail shops, contractors, freelancers, and more.
           </p>
           <div className="container">
             <Link to="plus">
               <button>Sign Up for a Free 30-Day Trial</button>
             </Link>
           </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="section-4">
          <div className="head">
            <h1>Pulse helps real businesses survive & thrive.</h1>
            <p>
              Our blog features stories from real business owners with real business advice,
              in addition to our own insights on how you can build better cash flow habits.
            </p>
          </div>
          <article>
            <div>
              <Link to="">
               <img src="./data/images/home1.png" alt="" />
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
            <div>
              <Link to="">
               <img src="./data/images/home2.png" alt="" />
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
              <Link to="">
               <img src="./data/images/home3.jpg" alt="" />
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
          </article>
        </div>
        <div className="section-5">
          <div className="head">
            <h1>Can your spreadsheets<br/> do this?</h1>
            <p>Pulse is like your cash flow spreadsheet, except the math isn’t wrong. Also, Pulse has:</p>            
          </div>
          <article>
            <div>
              <p><SectionOne /></p>
              <h3>Multiple Cash Flow Views</h3>
              <small>Monitor your cash flow on a yearly, monthly, weekly, daily transactional basis.</small>
            </div>
            <div>
              <p><SectionTwo /></p>
              <h3>Customers and Projects</h3>
              <small>Run cash flow reports on customers and projects to see how profitable they’re going to be.</small>
            </div>
            <div>
              <p><SectionThree /></p>
              <h3>Visual Reports</h3>
              <small>With our easy-to-understand reports, you can see cash moving in and out of your business.</small>
            </div>
            <div>
              <p><SectionFour /></p>
              <h3>Currency Conversion</h3>
              <small>If your business operates on multiple currencies, we have you covered with today’s exchange rates.</small>
            </div>
            <div>
              <p><SectionFive /></p>
              <h3>Invite Your Team</h3>
              <small>Invite your team to help out, or showcase your projections to investors by giving them read-only access.</small>
            </div>
            <div>
              <p><SectionSix /></p>
              <h3>Connects to Quickbooks Online</h3>
              <small>Save time and reduce errors by keeping Pulse and your accounting software in sync.</small>
            </div>
          </article>
          <Link to="features">See Everything Pulse Does →</Link>
        </div>
        <div className="section-2">
          <div className="left">
            <h1>Pulse is the easy, online way to manage and project your cash flow.</h1>
              <div className="container">
               <Link to="customer-stories">
                 <button>See All Customer Stories</button>
               </Link>
              </div>
          </div>
          <div className="right">
            <div>
            <img src="./data/images/blog-casimir.jpg" alt="" />  
            <h3>
             “Pulse has allowed us to visualize our cash flow before our brains turned to
             mush trying to deal with receipts, spreadsheets and accordion folders.”
            </h3>
            <p>CASIMIR LOEBER, REALTYNINJA</p>
            <Link to="customer-stories/case-study-realtyninja">Read Customer Story →</Link>
            </div>
          </div>
        </div>
        <div className="foot">
        <Link to="/plus">
          Sign Up for a Free 30-Day Trial →
        </Link>
      </div>
    </div>
  )
}
