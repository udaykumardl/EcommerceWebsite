import React from "react";
import classes from './Navbar.module.css'

const Navbar=() =>{
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li>HOME</li>
                <li>STORE</li>
                <li>ABOUT</li>
            </ul>
            <div className={classes.cart}>
                <button>Cart</button>
                <p className={classes.p}>0</p>
            </div>
        </nav>
    )

}


export default Navbar;