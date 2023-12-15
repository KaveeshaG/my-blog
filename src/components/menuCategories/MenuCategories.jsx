import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const getData = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();
  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <Link
          href={`/blog?cat=${item.title}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}
          key={item._id}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
