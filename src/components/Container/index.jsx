import React from "react";
import Styles from './container.module.css';

function Container({ children }) {
    return (
        <div className={Styles.container}>
            {children}
        </div>
    )
}

export default Container;