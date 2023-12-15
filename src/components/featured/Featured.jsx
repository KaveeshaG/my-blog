import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from 'next/link';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Kaviya is here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Explore more about me.</h1>
          <p className={styles.postDesc}>
          I am an experienced Community Coordinator with a demonstrated history of working in the Information Technology Industry for 3+ years. 
          I am skilled in System design, T-shaped software engineering, Creative Design, Cloud Computing, and DevOps. 
          Strong community and social services professional with an Advanced Software Engineering focus in Computer Science.
          </p>
          <Link href="https://www.linkedin.com/in/kaveeshag/" target="_blank" passHref>
          <button className={styles.button}>Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
