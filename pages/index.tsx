import type { NextPage } from "next";
import { LuHeartHandshake } from "react-icons/lu";
import Button from "../components/CustomButtonComponent";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <h3 className={styles.text}>
        WeMind.
      </h3>
      <h1 className={styles.text}>We mind about your health.</h1>
      <div className={styles.iconContainer}>
        <LuHeartHandshake size={150} color="#000" />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          borderWidth="0px"
          bgColor="#FFCC00"
          fontColor="#000"
          fontSize="1.2rem"
          height="55px"
          width="250px"
          radius="1.5rem"
          children="LOGIN"
          onClick={() => {
            window.location.href = "/login";
          }}
        />
      </div>
      <p className={styles.register}>
        Don't have an account? &nbsp;
        <span 
          className={styles.em}
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Home;
