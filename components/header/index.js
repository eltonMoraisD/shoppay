import Ad from "../header/Ad";
import styles from "../header/styles.module.scss";
import Top from "../header/Top";

export default function Header() {
  return (
    <div className={styles.header}>
      <Ad />
      <Top />
    </div>
  );
}
