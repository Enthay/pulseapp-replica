import { Link } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"


export const New = () => {
  return (
    <div className="blog-layouts">
        <h1>News</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog">
                <div>
                 <Link to="/blog/10-ways-to-sabotage-your-business">
                    <img src="../../data/images/blogg4.png" alt="" />
                    <section>
                        <span>NEWS</span>
                        <h3>10 Ways to Sabotage Your Business</h3>
                        <p>
                         Are you making these easy-to-solve small business mistakes?
                         Many small business owners make the same errors every year. You’re smarter than them.
                        </p>
                        <small>Read More →</small>
                   </section>
                   </Link>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}
