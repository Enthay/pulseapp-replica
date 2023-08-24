import { Link } from "react-router-dom";
import { FacebookIcon } from "../../assets/FacebookIcon";
import { TwitterIcon } from "../../assets/TwitterIcon";
import { LinkedInIcon } from "../../assets/LinkedInIcon";
import { TelegramIcon } from "../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../assets/PulsaAppIcon";

export const CasamirDetails = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>How RealtyNinja Uses Pulse to Avoid Stress About Cash Flow</h1>
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
                  My name is Casimir Loeber and I am co-founder of RealtyNinja.
                  We are a creative agency that specializes in custom web design and development,
                  print and graphic design.
                  We are a tight team that prides itself in our agility and ability to come up with a
                  solution to almost any
                  visual or technical problem.
                  We are located in Vancouver, B.C. Canada and serve clients around the globe.
                </p>
                <p><span>What were the reasons that lead you to start using Pulse?</span></p>
                <p>
                  As most entrepreneurs will know, there are never enough hours in the day to do the work that pays
                  the bills, let alone the behind the scenes work most of us hate to do.
                  Both my business partner and myself knew from the beginning that we were not the accountant
                  types or even good bookkeepers. What we did know how to do was preserve the paper trail and
                  plug numbers into websites. This lead us to pulse which allowed us to visualize our cash
                  flow before our brains turned to snow with receipts, spread sheets and accordion folders.
                </p>
                <p className="small">
                   If we have a large prospect on the horizon we take 2 seconds to
                   put it in Pulse to see how it effects us; simple as that.
                </p>
                <p><span>Describe how you use Pulse and how it fits within your accounting workflow.</span></p>
                <p>
                  Before we had a bookkeeper we would simply export our invoice totals from our
                  invoicing system (Freshbooks!) and enter these values as income in pulse.
                  We were pretty good with our expense paper trails and would just go through our
                  credit card and cheque book for these values. As things started to ramp up and consume more time,
                  we hired a bookkeeper and gave her the keys to our pulse account.
                  She was able to pick it up in no time and now all we do is log in
                  every couple of days to see where we are, where we are headed and where we came from.
                  If we have a large prospect on the horizon we take 2 seconds to put it in
                  pulse to see how it effects us; simple as that.
                </p>
                <p><span>What do you like most about Pulse?</span></p>
                <p>
                  What I like most about pulse is that it turns something that is very number
                  heavy and hard to visualize into something that is easy to look at.
                  I can take a quick look at my Pulse account and see exactly where we miscalculated
                  on a quote and how long it took us to recover from that.
                  The reporting functionality is definitely the strong point with pulse
                  and has the potential to be expanded in many great directions.
                </p>
                <p className="small">
                  I can take a quick look at my Pulse account and see exactly where
                  we miscalculated on a quote and how long it took us to recover from that.
                </p>
                <p><span>How has Pulse helped your business?</span></p>
                <p>
                  Pulse has taken the fear and stress out of cash flow projection and management.
                  It has seriously made it so that I can sleep better knowing that I am not going to
                  randomly run out of cash tomorrow. It is easy to learn and easy to teach,
                  so integrating it into our work flow was not an issue at all.
                </p>
                <p><span>Is there anything else you’d like to add?</span></p>
                <p className="border-bottom">
                  I want to say 2 last things.
                  The first being that seeing the blue line climb upwards and the green bars tower over the red,
                  makes me want to dance. Secondly, I can’t wait to see what the people at Pulse will cook up next.
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
                    <Link to="/customer-stories/case-study-ngen-works">
                         <h3>How nGen Works Uses Pulse to Make Better Business Decisions</h3>
                         <p>Pulse gives the folks at nGen Works confidence in their cash flow.</p>
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
