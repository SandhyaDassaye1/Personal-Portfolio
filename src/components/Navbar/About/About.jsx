import React from "react";
import { getImageUrl } from "../../../utils";
import styles from"./About.module.css";

export const About = () => {
    return (
    <selection className={styles.container} id="about"> 
        <h2 className={styles.title}> About</h2>
        <div className={styles.content}> 
            <img
             src={getImageUrl("nav/About/aboutImage.png")} 
             alt = "Me sitting with a laptop" className={styles.aboutImage}
              />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("nav/About/cursorIcon.png")} alt="Cursor icon" />
             <div className={styles.aboutItemText}>
                <h3>Computer Science Student with a Year in Industry</h3>
                <p>
                I am a Computer Science student at the University of Kent, 
                currently doing a Year in Industry as a technology intern in 
                the local government, where I help  to build websites, automated
                 processes, support in Geographic information Systems maps and 
                 project manage the acquisition of data to look at the energy usage in offices.
                </p>
             </div>

             
             </li>

             <li className={styles.aboutItem}>
                <img src={getImageUrl("nav/About/serverIcon.png")} alt="server icon" />
             <div className={styles.aboutItemText}>
                <h3> ML Open Source Contributor and Hackathons</h3>
                <p>
                I participated in OpenAI LabLab hackathons, 
                where my team and I built chatbots. I also was 
                awarded the 3rd place Wolfram award for the GoSB
                 for an app that facilitates communication in healthcare.
                  I am an active  contributor for Unify - to merge all machine
                   learning techniques together.

                </p>
             </div>

             
             </li>
                
             <li className={styles.aboutItem}>
                <img src={getImageUrl("nav/About/uiIcon.png")} alt="server icon" />
             <div className={styles.aboutItemText}>
                <h3> Creative Coding, app design and game dev</h3>
                <p>
                I have done some creative coding projects with Processing, 
                and p5js, for example, turning images into 3D, and making webcam 
                filters. I also practice some UI/UX design with Figma and do 
                some frontend development educational app. I am currently building 
                a 2D game in unity. Apart from tech, I am an artist and I started 
                my business which is www.sandhyadraws.com

                </p>
             </div>

             
             </li>
        </ul>
             </div>
        </selection>
    );
}