import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.bottomSection}>
        <p>&copy; {new Date().getFullYear()} Qubit IT Solutions. All rights reserved.</p>
        <div className={styles.legalNav}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
