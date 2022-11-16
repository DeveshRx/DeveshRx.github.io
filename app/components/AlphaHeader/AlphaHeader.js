import React from "react";
import styles from './AlphaHeader.module.scss';

export default class AlphaHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {

        const title = this.props.title;
        const subtitle = this.props.subtitle;

        return (
        <div className={styles.AlphaHeader}>
            <h1>{title}</h1>
            <div>{subtitle}</div>

        </div>
        );
    }
}




