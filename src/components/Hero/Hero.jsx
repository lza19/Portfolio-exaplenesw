import React from 'react'
import styles from './Hero.module.css'
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text1}>Hello, There</p>
                <h3 className={styles.text2}>MAX wisit</h3>
                <p className={styles.text3}>
                    I'm a full stack dev.
                </p>
                <p className={styles.text4}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis ipsum cupiditate consequuntur unde. Debitis animi nobis natus adipisci. Quos eveniet et officiis voluptatem magnam deserunt recusandae nobis esse ea?
                    
                </p>
                <ul className={styles.hero_social}>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                    <li><a href="#"><FaGithub /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                </ul>
            </div>
 
            <div className={styles.hero_image}></div>
        </div>
      </div>
     
     
     
     
     
     
     
    </div>
  )
}
 
export default Hero