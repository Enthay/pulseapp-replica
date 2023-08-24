import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const CashFlow4 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>7 Questions for Better Cash Flow</h1>
           <span className="span"><Link to="/category/cash-flow-basics">CASH FLOW BASICS</Link></span>
           <img src="../../data/images/FinalDrafts-7questionscashflow.png" alt="" />
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
                <p>We surveyed Pulse customers and learned that 80% of them manage their cash flow daily.</p>
                <p>
                 It’s important to stay on top of your cashflow, yadda yadda…. But seriously, carve 
                 out half an hour this week. Get out of the office or wherever you typically work. 
                 Buy yourself a hand-crafted latte at one of those fancy third-wave 
                 indie coffee shops where everyone has a
                 better haircut than you. Turn off your phone. Take out a pen, paper and your laptop.
                </p>
                <p>Quit every application, Mail and Slack included.</p>
                <p>Invest 100% of your creative and critical faculties in honestly answering these seven questions:</p>
                <h1 className="lefth1">1. Are you managing your cashflow?</h1>
                <p>
                 Even if your business turns a massive profit annually, you could find yourself 
                 cash-strapped in the summer because of a lull in receivables. When you’re managing 
                 your cashflow, you’re timing payments and tying your expenses to income to
                 avoid a cash crunch. Pulse is great for visualizing these gaps so you can manage them.
                </p>
                <h1 className="lefth1">2. Are your cashflow projections accurate?</h1>
                <p>
                 Do a side-by-side comparison of your actual numbers and projections. 
                 Does your cash flow sync up with what you budgeted? If so, great! If not,
                 you should dig in to figure out what happened so you can plan better.
                </p>
                <h1 className="lefth1">3. Are you making more than you’re spending?</h1>
                <p>Hint: The answer you’re going for is “Yes.”</p>
                <h1 className="lefth1">4. How can you cut spending?</h1>
                <p>
                 Think big but think small too. Cut back on small things that don’t have hurt morale 
                 before you cut big things that people will really miss. High-quality coffee matters!
                </p>
                <h1 className="lefth1">5. How can you increase profit margins?</h1>
                <p>
                 You can start by raising your rates. If you’re in a service
                 business, <a href="">raising your rates by $10 an hour</a> might have a big impact.
                </p>
                <h1 className="lefth1">6. Do you have a plan for reinvesting profits?</h1>
                <p>
                vInvest in things that increase efficiency and convenience, decrease risk, and create
                 new opportunities (e.g., new capabilities, equipment, and people).
                </p>
                <h1 className="lefth1">7. Are you doing more of what is already working?</h1>
                <p>
                 Seriously, are you? Take a look at your last five customers or
                 projects. You may be able to identify a repeatable system in the mix.
                </p>
                <p>Recommit to the basics, and you may discover that your pulse is stronger than you think.</p>
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
