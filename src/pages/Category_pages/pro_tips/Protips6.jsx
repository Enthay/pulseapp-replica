import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const Protips6 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>Using Pulse To Track Actuals Alongside Projections</h1>
           <span className="span"><Link to="/category/pro-tips">PRO TIPS</Link></span>
           <img src="../../data/images/FinalDrafts-usingpulsetotrack.png" alt="" />
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
                 First and foremost, Pulse is designed to manage cash flow, so our entire system 
                 is optimized around the idea that your past
                 transactions are not as important as your projected income and expenses. However...
                </p>
                <p>
                 Pulse also does a great job at tracking actuals against projections. And, with 
                 categories, you can generate reports that will help your accountant at
                 the end of the year (as long as you've input your income and expenses accurately).
                </p>
                <p><b>Here's How To Do It</b></p>
                <p>First, you need to set up two <b>Financial Accounts</b>.</p>
                <p>
                 Do this by going to Settings near the top right and then clicking on Accounts in the right sidebar. Or,
                 just click Edit near the Accounts module on the right-hand side of the Cash Flow tab.
                </p>
                <p>
                 You'll need two accounts: one for tracking your actuals and one for your projections. 
                 You can set up multiple accounts if you have different business units or profit centers 
                 for your business, just make sure you are on a plan that 
                 has enough accounts included. Name them whatever you want,
                 but for our simple demonstration, create one called Actuals and one called Projections.
                </p>
                <p><b>Set Up Projections</b></p>
                <p>
                 Whether you set up a budget annually or track projections throughout the year, this 
                 is your account for playing with your anticipated income and expenses. Put in possible 
                 projects, sales leads, anticipated hires, big annual expenses – whatever 
                 you are forecasting. If you want to use your projections as a budget for
                 the entire fiscal year, then call this financial account Budget instead of Projections.
                </p>
                <p><b>Track Actuals</b></p>
                <p>
                 Now, since your projections aren't necessarily realized income and expenses, 
                 you'll use your Actuals account to track your actual income and expenses. Luckily, 
                 you won't have to re-enter categories – they are all available for both financial 
                 accounts. While your projections will span into the future, your the entries in your Actuals
                 account will be filled out as time passes, creating a history of past transactions.
                </p>
                <p><b>Comparing Actuals and Projections</b></p>
                <p>
                 Now that you have everything set up, you can toggle the checkboxes by your 
                 financial accounts from your Cash Flow (monthly, weekly or list) and Reports 
                 screens to see your projections versus your actuals. Make sure to adjust the
                 dates that you are running reports on so that you can compare apples to apples.
                </p>
                <p><b>But Don't Stop Managing Cash Flow</b></p>
                <p>
                 Pulse is best used as a cash flow management tool, so always keep another
                 financial account for continually managing your projected income and expenses, 
                 knowing that when it comes to cash flow, all that matter is how much
                 money you have today and how much you have coming in and going out in the future.
                </p>
                <p>
                 It's incredibly helpful to use Pulse as a simple accounting system, and comparing 
                 actuals to projections (or a budget) is a great way to measure your business' 
                 ability to hit its projections. But, Pulse was designed for managing situations 
                 when projections and actuals may not align. Keep this in mind and use Pulse to 
                 figure out how to manage your cash flow through the tough times as well as how
                 best to reinvest (or if you can take money out of the business) during the good times.
                </p>
                <p>Happy cash flowing!</p>
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
              <Link to="/blog/5-steps-to-optimizing-a-services-business-from-brogan-renshaw-founder-of-firewire-digital">
               <img src="../../data/images/pulse-invoicing-hero.jpg" alt="" />
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
            <div className="div">
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
            <div className="div">
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
