import React from 'react';

import { getImageUrl } from "../../../utils";

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
            <p>Feel free to contact me! </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                
                    <a href="mailto:myemail@email.com">sandhyadassaye11@gmail.com</a>
                </li>

                <li className={styles.link}>
                
                    <a href="https://www.linkedin.com/in/sandhya-dassaye112/">linkedin.com/sandhya-dassaye112/</a>
                </li>

                <li className={styles.link}>
                   
                    <a href="https://github.com/SandhyaDassaye1">github.com/sandhyadassaye1</a>
                </li>

                <li className={styles.link}>
                   
                    <a href="https://sandhyadraws.com/">https://sandhyadraws.com/</a>
                </li>
            </ul>
        </footer>
        )
    };
