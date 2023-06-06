import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top({ country }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country.flag} alt="flag" />
            <span>{country.name} / eur</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">Whishlist</Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <ol>
              {loggedIn ? (
                <li>
                  <div className={styles.flex}>
                    <img
                      src="https://avatars.githubusercontent.com/u/39710764?v=4"
                      alt=""
                    />
                    <span>Elton</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              ) : (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <RiAccountPinCircleLine />
                    <span>Account</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              )}
            </ol>
            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
