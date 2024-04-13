import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={['row', styles.footerNav].join(' ')}>
                    <div className="col-md-4">
                        <Link href="/">
							<h3 style={{fontWeight:"600",color:"white"}}>Resume Builder</h3>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>PAGES</li>
                            <li>
                                <Link href="/resume-builder">
                                    <a>Resume Builder</a>
                                </Link>
                            </li>
                            <li>EN</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>LINKS</li>
                            <li>
                                <a href="https://github.com/aniketb1234/ResumeBuilder" target="_blank" rel="noopener noreferrer">
                                    github
                                </a>
                            </li>
                            <li>
                                {/* <Link to="/insurance-api-service">
                                Insurance APIs
                            </Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.footerCopyright}>Resume Builder</div>
        </footer>
    );
}
