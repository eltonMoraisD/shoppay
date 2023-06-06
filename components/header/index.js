import Ad from "./Ad";
import styles from "./styles.module.scss";
import Top from "./Top";
import Main from "./Main";

export default function Header({ country }) {
  return (
    <div className={styles.header}>
      {/*this is the banner image*/}
      <Ad />
      <Top country={country} />
      <Main />
    </div>
  );
}
