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
            <p className={styles.infoEyebrow}>OUR PROMISE</p>
            <h2 className={styles.infoTitle}>
              Not another
              <br />
              generic website.
            </h2>
            <p className={styles.infoSubtitle}>
              But one designed for your business
              <br />
              and built for your customers.
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

      {/* ── Process Section ── */}
      <section className={styles.processSection}>
        <div className={styles.processContainer}>
          <p className={styles.processEyebrow}>Our Process</p>
          <h2 className={styles.processTitle}>
            More than just a website, we build a<br />
            strategy that works hard<br />
            for your business.
          </h2>

          <div className={styles.processSteps}>
            {/* Step 1 */}
            <div className={styles.processStep}>
              <div className={styles.processIcon}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className={styles.processConnector}></div>
              <h3 className={styles.processStepTitle}>Discovery Call</h3>
              <p className={styles.processStepDesc}>
                We start by listening. We take time to truly understand your business, your audience, and your goals then identify the right approach to get you results.
              </p>
            </div>

            {/* Step 2 */}
            <div className={styles.processStep}>
              <div className={styles.processIcon}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className={styles.processConnector}></div>
              <h3 className={styles.processStepTitle}>Strategy & Design</h3>
              <p className={styles.processStepDesc}>
                We craft a prototype tailored to your brand. After you review and approve the prototype, we move to the next step.
              </p>
            </div>

            {/* Step 3 */}
            <div className={styles.processStep}>
              <div className={styles.processIcon}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className={styles.processConnector}></div>
              <h3 className={styles.processStepTitle}>Build & Refine</h3>
              <p className={styles.processStepDesc}>
                We build your site with regular updates along the way. You can give feedback at each stage to make sure the final result perfectly matches your vision.
              </p>
            </div>

            {/* Step 4 */}
            <div className={styles.processStep}>
              <div className={styles.processIcon}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className={styles.processConnectorHidden}></div>
              <h3 className={styles.processStepTitle}>Launch & Grow</h3>
              <p className={styles.processStepDesc}>
                Every detail is reviewed together before going live. We launch at a time that suits you and make sure everything works exactly as intended from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <p className={styles.featuresEyebrow}>we make sure it</p>
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

      {/* ── Services Section ── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <p className={styles.servicesEyebrow}>what we do</p>
          <h2 className={styles.servicesTitle}>
            Whatever your goal,<br />
            we&apos;ve got the right solution.
          </h2>
        </div>

        {/* Marquee Track */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {/* ── Set A ── */}
            {/* Card: Software Dev — tall */}
            <div className={`${styles.marqCard} ${styles.marqCardTall}`}>
              <a href="/service-software.png" download className={styles.marqImgLink}>
                <Image src="/service-software.png" alt="Software Development" width={480} height={280} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>Software Development</h3>
                <p className={styles.marqCardDesc}>We build custom software from early-stage ideas to fully launched products, end-to-end.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View Software Development">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Card: Integration — short */}
            <div className={`${styles.marqCard} ${styles.marqCardShort}`}>
              <a href="/service-integration.png" download className={styles.marqImgLink}>
                <Image src="/service-integration.png" alt="System Integration" width={400} height={200} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>System Integration</h3>
                <p className={styles.marqCardDesc}>Connect your tools and services so everything works together seamlessly.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View System Integration">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Card: Cloud — medium */}
            <div className={`${styles.marqCard} ${styles.marqCardMed}`}>
              <a href="/service-cloud.png" download className={styles.marqImgLink}>
                <Image src="/service-cloud.png" alt="Cloud Services" width={440} height={240} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>Cloud Services</h3>
                <p className={styles.marqCardDesc}>Scale fast and stay secure on AWS, Azure, or Google Cloud.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View Cloud Services">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Card: Revamp — tall */}
            <div className={`${styles.marqCard} ${styles.marqCardTall}`}>
              <a href="/service-revamp.png" download className={styles.marqImgLink}>
                <Image src="/service-revamp.png" alt="Fix or Revamp Your Website" width={480} height={280} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>Fix or Revamp Your Website</h3>
                <p className={styles.marqCardDesc}>Outdated or broken site? We clean it up and bring it up to modern standards. No rebuild required.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View Website Revamp">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Set B (duplicate for seamless loop) ── */}
            <div className={`${styles.marqCard} ${styles.marqCardTall}`}>
              <a href="/service-software.png" download className={styles.marqImgLink}>
                <Image src="/service-software.png" alt="Software Development" width={480} height={280} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>Software Development</h3>
                <p className={styles.marqCardDesc}>We build custom software from early-stage ideas to fully launched products, end-to-end.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View Software Development">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.marqCard} ${styles.marqCardShort}`}>
              <a href="/service-integration.png" download className={styles.marqImgLink}>
                <Image src="/service-integration.png" alt="System Integration" width={400} height={200} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>System Integration</h3>
                <p className={styles.marqCardDesc}>Connect your tools and services so everything works together seamlessly.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View System Integration">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.marqCard} ${styles.marqCardMed}`}>
              <a href="/service-cloud.png" download className={styles.marqImgLink}>
                <Image src="/service-cloud.png" alt="Cloud Services" width={440} height={240} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>Cloud Services</h3>
                <p className={styles.marqCardDesc}>Scale fast and stay secure on AWS, Azure, or Google Cloud.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View Cloud Services">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.marqCard} ${styles.marqCardTall}`}>
              <a href="/service-revamp.png" download className={styles.marqImgLink}>
                <Image src="/service-revamp.png" alt="Fix or Revamp Your Website" width={480} height={280} className={styles.marqImg} unoptimized />
              </a>
              <div className={styles.marqCardBody}>
                <h3 className={styles.marqCardTitle}>Fix or Revamp Your Website</h3>
                <p className={styles.marqCardDesc}>Outdated or broken site? We clean it up and bring it up to modern standards. No rebuild required.</p>
                <div className={styles.marqCardFooter}>
                  <button className={styles.marqCardBtn} aria-label="View Website Revamp">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Built for Your Business.
            <br />
            Available Today.
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
