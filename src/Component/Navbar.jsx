import { Link } from 'react-router-dom';
import styles from '../global.module.css';
import React from 'react'
export default function Navbar() {
    return (
        <>
            <nav className={`${styles.navBackGround} navbar navbar-expand-lg navbar-dark bg-transparent`}>
                <div className="container-fluid justify-content-center">
                    <Link className="navbar-brand" to="Home">VODO Movies</Link>
                </div>
            </nav>
        </>
    )
}
