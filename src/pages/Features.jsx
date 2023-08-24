import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const animationOne = {
  start: {
    y: [0,35,20,0,10,0],
    x: [0,20,30,0,30,15,5,0],
    transition: {
      x:{repeat: Infinity, duration: 10, ease: 'easeInOut'},
      y:{repeat: Infinity, duration: 20, ease: 'easeInOut'}
    }
  }
}
const animationTwo = {
    start: {
      y: [0,10,-10,-35,0,10,0],
      x: [0,5,15,30,0,30,20,10,0],
      transition: {
        x:{repeat: Infinity, duration: 10, ease: 'easeInOut'},
        y:{repeat: Infinity, duration: 20, ease: 'easeInOut'}
      }
  }
}
const animationThree = {
  start: {
    y: [0,-10,-5,0,10,20,0],
    x: [0,15,20,25,30,20,10,5,0],
    transition: {
      x:{repeat: Infinity, duration: 10, ease: 'easeInOut'},
      y:{repeat: Infinity, duration: 20, ease: 'easeInOut'}
    }
  }
}
const animationFour = {
  start: {
    y: [0,10,5,0,-10,5,0],
    x: [0,15,30,0,25,15,5,0],
    transition: {
      x:{repeat: Infinity, duration: 15, ease: 'easeInOut'},
      y:{repeat: Infinity, duration: 25, ease: 'easeInOut'}
    }
  }
}
const animationFive = {
  start: {
    y: [0,10,20,0,-30,0],
    x: [0,20,30,0,30,15,5,0],
    transition: {
      x:{repeat: Infinity, duration: 10, ease: 'easeInOut'},
      y:{repeat: Infinity, duration: 20, ease: 'easeInOut'}
    }
  }
}
const animationSix = {
  start: {
    y: [0,-10,-20,0,-50,0],
    x: [0,-20,-30,0,30,-15,-5,0],
    transition: {
      x:{repeat: Infinity, duration: 15, ease: 'easeInOut'},
      y:{repeat: Infinity, duration: 18, ease: 'easeInOut'}
    }
  }
}
const animationSeven = {
  start: {
    y: [0,-10,-20,0,-20,0],
    x: [20,30,0,30,-15,5,20],
    transition: {
      x:{repeat: Infinity, duration: 12, ease: 'easeInOut'},
      y:{repeat: Infinity, duration: 22, ease: 'easeInOut'}
    }
  }
}


export const Features = () => {
  return (
    <div className="features">
      <header>
        <h1>Need an accurate financial forecast?</h1>
        <h2>Use Pulse to project your cash flow with confidence.</h2>
        <p className="blue-btn">
          <Link to="plus">Try 30 Days Free</Link>
        </p>
      </header>
      <div className="article-1">
        <div className="top-flex">
          <h1>Manage your cash flow.</h1>
          <video src="./data/videos/video_2023-05-17_12-29-54.mp4" autoPlay loop></video>
          <img src="./data/images/video1.jpg" alt="" />
        </div>
        <div className="bottom-flex">
          <div>
            <h3>Enter your cash flow projections</h3>
            <p>Add single income or expenses to your cash flow for complete control.</p>
          </div>
          <div>
            <h3>Automate recurring entries</h3>
            <p>Reduce manual entry with powerful recurring income and expense logic.</p>
          </div>
          <div>
            <h3>View Detailed Transactions</h3>
            <p>Add multiple lines to a single item to make your cash flow easy to understand.</p>
          </div>
          <div>
            <h3>Adjust past transactions</h3>
            <p>If something needs to be edited, you can do that to any entry, at any time.</p>
          </div>
          <div>
            <h3>Dial in growth and expense curves</h3>
            <p>Anticipating some growth? Pulse can automate that, too.</p>
          </div>
          <div>
            <h3>Play with scenarios</h3>
            <p>Quickly see what would happen to your bottom line by toggling income and expenses on and off.</p>
          </div>
        </div>
      </div>
      <div className="article-2">
        <div className="top-flex">
          <h1>Visualize your income and expenses.</h1>
          <video src="./data/videos/vid2.mp4" autoPlay loop></video>
          <img src="./data/images/video2.jpg" alt="" />
        </div>
        <div className="bottom-flex">
          <div>
            <h3>Track you cash flow over any time range</h3>
            <p>Monitor your cash flow by week, month, or custom date range. 
              Check your cash on hand at the beginning of each month and view each day’s incoming and outgoing funds.
            </p>
          </div>
          <div>
            <h3>Organize cash flow into categories</h3>
            <p>Know where your money’s coming from and going.</p>
          </div>
          <div>
            <h3>Group cash flow by customer</h3>
            <p>Know who your best (and worst) customers will be.</p>
          </div>
          <div>
            <h3>Group cash flow by project</h3>
            <p>Quickly measure potential profitability on a project basis.</p>
          </div>
        </div>
      </div>
      <div className="foot">
        <Link to="/plus">
          Sign Up for a Free 30-Day Trial →
        </Link>
      </div>
      <div className="article-3">
        <div className="top-flex">
          <h1>Connect your accounting software.</h1>
          <video src="./data/videos/vid-3.mp4" autoPlay loop></video>
          <img src="./data/images/video3.jpg" alt="" />
        </div>
        <div className="bottom-flex">
          <div>
            <h3>Quickbooks Online Integration</h3>
            <p>Sync at any time to get the latest transactions from QuickBooks Online.</p>
          </div>
          <div>
            <h3>Compare actuals and projections</h3>
            <p>By putting your accounting data right alongside your cash flow projections, 
              you can compare your projections with your actual cash flow.
            </p>
          </div>
          <div>
            <h3>Less manual entry and errors</h3>
            <p>With a direction connection, you don’t have to worry about messing anything up.</p>
          </div>
        </div>
      </div>
      <div className="article-4">
        <div className="top-flex">
          <div><h1>Share your projections.</h1></div>
          <div style={{margin: "100px"}}></div>
          <motion.div animate="start">
            <motion.p>
             <motion.img src="./data/images/animatedimage1.jpg" alt="" style={{width: "20%"}} variants={animationOne} />
             <motion.img src="./data/images/animatedimage2.jpg" alt="" style={{width: "13%", height: "13%"}} variants={animationTwo}/>
             <motion.img src="./data/images/animatedimage3.jpg" alt="" style={{width: "17%", height: "17%"}} variants={animationThree}/>
            </motion.p>
            <p>
             <motion.img src="./data/images/animatedimage4.jpg" alt="" style={{width: "20%"}} variants={animationFour}/>
             <motion.img src="./data/images/animatedimage5.jpg" alt="" style={{width: "13%", height: "13%"}} variants={animationFive}/>
            </p>
            <p >
             <motion.img src="./data/images/animatedimage6.jpg" alt="" style={{width: "17%", height: "17%"}} variants={animationSix}/>
             <motion.img src="./data/images/animatedimage7.jpg" alt="" style={{width: "40%"}} variants={animationSeven}/>
            </p>
          </motion.div>
        </div>
        <div className="bottom-flex">
          <div>
            <h3>Invite collaborators</h3>
            <p>Share the work load with your team by inviting them to manage cash flow with you.</p>
          </div>
          <div>
            <h3>Share with investors</h3>
            <p>We offer read-only access so you can share cash flow 
              projections with people who don’t need to make changes.
            </p>
          </div>
          <div>
            <h3>Attach files</h3>
            <p>Include proposals, 
              invoices and contracts with transactions to audit or help evaluate income and expenses.
            </p>
          </div>
          <div>
            <h3>Export data and print reports</h3>
            <p>Easily export your cash flow data from Pulse to a CSV file.</p>
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

