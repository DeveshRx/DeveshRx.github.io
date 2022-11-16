import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Work.module.scss'
import { ThemeProvider } from '@mui/material/styles';
import { AppTheme } from './../lib/MUITheme';
import NavBar from './../components/NavBar/NavBar';
import { Button, Card, CardActions, CardContent, Chip } from '@mui/material';
import {
    BlankImg,
    Work_Dev,
    BitVedasLogo, EternalBlizzLogo, EphrineAppsLogo,
    Indra_App_Icon,
    PharmaHub_App_Icon,
    QRLite_App_Icon,
    SMSDrive_App_Icon,
    TextMaster_App_Icon,
    GitHub_Octacat

} from '../lib/assets';
import Footer from '../components/footer/footer';
const parse = require('html-react-parser');

import convertMD2Html from '../lib/Md2HtmlConvert';
import Link from 'next/link';
import Jump2Top from '../components/Jump2Top/Jump2Top';

const myLoader = ({ src }) => {
    return `${src}`;
};


export default class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <ThemeProvider theme={AppTheme} sx={{ margin: 0, padding: 0 }}>

                <div className={styles.workContainer}>
                    <Head>
                        <title>My Work Portfolio | Devesh Chaudhari | DeveshRx </title>
                        <meta name="description" content="  " />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <NavBar />

                    <Header />
                    <Brands />
                    <br /><br />
                    <Products />
                    <br /><br />
                    <OpenSourceProjects />
                    <Jump2Top />
                    <Footer />
                    {/*                     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 */}

                </div>
            </ThemeProvider>
        );
    }
}


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>

                <div className={styles.mTitle}>
                    <h1 >
                        My Work

                    </h1 >
                </div>

                <div >
                    <Image
                        className={styles.headerImage}
                        src={Work_Dev}
                        loader={myLoader}
                    />
                </div>



            </div>
        );
    }
}


class Brands extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section className={styles.BrandBody}>
            <div className={styles.BrandSub} >
                <h1>Brands</h1>
                <p>Designing brands that are meaningful and beautifully designed. My Experience in Building various Brands have taught me that it's a Art.</p>
            </div>
            <CompaniesSection />



        </section>);
    }
}


class CompaniesSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section className={styles.CompanySection}>

            {/* Bitedas */}
            <Link href="https://bitvedas.com" target="_blank">
                <div
                    className={styles.Comp}
                >
                    <Image
                        className={styles.CompSecImage}
                        src={BitVedasLogo}
                        loader={myLoader}
                    />

                </div>
            </Link>



            {/* Raven Claw Apps & Games (Ephrine Apps) */}
            <Link href="https://www.ephrine.in" target="_blank">
                <div
                    className={styles.Comp}  >
                    <Image
                        className={styles.CompSecImage}
                        src={EphrineAppsLogo}
                        loader={myLoader}
                    />
                </div>
            </Link>


            {/* Eternal Blizz */}
            <Link href="https://www.youtube.com/channel/UCfodHtZYdKhHixuSKupSzLA" target="_blank">
                <div
                    className={styles.Comp}
                >
                    <Image
                        className={styles.CompSecImage}
                        src={EternalBlizzLogo}
                        loader={myLoader}
                    />

                </div>
            </Link>

            <br /><br />

        </section>
        );
    }
}


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.SkillBadge = this.SkillBadge.bind(this);
    }

    render() {
        return (<section className={styles.ProductsBody}>
            <div className={styles.ProductSub} >
                <h1>Products</h1>
                <p>I Love Creating Products, espicially products which solves customer's problems.</p>
            </div>
            <div className={styles.ProductsList}>

                {this.SkillBadge(Indra_App_Icon, "Indra Video Chat", "High Quality Video Calling to Friends and Family", "https://play.google.com/store/apps/details?id=devesh.ephrine.indra")}
                {this.SkillBadge(SMSDrive_App_Icon, "SMS Drive", "Backup Messages, Quick Restore Messages, Sync across Multiple Devices.", "https://play.google.com/store/apps/details?id=devesh.ephrine.backup.sms")}
                {this.SkillBadge(PharmaHub_App_Icon, "Pharma Hub", "EdTech Platform for Pharmacy & Medical Study", "https://play.google.com/store/apps/details?id=devesh.b.pharm.guide.mu")}
                {this.SkillBadge(QRLite_App_Icon, "QR Lite", "Scan, Create & Share All Types of QR Code & Barcode. Powered by Machine Learning", "https://play.google.com/store/apps/details?id=devesh.ephrine.qr.code")}
                {this.SkillBadge(TextMaster_App_Icon, "Text Master OCR", "Optical Character Recognition powered by Powerful Machine Learning", "https://play.google.com/store/apps/details?id=devesh.app.ocr")}



            </div>

            <p className={styles.AppsGPlay30}>
                and 30+ Apps Published on <Link href="https://play.google.com/store/apps/dev?id=6568269370408193556" target="_blank">Google Play Store</Link>.
            </p>



        </section>);
    }

    SkillBadge(icon, title, desc, link) {

        return (<Link href={link} target="_blank">
            <div className={styles.SkillBadge}>
                <div className={styles.SkillBadgeCol}>
                    <div className={styles.SkillBadgeRow1}>
                        <Image src={icon}
                            className={styles.SkillBadgeImage}
                            loader={myLoader}
                        />
                    </div>

                    <div className={styles.SkillBadgeRow2}>
                        <span className={styles.SkillBadgeTitle}>{title}</span><br />
                        <span className={styles.SkillBadgeDesc}>{desc}</span>
                    </div>

                </div>

            </div>
        </Link>);

    }
}



const mdOSP = "[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=DeveshRx&repo=QR-Lite)](https://github.com/DeveshRx/QR-Lite) [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=DeveshRx&repo=Text-Master-OCR)](https://github.com/DeveshRx/Text-Master-OCR) [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=DeveshRx&repo=Muzilla-Music-Player)](https://github.com/DeveshRx/Muzilla-Music-Player) [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=DeveshRx&repo=Indra-Android-App)](https://github.com/DeveshRx/Indra-Android-App) [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=DeveshRx&repo=Android-WebRTC-Firebase)](https://github.com/DeveshRx/Android-WebRTC-Firebase) [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=DeveshRx&repo=Pharma-Hub)](https://github.com/DeveshRx/Pharma-Hub) [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=ephrine&repo=Jinx-Depression-Diagnosis)](https://github.com/ephrine/Jinx-Depression-Diagnosis) ";
class OpenSourceProjects extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={styles.OSPHeading} >
                    <h1>Open Source Projects</h1>
                    <p>Contributing to Humanity; To the people, For the people, By the People & From a Genius&#128526; <span>#TrueDemocracy</span></p>

                    <div className={styles.OSPGitHub}>
                        {parse(convertMD2Html(mdOSP))}

                    </div>

                    <div className={styles.GHBadge}>
                        <Link href="https://github.com/DeveshRx" className={styles.GHpage} target="_blank">
                            <h4> More Projects Available on my GitHub Repository
                            </h4>
                            <Image className={styles.GitHubBadge}
                                src={GitHub_Octacat}
                                loader={myLoader}
                            />
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}



