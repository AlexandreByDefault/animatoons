import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    
    return (
        <nav role='navigation' className={'header'}>
   <Link href='/'>
    <a className="logo">Animatoons</a> 
    </Link>


   <input type="checkbox" className="menu-btn" id="menu-btn" />
  
   <label className="menu-icon" htmlFor="menu-btn">
    <span className="navicon"></span></label>

   <ul className="menu">
    <li><Link href='/animes'><a>Animes</a></Link></li>
   <li><Link href='/episodes'><a>Episodes</a></Link></li> 
     <li><Link href='/songs'><a>Songs</a></Link></li>
    <li><Link href='/about'><a>About</a></Link></li>
  </ul>
 
</nav>
    )
}

export default Navbar
