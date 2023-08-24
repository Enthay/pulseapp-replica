import { Link } from "react-router-dom"
import { CustomerArticleFlex } from "../components/customer stories/CustomerArticleFlex"
import { CustomerSectionFlex } from "../components/customer stories/CustomerSectionFlex"


export const CustomerStory = () => {
  return (
    <div className='customer'>
      <section>
        <h1>See What Our Customers Are Saying About Pulse.</h1>
        <CustomerSectionFlex />
      </section>
      <article>
        <p>
         Have something to say about Pulse? We’d love to hear it. <a href="mailto:thobeeee@gmail.com"> Tell us your story</a>
        </p>
        <CustomerArticleFlex />
      </article>
      <div className="foot">
        <Link to="/plus">
          Sign Up for a Free 30-Day Trial →
        </Link>
      </div>
    </div>
  )
}
