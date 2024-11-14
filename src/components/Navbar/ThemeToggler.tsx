"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import styles from "../../styles/components/Navbar.module.scss";

type ThemeTogglerProps = {};

const ThemeToggler: React.FC<ThemeTogglerProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${styles.navbar_right_list_item_toggler}`}>
      <div
        className={`${styles.navbar_right_list_item_toggler_theme}`}
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          if (newTheme === "light") {
            logEvent(getAnalytics(), `Switch To Light Theme`);
          } else {
            logEvent(getAnalytics(), `Switch To Dark Theme`);
          }
          setTheme(newTheme);
        }}
      >
        {theme !== "light" && <Icon icon={"ion:moon"} />}
        {theme === "light" && <Icon icon={"ph:sun-fill"} />}
      </div>
    </div>
  );
};
export default ThemeToggler;
