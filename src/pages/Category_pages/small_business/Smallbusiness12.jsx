import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const Smallbusiness12 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>The Five Most Important Budget Line Items for Creative Agencies</h1>
           <span className="span"><Link to="/category/small-business">SMALL BUSINESS</Link></span>
           <img src="../../data/images/FinalDrafts-5mostimportantbudget.png" alt="" />
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
                 A fellow digital agency owner recently shared some advice he got from his 
                 business mentor with me. The advice lays out what
                 numbers really matter when tracking the value and health of your business.
                </p>
                <p>
                 I recently attended <a href="">Owner Camp 007</a>, where fellow digital 
                 agency owners celebrated, commiserated and discussed what it takes to 
                 stay sane while running our businesses. Afterwards, all of the alumni 
                 have kept in touch over <a href="">Basecamp</a> to continue the conversation. These discussions are already
                 the source some of the most helpful business advice I've ever received.
                </p>
                <p><b>Financial Ratios</b></p>
                <p>
                 One piece of such advice came from a story that Adam Landrum, who runs 
                 <a href="">Up&Up</a>, shared with me. With his permission, I'm sharing 
                 it here. The advice centered on the concept of the financial ratios for a business,
                 or in other words, what percent of your budget should go to X, Y and Z.
                </p>
                <p>
                 As the story goes, Adam was presenting a budget to his business mentor for 
                 critique, a budget with more than 20 line items. The mentor (who is highly 
                 skilled in evaluating the business side of creative agencies) put his hand on 
                 Adam's shoulder as if to say, "That's cute". He turned the paper over and wrote down the
                 following list of line items that he felt were the most worth tracking:
                </p>
                <p>
                  <ul>
                    <li>Compensation</li>
                    <li>Net Profit</li>
                    <li>Advertising and Marketing</li>
                    <li>Rent</li>
                    <li>General and Administrative</li>
                  </ul>
                </p>
                <p>
                 Then, he wrote what the percentage of each item should be in a
                 healthy creative agency. He started with compensation and profit:
                </p>
                <p>
                  <ul>
                    <li>Compensation: 58%</li>
                    <li>Net Profit: 20%</li>
                  </ul>
                </p>
                <p>
                 The thing to note here is that this totals to 78 percent, which means your business
                 must operate off of the remaining 22 percent. The rest breaks down as follows:
                </p>
                <p>
                  <ul>
                    <li>Advertising and Marketing: 5%</li>
                    <li>Rent: 6%</li>
                    <li>General and Administrative: 11%</li>
                  </ul>
                </p>
                <p>
                 While these numbers can be fluid and different for every agency, the most 
                 important number to watch is profit, which always has to stay at 20 percent 
                 or above. If you don't spend much on advertising and marketing, perhaps you 
                 can afford to spend more on compensation. In a city like Memphis, Tenn., where 
                 Simple Focus' office is located, the cost of living is very low, so our 
                 compensation and rent can come in low,
                 which means we can spend more on administrative expenses or keep more in profits.
                </p>
                <p>
                 These numbers will always wind up equalling 100 percent. As long as your
                 profit remains above 20 percent, your business is in good shape.
                </p>
                <p><b>This Works for Any Industry</b></p>
                <p>
                 Keep in mind, this advice applies in principle to any business or
                 industry, but these ratios are custom-tailored for creative businesses.
                </p>
                <p><b>Putting it to work in Pulse</b></p>
                <p>
                 You can use categories in Pulse to track these important line items in 
                 your forecasts to see how your numbers will change if you hire someone or 
                 give them a raise. As long as your cash flow remains strong and 
                 your percentages remain in line with this
                 advice, it's a pretty solid bet that your business will be in good shape.
                </p>
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
