
import { LeftIcon, RightIcon } from '../assets/HomepageSvg'
import { BlogNav } from '../components/Blog/BlogNav'
import { Link, NavLink, Outlet, useLocation, useNavigate} from 'react-router-dom'

export const BlogLayouts = () => {
  const currentNumber = Number(window.location.pathname.replace(/\D/g, "")); 
  const nextNumber = currentNumber + 1;
  const prevNumber = currentNumber - 1; 
  const nextPathname = window.location.pathname.replace(currentNumber, nextNumber); 
  const prevPathname = window.location.pathname.replace(currentNumber, prevNumber);

  const locale = useLocation();
  const navigate = useNavigate();
  const click = (e) => {
    if(locale.pathname === '/blog/'){
      e.preventDefault();
      navigate('/blog/page/2')
    } else if(locale.pathname === '/blog/page/5'){
      e.preventDefault();
    }
  }

  const cli = (e) => {
    if(locale.pathname === '/blog/'){
      e.preventDefault();
    } 
  }

  return (
    <div className="blog-layouts">
        <h1>Blog</h1>
        <div className="container">
         <div className="left">
          <BlogNav />
         </div>
         <div className="right">
          <Outlet />
         </div>
        </div>
        <nav>
          <ul>
            <Link to={prevPathname} onClick={cli} style={{marginTop: "-5px"}}><li><LeftIcon /></li></Link>
            <NavLink to="./"><li>1</li></NavLink>
            <NavLink to="page/2"><li>2</li></NavLink>
            <NavLink to="page/3"><li>3</li></NavLink>
            <NavLink to="page/4"><li>4</li></NavLink>
            <NavLink to="page/5"><li>5</li></NavLink>
            <Link onClick={click} to={nextPathname}><li style={{marginTop: "-5px"}}><RightIcon /></li></Link>
          </ul>
        </nav>
    </div>
  )
}