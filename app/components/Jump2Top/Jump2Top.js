//Jump2Top
import React from "react";

import styles from './Jump2Top.module.scss'

import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const myLoader = ({ src }) => {
    return `${src}`;
};


export default class Jump2Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
        }

        this.ScrollEvent = this.ScrollEvent.bind(this);
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

    render() {
        var mDisplay = "none";

        if (this.state.position <= 150) {
            mDisplay = "none";
        } else {
            mDisplay = "block";
        }
        return (
            <div className={styles.Jump2Top}>
                <div style={{
                    display: mDisplay
                }}>

                    <div className={styles.J2TIcon}>
                        <IconButton color="white" size="medium" href="#top">
                            <ArrowUpwardIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>

            </div>


        );
    }
}

