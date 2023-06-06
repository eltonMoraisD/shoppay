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
  try {
    const response = await axios.get(
      `https://api.ipregistry.co/?key=${process.env.IP_REGISTRY_KEY}`
    );
    const { name, flag } = response.data.location.country;
    return {
      props: {
        country: {
          name,
          flag: flag.emojitwo,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
}
