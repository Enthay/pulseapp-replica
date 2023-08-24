import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const Protips5 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>Never Use QuickBooks and Spreadsheets for Cash Flow</h1>
           <span className="span"><Link to="/category/pro-tips">PRO TIPS</Link></span>
           <img src="../../data/images/FinalDrafts-Neverusequickbooks.png" alt="" />
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
                 <i>Never take your eyes off the cash flow because it's the lifeblood of business.</i>
                 - Richard Branson, billionaire
                </p>
                <p>
                 I made my own bread when I was unemployed. I was unemployed
                 because the profitable business I owned ran out of cash.
                </p>
                <p>
                 I’m a marketing specialist, not a bread specialist. Making bread was complex, 
                 time-consuming, and full of errors. I never did get my whole
                 wheat loaves to rise. But it <em>was</em> satisfying: something to do and something to eat.
                </p>
                <p>Then I started a new business and got busy again. I let a specialist make my bread: Pepperidge Farm.</p>
                <p>
                 And I damn sure wasn’t going to let my new business run out of cash. I exported my 
                 QuickBooks data into Excel. And then…and then...But I’m a marketing consultant, not \
                 a spreadsheet guru. Setting up a usable cash flow projection was complex,
                 time-consuming, and full of errors. Like making my own bread, but without the satisfaction.
                </p>
                <p>
                 The first problem was the time it took just to set up the spreadsheet for cash flows. 
                 And trying to adapt the one-size-fits-all spreadsheet templates,
                 including Microsoft’s “My Cashflow” Excel template, was worse than starting from scratch.
                </p>
                <p>
                 But the kill-me-now problem was bad numbers, #VALUE! and the resulting 
                 time spent digging through my spreadsheet to find errors: the accidental 
                 minus sign…not copying all the rows needed…typing a formula over a value…multiplying
                 apples by oranges...the misguided AutoSum...duplication of incorrect data.
                </p>
                <p>
                 Then there’s over-saving, so my <i>“what if”</i> experiments permanently screwed up 
                 my <i>“as current”</i> information. And by the way,
                 my partner won’t read a spreadsheet on his tablet. He has to have charts!
                </p>
                <p>
                 If you make your own bread, you’ll spend more time with flour on your 
                 hands than eating toast. If you make your own cash flow spreadsheet, 
                 you’ll spend more time troubleshooting than making business decisions.
                 Because you’re not a baker or a spreadsheet guru, Excel or otherwise.
                </p>
                <p>
                 Profitable businesses fail every day because they run out of cash.
                 You have to forecast cash flow. But you don’t have to use spreadsheets.
                </p>
                <p>The app for bread is a grocery store. The app for cash flow is Pulse.</p>
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
