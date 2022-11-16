import Image from 'next/image'
import React from 'react';
import styles from './NavBar.module.scss'

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { bgcolor } from '@mui/system';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

const myLoader = ({ src }) => {
    return `${src}`;
};

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            drawerOpen: false
        }

        this.ScrollEvent = this.ScrollEvent.bind(this);
        this.OpenDrawer = this.OpenDrawer.bind(this);
        this.CloseDrawer = this.CloseDrawer.bind(this);

    }

    componentDidMount() {

        window.addEventListener('scroll', this.ScrollEvent)

    }



    componentWillUnmount() {
        window.removeEventListener('scroll', this.ScrollEvent)
    }

    ScrollEvent(event) {
        const position = window.pageYOffset;
        console.log("Position: " + position);
        this.setState({ position: position });

    }

    OpenDrawer() {
        this.setState({ drawerOpen: true });
    }

    CloseDrawer() {
        this.setState({ drawerOpen: false });
    }

    render() {

        var mColor = "white";
        var shadowCSS = "2px 2px 14px 4px rgba(0,0,0,0.5)";
        var bgcolor;

        var mDisplay = "block";
        if (this.state.position <= 100) {
            bgcolor = 'rgba(0, 0, 0, 0)';
            //      mColor = "primary";
            //     shadowCSS = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
            mDisplay = "none";
        } else {
            bgcolor = '#2962ff';
            mColor = "white"
            shadowCSS = "2px 2px 14px 4px rgba(0,0,0,0.5)";

            mDisplay = "block";
        }

        return (
            <div style={{
                //  backgroundColor: bgcolor,
                width: '100%',
                display: mDisplay

            }}
                className={styles.NavBar}
            >

                <div style={{
                    backgroundColor: bgcolor,
                    boxShadow: shadowCSS

                }}
                //className={styles.MenuBtn}
                >
                    <div className={styles.NavBarCol}>
                        <div className={styles.NavBarRow1}>
                            <IconButton onClick={() => {
                                this.OpenDrawer();
                            }}>
                                <MenuIcon color={mColor} fontSize="large" />
                            </IconButton>

                        </div>
                        <div className={styles.NavBarRow2}>
                            <Link href="/">
                                <h1>Devesh Chaudhari</h1>
                            </Link>

                        </div>
                        <div className={styles.NavBarRow3}>
                            <IconButton href="/" size="large" id="homebtn">
                                <HomeIcon color="white" size="large" />
                            </IconButton>
                            <div className={styles.desktopOnly}>
                                <Button variant="text" color="white" href="/work" >My Work</Button>
                                <Button variant="text" color="white" href="/skills" >My Skills</Button>
                                {/*      <Button variant="text" color="white" >Blog</Button>
 */}
                            </div>

                        </div>


                    </div>






                </div>





                {/* Drawer */}
                <Drawer
                    anchor="left"
                    open={this.state.drawerOpen}
                    onClose={this.CloseDrawer}
                >
                    <Box
                        //sx={{ width: 250 }}
                        //    className={styles.drawerBody}
                        role="presentation"
                        onClick={this.CloseDrawer}
                        onKeyDown={this.CloseDrawer}
                    >
                        <List>
                            <ListItem key="menu" disablePadding>
                                <ListItemButton href="/">
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>


                            {/* 
                            <ListItem key="menu" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Blog" />
                                </ListItemButton>
                            </ListItem> */}
                            <ListItem key="menu" disablePadding>
                                <ListItemButton href="/work">
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Work" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="menu" disablePadding>
                                <ListItemButton href="/skills">
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Skills" />
                                </ListItemButton>
                            </ListItem>


                            <ListItem key="menu" disablePadding>
                                <ListItemButton href="/books">
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Books" />
                                </ListItemButton>
                            </ListItem>

                        </List>
                        <Divider />


                    </Box>
                </Drawer>


            </div>

        );
    }
}



