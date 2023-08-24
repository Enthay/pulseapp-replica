import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const Protips7 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>Using Cash Flow Scenarios for Decisions in Pulse</h1>
           <span className="span"><Link to="/category/pro-tips">PRO TIPS</Link></span>
           <img src="../../data/images/FinalDrafts-usingcashflowdecisions.png" alt="" />
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
                 You can’t run your business blind. Well, you could, but doing so has consequences. 
                 Many startups try to shoot from the hip when it comes to growing
                 their business, but this approach is fraught with common mistakes and failures.
                </p>
                <p>
                 If you're not careful, you might make the mistake of spending money on resources that can 
                 wait until you are in a better cash position. Or, your market’s seasonality can have an 
                 impact on your cash flow. Such actions can leave you
                 without the cash you need for emergencies or dealing with business needs at the right time.
                </p>
                <p>
                 The good news is, avoiding these mistakes is easy with a
                 combination of goal setting and cash flow monitoring.
                </p>
                <p>
                 For example, imagine planning for a large trade show with high expenditures. If 
                 you see that your cash position will be weak around the time of the show, you can 
                 plan ahead and make the decision to hold off
                 on purchasing that new enterprise software system or hiring a new full-time employee.
                </p>
                <p>
                 Instead, you can wait for the boost you'll get from your trade show 
                 lead conversions and reassess what the infusion of revenue will do for 
                 your future cash flow. This allows you to manage by the 
                 numbers and connect clearly with your cash position.
                 Clear data is empowering and helps you plan your spending and timeline.
                </p>
                <p>
                 You can use Pulse to play out scenarios to give you clarity and help you reach the 
                 goals you have set. Whether your business is starting up or going strong for years,
                 this process is necessary to keep your profitability high and your cash flow positive.
                </p>
                <p>
                 A great way to do this is to put all of the deals you're working as separate 
                 income items for different projects. You can adjust your income and game out 
                 different scenarios to see what you would need to do if a project falls through 
                 or unexpected income is generated. For example, if you have a $3,500 deal with 
                 a high probability of closing with ABC Company,
                 enter a project in the income area of Pulse with a project with ABC Company.
                </p>
                <p>
                 From there, toggle the inclusion of those income line items by checking 
                 or unchecking them. Doing this will allow you to see how important each 
                 item is to your cash flow situation at different points in time, which 
                 will give you further sensitivity to different possibilities.
                 It gets you emotionally involved with the goal, and that is worth gold.
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
