import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";

export const Hustle1 = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>Cash Flow for Independent Contractors: Don’t Price Yourself Out</h1>
           <span className="span"><Link to="/category/hustle-cash-flow">HUSTLE & CASH FLOW</Link></span>
           <img src="../../data/images/news_detail.png" alt="" />
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
                 Since 2002, Shari Easton of Tulsa Oklahoma has been installing and repairing tilework 
                 across the Midwest. Working under the business name of Masterful Tile Creation, Shari has spent
                 nearly two decades providing high-quality service, designs, and installation services.
                </p>
                <p>
                 Shari recently shared the behind-the-scenes operations of her business, namely
                 how she finances and bills her projects, and how that affects her cash flow.
                </p>
                <p>
                  <iframe width="700" height="415" src="https://www.youtube.com/embed/ZfB2hcXp6Mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </p>
                <p>
                 As a specialty independent contractor, ensuring positive cash flow is a combination of
                 solid pricing, simple accounting, investing in tools, and building her reputation.
                </p>
                <h1 className="lefth1">Pricing: Don’t cut yourself short</h1>
                <p>
                 When you work in tile installation or any other building-related work, you often have 
                 to balance client requirements, the costs of quality materials, and labor costs to 
                 meet the client’s budget. However, you don’t want to cut corners by providing low-quality 
                 tiles, grout, and other materials. You also
                 don’t want to undercharge for your labor, since it can take weeks to finish a project.
                </p>
                <p>
                  Remember, as a self-employed individual, you don’t have a 401(k), employer-sponsored 
                  healthcare plan, or any other traditional benefit. 
                  And you pay taxes on whatever you make, so you need to keep those expenses in mind.
                </p>
                <p>
                  If you cut corners on materials or try to undercut the competition, 
                  you risk pricing yourself out of the business altogether.
                </p>
                <p>
                  You’ll also want to put solid billing procedures in place. After providing an estimate, 
                  Shari requires clients to purchase the materials at the beginning of the project. This 
                  ensures that she doesn’t have to worry about inventory or negative cash 
                  flow at the start of every new job. She also takes an advance of 25% of labor costs.
                </p>
                <p>
                  By ensuring she has some of the labor cost up-front, Shari gives herself some financial 
                  padding in case she needs to purchase new tools and 
                  for other expenses — like driving to and from the worksite and general living expenses.
                </p>
                <h1 className="lefth1">Simplify your accounting</h1>
                <p>
                  While Shari mentioned looking for alternative ways to keep accounting straight, for years she used templates 
                  made on Microsoft Word and printed out for <a href="">invoicing</a> and keeping track of her finances.
                </p>
                <p>
                  The best program is one that you know how to use and keep track of. Some popular programs for basic invoicing 
                  and accounting include <a href="">Wave App</a>, <a href="">Freshbooks</a>, and <a href="">Quickbooks</a>.
                </p>
                <h1 className="lefth1">Zero budget marketing</h1>
                <p>
                  Perhaps one of the biggest contributors to Shari’s success and her ability 
                  to keep her cash flow management simple is her stellar reputation. Her business 
                  runs almost exclusively on referrals from tile shops, suppliers, and former clients. 
                  Until now, her only marketing expense has been providing business cards.
                </p>
                <p>
                  However, she’s working hard to grow her online presence as well, first through 
                  cost-effective methods like networking on Facebook and local small business groups. Shari’s also 
                  working on a website, which will add some smaller recurring costs, such as hosting.
                </p>
                <p>
                  Through investing in her expertise and community, Shari has been able to keep her 
                  marketing budget to the bare minimum—thus simplifying her accounting and 
                  reserving cash flow for other recurring costs, such as travel expenses and new tools.
                </p>
                <h1 className="lefth1">Take your business to the next level</h1>
                <p>
                  No matter how big or small your business is, understanding your cash flow is critical if 
                  you want to make it out of the feast or famine cycle. Cash flow projections, detailed reports, 
                  and simple visualization are a great supplement to your current accounting system. 
                  Try Pulse for <a href="">30 days for free</a> and take control of your business finances.
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
            <div className="div" style={{maxWidth: "30rem"}}>
              <Link to="/blog/solving-human-problems-with-a-robotics-venture-kompaï-robotics">
               <img src="../../data/images/KompaiROBOTICS41.jpg" alt="" />
               <section>
                 <span>HUSTLE & CASH FLOW</span>
                 <h3>How KOMPAÏ Robotics Solves Human Problems</h3>
                 <p>
                   CEO Vincent Dupourqué of KOMPAÏ Robotics built his dream after years of study,
                   testing, and fundraising.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div className="div" style={{border: "none", boxShadow: "none"}}></div>
            <div className="div" style={{border: "none", boxShadow: "none"}}></div>
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
