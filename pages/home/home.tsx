import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import { lightTheme, darkTheme } from "../../styles/theme.css";

import * as css from "./home.css";

const lessons = [1, 2, 3, 4];

export const Home: NextPage = () => {
  const [theme, setTheme] = useState<string>(darkTheme);

  const handleChangeTheme = useCallback(() => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [theme]);
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>

      <main className={theme}>
        <div>
          <div className={css.left}>
            {lessons.map((lesson) => (
              <div key={lesson} className={css.lessonItem}>
                {lesson}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleChangeTheme}>切换主题</button>
      </main>
    </div>
  );
};
