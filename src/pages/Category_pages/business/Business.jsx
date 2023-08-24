import { Link } from "react-router-dom"
import { BlogNav } from "../../../components/Blog/BlogNav"

export const Business = () => {
  return (
    <div className="blog-layouts">
        <h1>Business</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
            <div className="blog">
            <div>
              <Link to="/blog/streamline-your-operations-for-success-how-jonathan-saeidian-went-from-2-000-to-a-7-figure-business">
               <img src="../../data/images/business1.png" alt="" />
               <section>
                 <span>BUSINESS</span>
                 <h3>Streamline Your Operations for Success: How Jonathan Saeidian Went From $2,000 to a 7-Figure Business</h3>
                 <p>
                   Jonathan Saeidian started Brenton Way with $2,000.
                   Now his marketing agency is a 7-figure business. Here’s how he did it.
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
