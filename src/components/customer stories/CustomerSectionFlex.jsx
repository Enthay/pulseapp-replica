import { Link } from "react-router-dom"

export const CustomerSectionFlex = () => {
  return (
    <div className="customer-flex">
          <div>
            <Link to="/customer-stories/case-study-realtyninja">
            <img src="./data/images/blog-casimir.jpg" alt="" />
            </Link>
            <p>
            “Casimir Loeber from RealtyNinja tells us how Pulse takes the 
            'fear and stress out of cash flow projection and management.'”
            </p>
            <span>HOW REALTYNINJA USES PULSE TO AVOID STRESS ABOUT CASH FLOW</span>
            <Link to="/customer-stories/case-study-realtyninja">Read Case Study →</Link>
          </div>
          <div>
            <Link to="/customer-stories/case-study-boldunderline">
              <img src="./data/images/boldunderline-sopi.jpg" alt="" />
            </Link>
            <p>
            “Pulse helps us monitor the heart-rate of our business and reconcile our monthly operational expenses.”
            </p>
            <span>HOW BOLDUNDERLINE USES PULSE TO STAY FINANCIALLY STRONG</span>
            <Link to="/customer-stories/case-study-boldunderline">Read Case Study →</Link>
          </div>
          <div>
            <Link to="/customer-stories/case-study-ngen-works">
              <img src="./data/images/ngen-crop.jpg" alt="" />
            </Link>
            <p>
            “Pulse gives the folks at nGen Works confidence in their cash flow.”
            </p>
            <span>HOW NGEN WORKS USES PULSE TO MAKE BETTER BUSINESS DECISIONS</span>
            <Link to="/customer-stories/case-study-ngen-works">Read Case Study →</Link>
          </div>
          <div>
            <Link to="/customer-stories/case-study-bureau-of-digital">
              <img src="./data/images/Carl_Smith.jpg" alt="" />
            </Link>
            <p>
             “After using Pulse at his previous agency, 
             Carl came back to Pulse because it gives him a feeling of control over his business.”
            </p>
            <span>BUREAU OF DIGITAL USES PULSE TO CONTROL CASH FLOW</span>
            <Link to="/customer-stories/case-study-bureau-of-digital">Read Case Study →</Link>
          </div>
        </div>
  )
}
