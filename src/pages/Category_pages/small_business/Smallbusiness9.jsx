import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const Smallbusiness9 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>New Year’s Resolution: Understand Your Cash Flow</h1>
           <span className="span"><Link to="/category/small-business">SMALL BUSINESS</Link></span>
           <img src="../../data/images/FinalDrafts-NewYears.png" alt="" />
           <div className="q-and-a">
                <div className="socials-share">
                   <ul>
                     <li className="block">Share:</li>
                     <li><Link to=""><FacebookIcon /></Link></li>
                     <li><Link to=""><TwitterIcon /></Link></li>
                     <li><Link to=""><LinkedInIcon /></Link></li>
                     <li><a href=""><TelegramIcon /></a></li>
                     <li><a href=""><PulsaAppIcon /></a></li>
                   </ul>
                </div>
                <div>
                <p>
                 For a small business owner, it’s an excellent opportunity to examine 
                 past successes and failures and to move forward with your business in 
                 the most predictable and profitable manner possible. Understanding how cash flow affects
                 your business is a great step in maximizing your business’s potential.
                </p>
                <p>
                 Cash flow is the total money moving in and out of your business. A 
                 business with a high volume of cash flow
                 isn’t necessarily successful unless that cash flow is <b>positive</b>.
                </p>
                <p>
                 Take for example a graphic designer who runs his own business. He receives 
                 revenue from multiple clients for contracted work, and his regular expenses 
                 include rent and utilities for a small office, advertising, a monthly fee 
                 for software and a few freelancers he occasionally hires.
                 He keeps careful track of his income and expenses using a spreadsheet.
                </p>
                <p>
                 If he were to lose one of his contracts, he doesn’t know what
                 impact it would have on his bottom line going forward.
                </p>
                <p>
                 If he were to use cash flow software like <a href="">Pulse</a>, 
                 he would be able to consult his projections for the upcoming months 
                 to see how this loss will impact his business’s cash flow in the 
                 immediate future. By learning from his past cash flow and projecting 
                 future cash flow, he will better be able to decide if he needs to make cutbacks in advertising 
                 or hiring freelancers in order to keep his net cash flow positive.
                </p>
                <p>
                 Pulse is designed to make it easy for small business owners like you to keep 
                 your eyes on the horizon of your money management. Do you intend to give your 
                 employees a Christmas bonus? Pulse can help you know when it’s smart to save 
                 towards that goal. Expecting a lull in business during the winter months? Pulse 
                 can keep you on track to meet your financial goals through quarter one and beyond 
                 by giving you a better estimate of future revenue. Planning a resource intensive project? Pulse can help you
                 estimate how this will affect your bottom line for each week of the coming year.
                </p>
                <p className="small">
                 In short, cash flow projection helps you <a href="">make better business decisions</a>.
                </p>
                <p>
                 As another example, what if your business hits a sudden wall? 
                 Maybe unfortunate circumstances force you to close up shop for 
                 a few days. With detailed cash flow projections, you will have 
                 a better idea of how long it will take to recover those losses and get you back on track. 
                 This will allow you to spend money more wisely in the meantime.
                </p>
                <p>
                 Perhaps a sudden rush of business leaves you with more cash on hand than 
                 expected. With Pulse, you can consult your projections and decide 
                 if this extra revenue is better spent trying
                 to maintain your good fortune, or is best saved for an upcoming expense.
                </p>
                <p>
                 This year, resolve to make better business decisions. Stop spending money 
                 you don’t have on stuff you don’t need. Stop using that time-consuming spreadsheet
                 that only shows you money from the past. You’re better than a spreadsheet.
                </p>
                <p>...</p>
                <p><a href="">You should follow us on Twitter.</a></p>
                <form action="">
                    <span>Subscribe to the Pulse Newsletter</span>
                    <div>
                     <input type="email" placeholder="Your email address" />
                     <button>SUBSCRIBE</button>
                    </div>
                    <small>
                      This site is protected by reCAPTCHA and the Google <a href="">Privacy Policy</a>
                      and <a href="">Terms of Service</a> apply.
                    </small>
                </form>
                <p className="border-bottom" style={{marginTop: "120px"}}></p>
               </div>
            </div>
            <h1 className="h1">Related Posts</h1>
            <div className="related-stories">
            <div className="div">
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
            <div className="div">
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
            <div className="div">
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
