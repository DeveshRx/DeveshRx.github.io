
import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Books.module.scss'
import { ThemeProvider } from '@mui/material/styles';
import { AppTheme } from '../lib/MUITheme';
import NavBar from '../components/NavBar/NavBar';
import { Button, Card, CardActions, CardContent, Chip } from '@mui/material';
import {
    BlankImg,
    AcademicsImg,
    TheEnchantressBookImg,
} from '../lib/assets';
import Footer from "../components/footer/footer";
import Link from "next/link";

const myLoader = ({ src }) => {
    return `${src}`;
};


export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (<ThemeProvider theme={AppTheme} >
            <div className={styles.content}>
                <Head>
                    <title>Books Written by Devesh Chaudhari | DeveshRx </title>
                    <meta name="description" content="  " />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <NavBar />
                <Header />
                <br />
                <div className={styles.BookList}>
                    <BookItem thumb={TheEnchantressBookImg} tag="e-book"/>

                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <Footer />
            </div>
        </ThemeProvider>);
    }
}


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerImg}>
                    <Image
                        src={AcademicsImg}
                        loader={myLoader}
                    />
                    {/*  <div id="overlay"></div> */}
                    <div className={styles.headerTitle}>My Books</div>
                </div>
            </div>
        );
    }
}



class BookItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const tag=this.props.tag;
        const thumb=this.props.thumb;
        return (
            <div className={styles.BookItem}>
                <Link href="#" target="_blank">
                    <div className={styles.BookCover}>
                        <Image
                            src={thumb}
                            loader={myLoader}

                        />
                    </div>
{/*                     <Chip label={tag} variant="filled"/>
 */}
                    {/*                     <Card>
                        <CardContent>
                          
                        </CardContent>

                    </Card>
 */}                </Link>

            </div>
        );
    }
}


