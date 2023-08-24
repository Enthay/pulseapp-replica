import { Link } from "react-router-dom";
import { FacebookIcon } from "../../assets/FacebookIcon";
import { TwitterIcon } from "../../assets/TwitterIcon";
import { LinkedInIcon } from "../../assets/LinkedInIcon";
import { TelegramIcon } from "../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../assets/PulsaAppIcon";

export const CarlDetails = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>How nGen Works Uses Pulse to Make Better Business Decisions</h1>
           <div className="q-and-a">
                <div className="socials-share">
                   <ul>
                     <li className="block">Share:</li>
                     <li><Link to="/"><FacebookIcon /></Link></li>
                     <li><Link to="/"><TwitterIcon /></Link></li>
                     <li><Link to="/"><LinkedInIcon /></Link></li>
                     <li><a href=""><TelegramIcon /></a></li>
                     <li><a href=""><PulsaAppIcon /></a></li>
                   </ul>
                </div>
                <div>
                  <p><span>Tell us about yourself and your business.</span></p>
                <p>
                 nGen Works is a digital creative firm that provides web design,
                 web development and internet marketing consulting services to clients in the U.S. and abroad.
                 We are an unwavering proponent of the user experience, putting people before technology.
                 We’re also the creators of Happy Webbies and like to drink beer. And play video games.
                </p>
                <p>
                 Carl Smith is the founding member of nGen Works,
                 a digital creative firm that has been building some of the world’s finest hand-crafted websites since 2003.
                 Carl has made a name for himself in the web world by always defending
                 the needs and wants of the end-user. He has been privileged to lead teams that
                 have been awarded the New York Art Directors Award For Interactive Development,
                 The Hospitality Industry’s Best of Show Award, two National C.A.S.E. awards for Educational Web Development.
                 He has also been featured in Kelly Goto’s best selling book Web Redesign: Workflow That Works.
                 Carl spends most of his free time complaining about sites that say “click here,”
                 chasing his daughters, and praying they never make Spiderman 4.
                </p>
                <p><span>What were the reasons that lead you to start using Pulse?</span></p>
                <p>
                 I started using Pulse to kill that sick feeling in my stomach when I didn’t know if we would make payroll.
                 Being in an industry full of 50/50 payment projects, or getting paid in thirds,
                 it can be super confusing when money will come in. Receivables don’t tell half the story,
                 or even a third sometimes. So I went looking for a solution and low and behold I found Pulse.
                </p>
                <p className="small">
                 Ultimately [Pulse] helps me see potential outcomes as I play with “what if” scenarios.
                </p>
                <p><span>Describe how you use Pulse and how it fits within your accounting workflow.</span></p>
                <p>
                 Basically I use Pulse separately from our accounting system.
                 As the business owner, it’s really my toy and my baby.
                 I manually update when it looks like cash will come in and variations in payables.
                 Sometimes I look at how cashflow from a project will impact us and decide if we really want a project,
                 or if a client starts acting up what the impact will be if we walk away.
                 Thanks to Pulse I know right now we’re solid through May of 2010 so we can take 2
                 weeks off as a company at the end of the year. Without Pulse I might not be as confident in that decision.
                 It also helps when looking at employee bonuses and planning for conferences.
                 Ultimately it helps me see potential outcomes as I play with “what if” scenarios.
                </p>
                <p><span>What do you like most about Pulse?</span></p>
                <p>
                 The flexibility. It’s so easy to add or remove a project,
                 or shift a receivable or expense. It’s also easy on the eyes which is a plus for us.
                 It’s funny, but I’ve shown it to colleagues and clients because
                 I think it helps position us as a smart business. Hopefully I’ve turned a lot of people onto Pulse.
                </p>
                <p className="small">
                 It’s funny, but I’ve shown it to colleagues and clients because
                 I think it helps position us as a smart business.
                </p>
                <p><span>How has Pulse helped your business?</span></p>
                <p>
                 Pulse makes nGen Works smarter. We make better decisions because we can see further.
                 You could say it’s lowered our stress level by removing the fear of not knowing.
                </p>
                <p><span>Is there anything else you’d like to add?</span></p>
                <p className="border-bottom">
                 I speak quite a bit about establishing trust with users, and I use Pulse as an example.
                 I asked you to provide the ability to zero out over a year ago and you ended up adding that feature in.
                 You had me as a customer at that point because you listened.
                </p>
                </div>
            </div>
            <h1 className="h1">Related Stories</h1>
            <div className="related-stories">
                <div>
                
                    <Link to="/customer-stories/case-study-boldunderline">
                      <h3>How boldUnderline Uses Pulse to Stay Financially Strong</h3>
                      <p>
                         Pulse helps us monitor the heart rate of our business and
                         reconcile our monthly operational expenses
                      </p>
                    <span>Read More→</span>
                    </Link>
                
                </div>
                <div>
                
                    <Link to="/customer-stories/case-study-bureau-of-digital">
                         <h3>Bureau of Digital Uses Pulse to Control Cash Flow</h3>
                         <p>
                             After using Pulse at his previous agency,
                             Carl came back to Pulse because it gives him a feeling of control over his business.
                         </p>
                         <span>Read More→</span>
                    </Link>
                
                </div>
                <div>
                    <Link to="/customer-stories/case-study-realtyninja">
                         <h3>How RealtyNinja Uses Pulse to Avoid Stress About Cash Flow</h3>
                         <p>
                             Casimir Loeber from RealtyNinja tells us how Pulse takes the
                             'fear and stress out of cash flow projection and management.'
                         </p>
                         <span>Read More→</span>
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
