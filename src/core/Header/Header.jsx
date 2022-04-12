import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
    <Link to="/"><h2>Home</h2></Link>
    <Link to="/animes"><h2>Animes</h2></Link>
    <Link to="/contact"><h2>Contact</h2></Link>
    </nav>
  )
}

export default Header