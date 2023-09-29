import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {

    const currentPage = usePathname()

    return ( <nav>
        <div id = "nav-pages-section" class = "nav-section">
            <Link id="home" class={currentPage === '/' ? "selected" :""} href="/">Home</Link>
            <Link id="project" class={currentPage === '/menu/project' ? "selected" :""} href="/menu/project">Project</Link>
            <Link id="news" class={currentPage === '/menu/news' ? "selected" : ""} href="/menu/news">News</Link>
            <a id="code"   class={currentPage === '/menu/code' ? "selected" :""} href="/menu/code">Code</a>
            <a id="contact"class={currentPage === '/menu/contact' ? "selected" :""} href="/menu/contact">Contact Us</a>
        </div>

        <div id= "nav-blank-section" class = "nav-section"></div>

        <div id = "nav-login-section" class = "nav-section">
            <a href="#">Log in</a>
        </div>
    </nav> );
}

export default Navbar;