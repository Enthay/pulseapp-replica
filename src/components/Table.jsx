import { Link } from 'react-router-dom'

export const Table = () => {
  return (
    <div className='table'>
        <ul>
         <li>Product</li>
         <li><Link to='features'>Features</Link></li>
         <li><Link to='pricing'>Pricing</Link></li>
         <li><Link to='plus'>Sign Up</Link></li>
        </ul>
        <ul>
         <li>Company</li>
         <li><Link to='customer-stories'>Customer Stories</Link></li>
         <li><Link to='about'>About</Link></li>
         <li><Link to='about'>Contact</Link></li>
        </ul>
        <ul className='three'>
         <li>Resources</li>
         <li><Link to='/'>Support</Link></li>
         <li><Link to='blog/'>Blog</Link></li>
        </ul>
    </div>
  )
}
