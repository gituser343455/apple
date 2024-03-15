import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav>
            <i class="fa-brands fa-apple"></i>
            <a href="">Store</a>
            <a href="">Mac</a>
            <a href="">iPad</a>
            <a href="">iPhone</a>
            <a href="">Watch</a>
            <a href="">Vision</a>
            <a href="">AirPods</a>
            <a href="">TV & Home</a>
            <a href="">Entertainment</a>
            <Link to="/Acsis">Acsis</Link>
            <a href="">Support</a>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
        </nav>
        </div>
    )
}

export default Navbar
