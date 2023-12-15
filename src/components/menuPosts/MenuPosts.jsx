import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const getData = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/posts?page=1&cat=", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0]; // Extracting only the date part
};

const MenuPosts = async ({ withImage }) => {
  try {
    const { posts } = await getData();
    if (!Array.isArray(posts)) {
      throw new Error("Data is not an array");
    }

    return (
      <div className={styles.items}>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} className={styles.item} key={post.id}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image src={post.img} alt="" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                {post.catSlug}
              </span>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{post.userEmail}</span>
                <span className={styles.date}> - {formatDate(post.createdAt)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className={styles.errorContainer}>
        <p>Error fetching data</p>
      </div>
    );
  }
};

export default MenuPosts;
