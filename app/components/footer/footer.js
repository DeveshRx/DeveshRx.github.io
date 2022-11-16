import React from "react";
import Head from 'next/head'

import styles from './Footer.module.scss'
import Link from "next/link";




const myLoader = ({ src }) => {
    return `${src}`;
};


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const year = new Date().getFullYear();

        return (
            <div className={styles.footer}>
                <footer>
                    <div className={styles.main}>

                        <small>Made with 💙 in India<br/>Devesh Chaudhari &copy; {year} | DeveshRx &copy; {year}<br /><br />

                            <Link href="/" className={styles.link}>Home</Link>
                            &nbsp;|&nbsp;


                            <Link href={"/sitemap-news.xml"} className={styles.link}>News Sitemap</Link>
                            &nbsp;|&nbsp;
                            <Link href={"/sitemap.xml"} className={styles.link}>Sitemap</Link>
                            <br />
                            <br />

                            <i>
                                <Link href="https://bitvedas.com" className={styles.link} rel="external" target="_blank">BitVedas</Link>
                                &nbsp;|&nbsp;
                                <Link href="https://www.ephrine.in" className={styles.link} rel="external" target="_blank">Ephrine Apps</Link>
                                &nbsp;|&nbsp;
                                <Link href="https://pharmahub.ephrine.in" className={styles.link} rel="external" target="_blank">Pharma Hub</Link>
                            </i>
                        </small>
                    </div>

                </footer>
            </div>
        );
    }
}