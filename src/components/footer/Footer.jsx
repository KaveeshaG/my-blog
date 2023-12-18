import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Footer = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Kaviya&apos;s Blog</h1>
        </div>
        <p className={styles.desc}>
        Experienced Community Coordinator in IT with 3+ years, skilled in system design, software engineering, creative design, cloud computing, and DevOps. Advanced focus in Computer Science.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          {/* <Image src="/tiktok.png" alt="" width={18} height={18} /> */}
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div> */}
        <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        {data?.map((item) => (
          <Link key={item.id} href={`/blog?cat=${item.title}`}>{item.title}</Link>
          ))}
          
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link target="_blank" href="https://www.facebook.com/kaveesha.yaka.gimhana/">Facebook</Link>
          <Link target="_blank" href="https://www.instagram.com/kaveesha__gimhana/">Instagram</Link>
          {/* <Link href="/">Tiktok</Link> */}
          <Link target="_blank" href="https://youtube.com/@UAKaveeshagimhana?si=ZYiBRVkb6n6fuOmJ">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
