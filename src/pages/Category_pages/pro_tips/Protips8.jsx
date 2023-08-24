import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const Protips8 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>Color Coding Projected Income and Expenses</h1>
           <span className="span"><Link to="/category/pro-tips">PRO TIPS</Link></span>
           <img src="../../data/images/FinalDrafts-colorcoding.png" alt="" />
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
                 Sometimes, we get questions from customers about how to accomplish something that 
                 Pulse wasn't made to do. Since Pulse is such a simple and abstract platform for cash flow management,
                 you can use a little creativity and change the way you use it to accomplish something.
                </p>
                <p>A customer wrote in recently:</p>
                <p>
                 "I'm trying to find a way to mark several income entries, which I know will be 
                 paid on a certain date, differently from the rest of my income, which I'm not 
                 so sure about, but all my income looks the same. It would help if I could
                 quickly see which income entries are going to be paid and which ones are estimated."
                </p>
                <p>
                 If you want to look at your cash flow and quickly know the difference between what 
                 income or expenses are definite and which ones are just projections, 
                 you can use the color coding feature of our
                 financial accounts to accomplish this. It's a little more work, but it gives great results.
                </p>
                <p>
                 Try using two or three financial accounts—you might name one of them "Firm Receivables" 
                 and the other "Loose Receivables." Of course, name them any way you want…any time a 
                 projected income item is actually paid, you can edit it to reflect actual date paid 
                 and keep it in one of those two accounts,
                 or an even cleaner approach would be to move it to another account called "Actuals."
                </p>
                <p>If you have a creative way of using Pulse, let us know!</p>
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
