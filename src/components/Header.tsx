"use client";
import styles from "../styles/header.module.css";

interface HeaderProps {
  isWhite: boolean;
}

export default function Header({ isWhite }: HeaderProps) {
  return (
    <header
      id="main-header"
      className={`${styles.header} ${isWhite ? styles.headerWhite : styles.headerDefault}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <a className={styles.logo} href="#">
          Qubit IT Solutions
        </a>

        {/* Nav */}
        <nav className={styles.nav}>
          <a className={styles.navLink} href="#">
            Services
          </a>
          <a className={styles.navLink} href="#">
            Work
          </a>
          <a className={styles.navLink} href="#">
            About
          </a>
          <a className={styles.navLink} href="#">
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <a className={styles.ctaButton} href="#">
          Let&apos;s Talk
        </a>

        {/* Hamburger */}
        <button className={styles.hamburger} aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

