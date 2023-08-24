import { Link } from "react-router-dom";
import { FacebookIcon } from "../../assets/FacebookIcon";
import { TwitterIcon } from "../../assets/TwitterIcon";
import { LinkedInIcon } from "../../assets/LinkedInIcon";
import { TelegramIcon } from "../../assets/TelegramIcon";
import { PulsaAppIcon } from "../../assets/PulsaAppIcon";

import React from 'react'

export const ValonDetails = () => {
  return (
    <div className="customer-details-container">
        <div className="customer-details">
           <h1>How boldUnderline Uses Pulse to Stay Financially Strong</h1>
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
                    <p>
                     A couple of weeks ago we asked for companies using Pulse to help us out by
                     becoming a case study for how they use Pulse.
                     The first in the series comes from Valon Sopi, founder of <a href="https://boldunderline.com/">boldUnderline.com</a>.
                    </p>
                  <p><span>Tell us about yourself and your business.</span></p>
                <p>
                 Valon Hi. My name is Valon Sopi and I am a university educated graphic and web user interface designer.
                 I am also the founder of boldUnderline,
                 LLC in Prishtina (Republic of Kosova) - a boutique web-design studio that creates aesthetic and
                 functional websites for clients in the public and private sector.
                </p>
                <p><span>What were the reasons that lead you to start using Pulse?</span></p>
                <p>
                 Our finances were all over the place.
                 Complicated Excel sheets, hand-written calculations, imaginary forecasts, self-created charts,
                 and periodic walks to the bank, just to name a few, were how money was managed.
                </p>
                <p>
                 As a business owner I wanted our financial department to be the leading catalyst in our daily operations,
                 because I knew from experience that a healthy cash-flow leads to a great product and service. So,
                 to stay competitive and financially strong we had to start searching for a robust application
                 that was free of clutter and without all the distracting bells and whistles.
                 Once we signed up for Pulse, it didn’t take long to commit.
                </p>
                <p className="small">
                 One of my personal favorites in Pulse, is the ‘Week View’ of Cash Flow,
                 which is a magnified version of the Monthly approach.
                </p>
                <p><span>Describe how you use Pulse and how it fits within your accounting workflow.</span></p>
                <p>
                 We use Pulse for two reasons. The first is one is to monitor the actual cash-flow of our
                 firm and the second one is to forecast and plan our firm’s financial future.
                </p>
                <p>
                 As for the first one: Pulse helps us monitor the heart-rate of our business and reconcile our monthly operational expenses.
                 What this does is assist us in scheduling each incoming payment accordingly
                 and know exactly what to charge and what discounts we can afford.
                </p>
                <p>
                 As for the second: Pulse helps us measure up various projections
                 in regards to generating new business and hiring new staff.
                 By simply entering our data in Pulse we can forecast in real-time the firm’s financial future.
                </p>
                <p>
                 Also, we can monitor our profits and expenses for each specific project.
                 This in turn helps us become more agile in our pricing practices and stay competitive in the market.
                </p>
                <p><span>What do you like most about Pulse?</span></p>
                <p>
                 Before deciding on going with Pulse I was personally testing out few other web applications
                 that offered somewhat of a similar service. However,
                 what I noticed in all of them was that they all lacked the intuitive user interface,
                 which ranked Pulse way above of its competition. The ease of use,
                 creating new categories on the fly, marking payments as one time or repeated,
                 are just a few elements that help us sustain the financial health of our firm.
                </p>
                <p>
                 One of my personal favorites in Pulse,
                 is the ‘Week View’ of Cash Flow, which is a magnified version of the Monthly approach.
                 This screen tells us the exact date of all incoming and outgoing payments,
                 which in turn guides us with our financial undertakings.
                </p>
                <p>
                 Also, reports, visual charts, cash-on-hand (beginning of the month),
                 and other nicely designed and functional perks make me a devoted fan of Pulse.
                </p>
                <p className="small">
                 Overall, using Pulse is almost like having a full-time financial advisor for a very small monthly fee.
                </p>
                <p><span>How has Pulse helped your business?</span></p>
                <p>
                 Pulse teaches us how to talk money within the firm as well as with our clients.
                 It helps us know how far we can push financially,
                 and where our limits are, without compromising our firm’s overall financial goals.
                </p>
                <p>
                 Overall, most of our income depends on the time it takes to finish a task.
                 In this sense Pulse is a perfect assistant that helps us stay afloat and explore new waters.
                </p>
                <p><span>Is there anything else you’d like to add?</span></p>
                <p>
                 Pulse is a great tool that is constantly upgrading with each new release.
                 The guys at Pulse truly know their stuff. Overall, using Pulse is almost like having a full-time financial
                 advisor for a very small monthly fee. Any business of our size, freelancer,
                 or even a bigger firm can reap the benefits of Pulse and know exactly where the money is.
                </p>
                <p className="border-bottom">
                 You have no idea how a simple and specific financial picture can put your business for that much more ahead.
                </p>
                </div>
            </div>
            <h1 className="h1">Related Stories</h1>
            <div className="related-stories">
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
                <div>
                
                    <Link to="/">
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
