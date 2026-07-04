"use client";
import { useState } from "react";
import styles from "../styles/header.module.css";

interface HeaderProps {
  isWhite: boolean;
}

export default function Header({ isWhite }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
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
            <a className={styles.navLink} href="#">Services</a>
            <a className={styles.navLink} href="#">Work</a>
            <a className={styles.navLink} href="#">About</a>
            <a className={styles.navLink} href="#">Pricing</a>
          </nav>

          {/* CTA */}
          <a className={styles.ctaButton} href="#">
            Let&apos;s Talk
          </a>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.overlayVisible : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar Drawer */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        {/* Sidebar Header */}
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarLogo}>Qubit IT Solutions</span>
          <button
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className={styles.sidebarNav}>
          <a className={styles.sidebarLink} href="#" onClick={() => setSidebarOpen(false)}>
            <span>Services</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <a className={styles.sidebarLink} href="#" onClick={() => setSidebarOpen(false)}>
            <span>Work</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <a className={styles.sidebarLink} href="#" onClick={() => setSidebarOpen(false)}>
            <span>About</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <a className={styles.sidebarLink} href="#" onClick={() => setSidebarOpen(false)}>
            <span>Pricing</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </nav>

        {/* Sidebar CTA */}
        <div className={styles.sidebarFooter}>
          <a className={styles.sidebarCta} href="#">
            Let&apos;s Talk
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
