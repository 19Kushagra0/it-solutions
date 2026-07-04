"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/homepage.module.css";

export default function Home() {
  const [isHeaderWhite, setIsHeaderWhite] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const headerHeight = document.getElementById("main-header")?.offsetHeight || 0;
        
        if (heroBottom <= headerHeight) {
          setIsHeaderWhite(true);
        } else {
          setIsHeaderWhite(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* ── Header ── */}
      <Header isWhite={isHeaderWhite} />

      {/* ── Hero Section ── */}
      <section
        ref={heroRef}
        className={styles.heroSection}
      >
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Get founded by
              <br />
              more customers
            </h1>
            <p className={styles.heroDescription}>
              By showing up in the top
              <br />
              search results.
            </p>
            <a
              className={styles.heroButton}
              href="#"
            >
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>

          {/* Right Mockup */}
          <div className={`${styles.heroMockupContainer} perspective-mockup`}>
            {/* Browser Bar */}
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <div className={styles.browserDot}></div>
                <div className={styles.browserDot}></div>
                <div className={styles.browserDot}></div>
              </div>
              <div className={styles.browserNav}>
                <span className={styles.browserBrand}>Qubit IT Solutions</span>
                <span className={styles.browserNavLink}>Home</span>
                <span className={styles.browserNavLink}>Services</span>
                <span className={styles.browserNavLink}>About</span>
                <span className={styles.browserNavLink}>Contact</span>
              </div>
              <div className={styles.browserButton}>
                Book a Call
              </div>
            </div>

            {/* Mockup Content */}
            <div className={styles.mockupContent}>
              <div className={styles.mockupLeft}>
                <h3 className={styles.mockupTitle}>
                  Helping local
                  <br />
                  businesses grow
                  <br />
                  online.
                </h3>
                <p className={styles.mockupDesc}>
                  We build fast, modern websites that
                  <br />
                  help you get discovered and get more
                  <br />
                  customers.
                </p>
                <button className={styles.mockupButton}>
                  View Our Work
                </button>
              </div>
              <div className={styles.mockupRight}>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuz46jrDmtu-ogUoArdEY4j8J2_s0IvXkIhRA6_UtfWrsBFUXIIb3ky7ScTQuJy7bXnBVT6R4KX8ks7pl-rEdKUWzRPeyXEa46_E2auswgvk7zl5s7QMFszS7iPwylxirrB6P-8rTB1bCBt-iAfdX1-Vt2wYspV4ghjQJwE1XppOEWy5-kh7Ef2tRfMkRFWu4BqKGIslP36zObUugP7a0fc9rbYX7D-L9X2-7MzPv7I3cx2ZtAUlOxxNcguwv3VCwXQZqB2iRDtn4i"
                  alt="Modern Building Architecture"
                  width={600}
                  height={400}
                  unoptimized
                  className={`${styles.mockupImage} mockup-image-mask`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Section ── */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.infoLeft}>
            <h2 className={styles.infoTitle}>
              Not another
              <br />
              generic website.
            </h2>
            <p className={styles.infoSubtitle}>
              Designed for your business.
              <br />
              Built for your customers.
            </p>
          </div>
          <div className={styles.infoRight}>
            <p className={styles.infoText}>
              We take time to understand your
              <br />
              business, your goals, and your
              <br />
              customers then design and build
              <br />a website that actually helps you grow.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresDivider}></div>
          <div className={styles.featuresGrid}>
            {/* Feature 1 */}
            <div className={styles.featureBox1}>
              <h3 className={styles.featureTitle1}>
                Loads fast on
                <br />
                every device.
              </h3>
              <p className={styles.featureDesc}>
                Optimized for speed so your site loads
                <br />
                instantly and keeps visitors engaged.
              </p>
            </div>
            {/* Feature 2 */}
            <div className={styles.featureBox2}>
              <h3 className={styles.featureTitle2}>
                Looks great on
                <br />
                every screen.
              </h3>
              <p className={styles.featureDesc}>
                Fully responsive design that provides a seamless experience on
                any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Built for the business.
            <br />
            Available today.
          </h2>
          <a
            className={styles.ctaButtonLight}
            href="#"
          >
            Schedule a Meeting
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
        {/* Dot Pattern */}
        <div className={`${styles.ctaDotPattern} dot-pattern`}></div>
      </section>

      <Footer />
    </div>
  );
}
