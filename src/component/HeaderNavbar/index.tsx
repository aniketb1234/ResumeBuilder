import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './style.module.scss';

export default function HeaderNavbar() {
    return (
        <Navbar expand="sm" className={styles.nav}>
            <section className="container">
                <Link href="/">
                    {/* <img src="/images/logo1.png" alt="resume logo (resume builder)" className={styles.logo} /> */}
					<h3 style={{fontWeight:"600",color:"white"}}>Resume Builder</h3>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarNav}>
                    <i className="material-icons">menu</i>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <div className={styles.navItem}>
                            <Link href="/resume-builder">
                                <a>Create My Resume</a>
                            </Link>
                        </div>

                        <div className={styles.navItem}>EN</div>

                        <div className={styles.navItem}>
                            <a href="https://github.com/aniketb1234/ResumeBuilder" target="_blank" rel="noopener noreferrer">
                                github
                            </a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </section>
        </Navbar>
    );
}
