import styles from "../footer/styles.module.scss";
import Links from "./Links";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <Newsletter />
      </div>
    </footer>
  );
}
