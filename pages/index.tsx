import type { NextPage } from "next";
import * as styles from "./index.css";
import Link from "next/link";

const lessons = [1, 2, 3, 4];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        {lessons.map((lesson) => (
          <Link key={lesson} href={`/lesson/${lesson}`}>
            <a className={styles.lessonItem}>{lesson}</a>
        </Link>
      ))}
    </div>
  );
};

export default Home;
