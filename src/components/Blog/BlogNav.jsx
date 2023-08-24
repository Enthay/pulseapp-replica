import { Link } from "react-router-dom"

export const BlogNav = () => {
  return (
    <div className="blog-nav">
        <h3>Categories</h3>
        <ul>
            <li><Link to="/category/news">News (1)</Link></li>
            <li><Link to="/category/business">Business (1)</Link></li>
            <li><Link to="/category/pro-tips">Pro Tips (9)</Link></li>
            <li><Link to="/category/small-business">Small Business (13)</Link></li>
            <li><Link to="/category/entrepreneurship">Entrepreneurship (4)</Link></li>
            <li><Link to="/category/cash-flow-basics">Cash Flow Basics (7)</Link></li>
            <li><Link to="/category/survive-thrive">Survive & Thrive (5)</Link></li>
            <li><Link to="/category/hustle-cash-flow">Hustle & Cash Flow (2)</Link></li>
        </ul>
    </div>
  )
}
