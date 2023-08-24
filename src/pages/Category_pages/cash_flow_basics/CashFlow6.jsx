import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const CashFlow6 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>Cash Flow: The Lifeblood of Your Business</h1>
           <span className="span"><Link to="/category/cash-flow-basics">CASH FLOW BASICS</Link></span>
           <img src="../../data/images/FinalDrafts-cashflowlifeblood.png" alt="" />
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
                 Cash flow is like the heartbeat of your business, it pumps in and out and has to be monitored.
                 When it's not working properly, it can threaten the viability of a venture or startup.
                </p>
                <p>
                 Your business is a system, like a living body, with a flow and a timing that have 
                 to work day in and day out. Having cash on hand for mundane and critical expenses keeps things moving
                 forward, but it can also give the power to invest in business growth opportunities.
                </p>
                <p>
                 As an entrepreneur and business owner, your job is to keep the flow going
                 without disruption, which means knowing your current cash position.
                </p>
                <p>
                 In Pulse, it's easy to keep an eye on your monthly, weekly or daily cash position,
                 which can help you to see how much money you will have on hand at any time.
                </p>
                <p>
                 As a manager of your business, it's critical that there not be a lapse in 
                 cash flow when you're trying to make payroll, buying necessary equipment for jobs and deciding
                 on a strategic decision. All of these decisions require clear information.
                </p>
                <p>
                 If you are keeping your cash flow information current, then you can play with the what-if situations, like:
                </p>
                <p>What if we...</p>
                <p>
                  <ul>
                    <li>want to hire a new employee?</li>
                    <li>upgrade our office space?</li>
                    <li>forego working with that difficult customer?</li>
                    <li>increase my owner's draw?</li>
                    <li>pay for a new vehicle?</li>
                    <li>buy new computers?</li>
                  </ul>
                </p>
                <p>
                 When your decisions are based on probabilities and
                 information, you are better equipped to mitigate risk and discover peace of mind.
                </p>
                <p>In the end, it's all about clarity. You are managing the life blood of the business, after all.</p>
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
              <Link to="/blog/startup-success-fundraising-and-cash-flow-with-very-good-security">
               <img src="../../data/images/blogg2.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>Startup Success: Fundraising and Cash Flow Advice from Very Good Security</h3>
                 <p>
                   Colin Gerber of Very Good Security (VGS) explains how proper
                   cash flow management drives success for early-stage startups.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div className="div">
              <Link to="/blog/why-monitoring-cash-flow-is-like-working-out">
               <img src="../../data/images/blogg6.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>Why Monitoring Cash Flow is Like Working Out</h3>
                 <p>
                   Like working out, monitoring your cash flow keeps your business healthy and prepared for the future.
                   Read on to learn more tips on monitoring your cash flow.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div className="div">
              <Link to="/blog/the-cost-vs-cash-flow-conundrum">
               <img src="../../data/images/blo7.png" alt="" />
               <section>
                 <span>CASH FLOW BASICS</span>
                 <h3>The Cost vs. Cash Flow Conundrum</h3>
                 <p>
                   Dallas runs his entire business on his MacBook. While cruising through a client project one
                   morning at his favorite coffee shop, Dallas manages to spill water on his… business.
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
