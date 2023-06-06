import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";
export default function Copyright({ country }) {
  const date = new Date();
  return (
    <div className={styles.footer__copyright}>
      <section>©{date.getFullYear()} SHOPPAY All Rights Resereved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li key={link.id}>{<Link href={link.link}>{link.name}</Link>}</li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> {country.name}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
const data = [
  {
    id: 1,
    name: "Privacy Center",
    link: "",
  },
  {
    id: 2,
    name: "Privacy & Cookie Policy",
    link: "",
  },
  {
    id: 3,
    name: "Manage Cookies",
    link: "",
  },
  {
    id: 4,
    name: "Terms & Conditions",
    link: "",
  },
  {
    id: 5,
    name: "Copyright Notice",
    link: "",
  },
];
