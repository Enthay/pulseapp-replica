import { Link } from "react-router-dom"

export const SignUp = () => {
  return (
    <div className='plus'>
        <header>
          <Link to="/"><img width={150} src="./data/pulselogo.svg" alt="pulse logo" /></Link>
          <p>Take control of your cash flow with the #1 cash flow software.</p>
        </header>
         <form action="submit">
           <div className="top">
            <div className="left">            
                <div className="upper">
                <div className="div">
                 <label htmlFor="firstname">First Name</label>
                 <input type="text" name="firstname" required />
                </div>
                <div className="div">
                 <label htmlFor="lastname">Last Name</label>
                 <input type="text" name="lastname" required />
                </div>
                <div className="div">
                 <label htmlFor="mail">Email</label>
                 <input type="email" name="email" required />
                </div>
                <div className="div">
                 <label htmlFor="companyname">Company Name</label>
                 <input type="text" name="companyname" required />
                </div>
                <div className="div">
                 <label htmlFor="createpassword">Create a Password</label>
                 <input type="password" name="createpassword" required />
                </div>
                <div className="div">
                 <label htmlFor="confirm">Confirm Password</label>
                 <input type="password" name="confirm" required />
                </div>
                </div>
                <div className="foot">
                 <p>Your Pulse Site Address</p>
                 <small>Every Pulse account has its own unique web address where you'll log in. Remember to bookmark it!</small>
                 <div className="unique-flex">
                   <input type="text" />
                   <span>.pulseapp.com</span>
                 </div>
                 <small>Letters and numbers only, no spaces.</small>
                </div>
            </div>
            <div className="right">
              <div className="first">
                <h1>Pulse Plus</h1>
                <p>Free Trial • $59/mo after</p>
              </div>
              <div className="second">
                <div className="second-flex">
                 <h1>"Pulse takes the fear and<br/> stress out of cash flow<br/> projection and<br/> management.”</h1>
                 <img src="./data/images/blog-casimir.jpg" alt="" />
                </div>
                <p>CASIMIR LOEBER</p>
                <span>BASE-10 DESIGN & DEVELOPMENT INC.</span>
              </div>
              <div className="third">
                <h1>Need more from Pulse?</h1>
                <p>
                 If you have a complex business with multiple financial accounts, currencies, or auditing needs,
                 you should try our Pulse Unlimited plan for only $30 more per month.
                </p>
                <Link to="">Switch now.</Link>
              </div>
            </div>
           </div>
           <div className="middle">
              <h1>Billing Information </h1>
              <img src="./data/images/lock-icon.png" alt="icon of a lock" />
            </div>
           <div className="bottom">
             <div className="left">
               <div className="div">
                 <label htmlFor="nameOnCard">Name on Card</label>
                 <input type="text" name="nameOnCard" required/>
               </div>
               <div className="div">
                 <label htmlFor="card-input">Credit or Debit Card</label>
                 <div className="flexed-input" name="card-input">
                   <input type="number" placeholder="Card number" required />
                   <input type="date" required />
                 </div>
                </div>
                <p>All data and transactions are securely stored and processed using industry standards.</p>
             </div>
             <div className="right">
                <h1>Cancel any time.</h1>
                <p className="p">
                 Your first month is free, but we ask for your credit card upfront to prevent an interruption in service.
                 We won't charge you until the end of your 30-day free trial.
                </p>
                <p>
                 We'll email you reminders before your free trial is up,
                 and we'll send you invoices each month when we charge your card.
                </p>
             </div>
           </div>
           <div className="end">
            <div className="first">
              <p>
               You’re signing up for a free 30-day trial of the Plus plan.
               At the end of the trial on July 8 we’ll charge you $59 a month to keep using Pulse,
               and you can <a href="">cancel any time</a>.
              </p>
            </div>
            <div className="second">
              <div>
                <input type="checkbox" name="terms" required="YOU MUST AGREE TO THE TERMS OF USE." />
                <label htmlFor="terms"> I have read and agree to Pulse's <Link to="">Terms of Use</Link></label>
              </div>
              <div>
                <input name="policy" type="checkbox" required="YOU MUST AGREE TO THE PRIVACY POLICY." />
                <label htmlFor="policy"> I have read and agree to Pulse's <Link to="">Privacy Policy</Link></label>
              </div>
              <div>
                <input name="optional" type="checkbox" />
                <label htmlFor="optional"> I want to receive a <Link to="" >monthly newsletter </Link>with helpful cash flow advice</label>
              </div>
            </div>
            <div className="third">
              <button type="submit">Start Trial</button>
            </div>
           </div>
          </form>
          <footer>
            <div>Pulse is a clone of <a href="https://pulseapp.com">pulseapp.com</a> made by <a href="">thobee.com</a>, a front-end web developer. </div>
            <div>
            &copy; 2019 Pulseapp.com, Inc. All Rights Reserved | 
             <Link to=""> Terms of Use</Link> | 
             <Link to=""> Privacy Policy</Link> | 
             <Link to=""> EU Privacy</Link>
            </div>
          </footer>
    </div>
  )
}

