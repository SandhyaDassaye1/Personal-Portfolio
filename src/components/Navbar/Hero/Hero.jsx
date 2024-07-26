import React from "react";

import { getImageUrl } from "../../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}></div>
        <div><h1 className={styles.title}> Hi, I'm Sandhya</h1>
        <p className={styles.description}> I am a programming enthusiast with a year of 
        technical experience. I completed internships, relevant volunteering, leading in a STEM society,
        and plenty of projects that you can find here! Feel free to contact me.</p>
         <a href="mailto:sandhyadassaye@gmail.com" className ={styles.contactBtn}> 
         Contact Me </a>
        </div>
        <img src={getImageUrl("nav/hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
    );
};