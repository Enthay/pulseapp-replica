import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/FacebookIcon";
import { TwitterIcon } from "../../../assets/TwitterIcon";
import { TelegramIcon } from "../../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../../assets/PulsaAppIcon";
import { LinkedInIcon } from "../../../assets/LinkedInIcon";


export const NewsDetails = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>10 Ways to Sabotage Your Business</h1>
           <span className="span"><Link to="/category/news">NEWS</Link></span>
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
                 Here are 10 of the biggest mistakes you could be making in planning, team management,
                 and money, money, money. To work on these critical areas,
                 we’ve also gathered the top advice from New Year’s resolutions of the past.
                </p>
                <h1 className="lefth1">10. Not revisiting your mission statement and company goals</h1>
                <p>From Megan Sullivan’s post on <a href="https://quickbooks.intuit.com/r/business-planning/2016-new-years-resolutions-for-small-businesses/">QuickBooks’ blog</a>:</p>
                <p className="small">
                 “If you’ve been in business for a few years,
                 chances are things have changed pretty dramatically from when you began.
                 Due to the economy, competition or even just your own interests,
                 it’s possible that what you set out to do isn’t quite what you ended up with,
                 and that’s okay. Take a moment to review your mission statement and overall goals.
                </p>
                <p className="small">
                 Pull out that business plan you first put together when you were looking for financing,
                 and see how your long-term goals stack up against your real-world experience.”
                </p>
                <h1 className="lefth1">9. Not involving others when you set goals or plan for the future of your company</h1>
                <p>From <a href="">Kevin Eikenberry’s</a> post on <a href="">Monster’s blog:</a></p>
                <p className="small">
                 “Yes, it is your business. Yes, it is your financial stake and you are the one taking the risk.
                 And yet your team members are invested in the business too. They spend their time,
                 effort, and energy. Wouldn’t you like them to be more personally invested in the success of the business?
                 Let’s put it this way: would you like your employees to think more like owners?
                </p>
                <p className="small">
                 If so, you have to involve them in the goals and planning for the business — i.e,
                 you have to drive employee engagement You may set the overall direction,
                 but let them be involved in the creation of the outcomes. Slowing down
                 enough to involve them in this important work is a big key to greater involvement,
                 commitment and success.”
                </p>
                <h1 className="lefth1">8. Ignoring opportunities to cut costs and increase profits</h1>
                <p>From Carbonite’s Norman Guadagno’s post for Small Business Trends:</p>
                <p className="small">
                 “Resolve to spend more time digging into the minutia of your business’s finances
                 because you may be surprised at how many opportunities you find to slash costs,
                 increase efficiency and grow profit margins.
                </p>
                <p className="small">
                 “That means tracking invoices more closely, paying bills on time,
                 asking utility providers for ways to save money, and scoping the market for competitive suppliers.
                 Choose one area to focus on each month and you’ll be very happy with the results.”
                </p>
                <h1 className="lefth1">7. Ignoring the way you bring in profit</h1>
                <p>From Rhonda Abram’s article on USA Today:</p>
                <p className="small">
                 “All money is the same, right? Wrong. Businesses have two kinds of money,
                 cash flow — which keeps the doors open short-term — and profits — which provides long-term security.
                 Understand, and concentrate on, the parts of your business that bring you profits.”
                </p>
                <h1 className="lefth1">6. Decreasing your team’s productivity by using your same old performance reviews</h1>
                <p>From Kate Edwards’ post for <a href="">CNBC</a>:</p>
                <p className="small">
                 Ditch your old performance reviews. Traditional performance reviews can actually de-motivate your employees,
                 as people consider a “review” or “feedback” a negative experience. Set your employees up for a more positive approach by reinventing the review process so that it focuses on employee strengths. Call it a “Goals and Performance Timeline.”
                 Focus on your employee’s strengths, and create initiatives together around setting goals for the coming year.
                </p>
                <p className="small">
                 A Gallup poll shows that employees who are able to focus on their strengths in their positions are six
                 times more engaged in their work and are eight percent more productive than plain old worker bees.
                 Engagement equals performance, and your business – and employees – will be better for it.”
                </p>
                <h1 className="lefth1">5. Hiring new employees the wrong way</h1>
                <p>As Mariama Bramble posts for the <a href="">U.S. Small Business Administration</a>:</p>
                <p className="small">
                 “If the New Year means new hires for your business, learn more about the process from start to finish.
                 Beginning with the job
                 description all the way to making sure the lines of communication are open with clients and existing employees.
                </p>
                <p className="small">
                 The key to this resolution is transparency.
                 Keeping the lines of communication open between all parties benefits everyone in the end.”
                </p>
                <h1 className="lefth1">4. Never asking for advice</h1>
                <p>Speaking of the Small Business Administration, agency spokesperson Miguel Ayala says on <a href="">Fortune</a>,</p>
                <p className="small">
                 “One of the chief responsibilities of the SBA is, of course, to dole out advice to entrepreneurs
                 in need of some help. Struggling? The SBA can be a resource.
                  Its learning center hosts a library of videos about managing small businesses,
                 online training courses and web chats with small business experts throughout the year.
                </p>
                <p className="small">
                 Whether you started with an SBA loan or not, have an existing business or not,
                 our counseling services are available to
                 all entrepreneurs to evaluate how your business is progressing, and look for opportunities to expand.”
                </p>
                <h1 className="lefth1">3. Not paying attention to your financials</h1>
                <p>As accounting software <a href="">Xero</a> says:</p>
                <p className="small">
                 “It may not be the fiscal year-end for your business yet.
                 But it doesn’t hurt to go through all those sales receipts and invoices now,
                 and check your bank account to make sure the figures add up.”
                </p>
                <h1 className="lefth1">2. Only focusing on one-off customers</h1>
                <p>
                 <a href="">Rhonda Abrams</a> is an entrepreneurial expert.
                 On her list of top resolutions for small businesses, <a href="">she says</a>:
                </p>
                <p className="small">
                 “You may be thrilled to find any source of income, but some types of customers
                 contribute more significantly to your long-term financial well-being. Focus foremost
                 on customers who have the need and capacity to buy from you repeatedly rather than one-off purchasers.”
                </p>
                <p>
                 You don’t have to take our word for it, but “cash flow management” found a spot into
                 just about everybody’s lists for the next year. The number one way to sabotage your business is…
                </p>
                <h1 className="lefth1">1. Ignoring your cash flow</h1>
                <p>
                 We’ve written solid-gold cash flow advice in the past
                 (like <a href="">here</a>, <a href="">here</a> and <a href="">here</a>)
                 because we want your business to be unstoppable.
                </p>
                <p>
                 Focus on bringing in more revenue,
                 commit to your budget and keep a closer eye on your finances by projecting your cash flow in Pulse.
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
