import { Link, NavLink } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"
import { LeftIcon, RightIcon } from "../../../assets/HomepageSvg"

export const SmallBusinessPage2 = () => {
  return (
    <div className="blog-layouts">
        <h1>Small Business</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog">
            <div>
              <Link to="/blog/5-ways-to-spend-less-and-make-more">
               <img src="../../../data/images/blogg1.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>5 Ways To Spend Less and Make More</h3>
                 <p>
                   Want to make more money? Stop spending it. “A penny saved is a penny earned,” said every grandparent ever.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/three-quick-tips-for-growing-your-online-business">
               <img src="../../../data/images/blog7.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>Three Quick Tips for Growing Your Online Business</h3>
                 <p>
                   Since Simple Focus has taken over Pulse, we've grown over 50% in customer base and almost doubled in revenue.
                   Here's what we did to make that happen.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/the-five-most-important-budget-line-items-for-creative-agencies">
               <img src="../../../data/images/blo9.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>The Five Most Important Budget Line Items for Creative Agencies</h3>
                 <p>
                   Financial ratios matter for your business.
                   Here are the ones that matter the most for creative agencies.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            <div>
              <Link to="/blog/four-cash-flow-bedtime-stories-to-help-you-sleep-better-at-night">
               <img src="../../../data/images/blo10.png" alt="" />
               <section>
                 <span>SMALL BUSINESS</span>
                 <h3>Four Cash Flow Bedtime Stories to Help You Sleep Better at Night</h3>
                 <p>
                   Cash flow problems keep many business owners up at night.
                   That’s why we wrote these little bedtime stories to help you rest easy.
                 </p>
                 <small>Read More →</small>
               </section>
              </Link>
            </div>
            </div>
         </div>
        </div>
        <nav>
            <ul>
             <Link to="/category/small-business"><li style={{marginTop: "-5px"}}><LeftIcon /></li></Link>
             <Link to="/category/small-business"><li>1</li></Link>
             <NavLink onClick={(e)=> e.preventDefault()} to=""><li>2</li></NavLink>
             <li style={{marginTop: "-5px"}}><RightIcon /></li>
            </ul>
          </nav>
    </div>
  )
}
