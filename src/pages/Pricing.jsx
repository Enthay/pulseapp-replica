import { Link } from "react-router-dom"


export const Pricing = () => {
  return (
    <div>
      <div className="pricing">
      <header>
      <h1>Try Pulse free for 30 days.</h1>
      <p>
       See why Pulse is the best way to monitor your cash flow. Sign up
       for any plan and try Pulse absolutely free for 30 days.
      </p>
      </header>
      <section className="sec-1">
        <div className="left">
          <h2>These are what we call the Pulse Basics. They're what every customer gets.</h2>
          <ul>
            <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
            <li>Forecast growth with recurring income or expenses that scale automatically</li>
            <li>Works with any currency</li>
            <li>See Money In and Money Out, categorize transactions, and run helpful reports</li>
            <li>Toggle entries and accounts on and off to game out different scenarios</li>
          </ul>
          <p>Just need the Pulse Basics? <br /><Link to="plus">Get them now </Link>for $29 per month</p>
        </div>
        <div className="center">
          <Link to="/plus">
           <p>RECOMMENDED</p>
           <h1>Small Business Plan <span>$59m per month</span></h1>
           <div className="btn-pricing-container">
            <button className="btn-pricing">Sign Up Now</button>
           </div>
           <h3>YOU GET PULSE BASICS, PLUS:</h3>
           <ul>
            <li>Manage cash flow across multiple financial accounts</li>
            <li>Invite your investors, book keeper, or 
             management team to see reports or manage cash flow
            </li>
            <li>Integrate with QuickBooks Online for more accurate cash flow</li>
            <li>Track your actual cash flow alongside your projected cash flow</li>
           </ul>
           <div className="hidden-btn-container">
            <button className="hidden-btn">Sign Up Now</button>
           </div>
          </Link>
        </div>
        <div className="right">
          <Link to="/premium">
           <p>Complex business with multiple financial accounts, currencies, or auditing needs?</p>
           <h1>Unlock Extra features <span>$89m per month</span></h1>
           <div className="btn-pricing-container">
            <button className="btn-pricing">Try Premium</button>
           </div>
           <h3>GET IT ALL, PLUS:</h3>
           <ul>
            <li>Manage cash flow across unlimited financial accounts</li>
            <li>Convert to any currency for localized cash flow reporting and projections</li>
            <li>Attach invoices or contracts to your cash flow entries for accountability and auditing</li>
           </ul>
           <div className="hidden-btn-container">
           <button className="hidden-btn">Try Premium</button>
           </div>
          </Link>
        </div>
      </section>
      <section className="sec-2">
        <p>
        <img src="https://pulseapp.com/img/subvert-avatar.png" srcSet="https://pulseapp.com/img/subvert-avatar.png,
          https://pulseapp.com/img/subvert-avatar@2x.png 2x" alt="" />
        </p>
        <h2>
        “Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”
        </h2>
        <span>SUBVERT MARKETING, INC.</span>
      </section>
    </div>
    <div>
    <article className="arti-container">
        <h1>FAQ</h1>
        <div className="flex-article">
          <div>
            <h3>How does the 30-day free trial work?</h3>
            <p>
            You can use Pulse absolutely free for 30 days. After 30 days, 
            we will charge the credit card you used when you sign up. 
            If you choose to cancel your account before your trial ends, your card will not be charged.
            </p>
          </div>
          <div>
            <h3>If I upgrade an existing account, do I get another free trial?</h3>
            <p>
            Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, 
            your credit card will be billed the new amount on the date of your next billing cycle.
            </p>
          </div>
          <div>
            <h3>What is a “Financial Account”?</h3>
            <p>
            Financial Accounts are a grouping of income and expense items 
            that can be used for tracking or reporting purposes.
            </p>
          </div>
          <div>
            <h3>Do I have to commit to a long-term contract?</h3>
            <p>
            No. There is no contract when you use Pulse, other than agreeing to our Terms of Service.
            </p>
          </div>
          <div>
            <h3>Will I be able to cancel my account if I don’t use Pulse?</h3>
            <p>
            Yes – you can cancel your account at any time. To cancel your account, 
            go to your billing page and click on “Please cancel my account” at the bottom of the page. 
            The account owner is the only one who can cancel an account. 
            An email request to delete an account is not considered cancellation.
            </p>
          </div>
          <div>
            <h3>What types of payments do you accept?</h3>
            <p>
            We accept payments made online using Visa, Mastercard, Discover, and American Express.
            </p>
          </div>
        </div>
      </article>
    </div>
    </div>
  )
}
