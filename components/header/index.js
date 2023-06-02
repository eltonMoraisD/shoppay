import Ad from "../header/Ad";
import styles from "../header/styles.module.scss";
import Top from "../header/Top";
import Main from "./Main";

export default function Header() {
  return (
    <div className={styles.header}>
      <Ad />
      <Top />
      <Main />
    </div>
  );
}
