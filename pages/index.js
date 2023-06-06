// import styles from "../styles/Home.module.scss";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  const { data: session } = useSession();

  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get(`https://api.ipregistry.co/?key=${process.env.IP_REGISTRY_KEY}`)
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => console.log(err));

  return {
    props: {
      country: {
        name: data.name,
        flag: data.flag.emojitwo,
      },
    },
  };
}
