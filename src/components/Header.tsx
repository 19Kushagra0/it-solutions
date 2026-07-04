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
      </div>
    </header>
  );
}

