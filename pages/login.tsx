import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import { FaArrowCircleRight } from "react-icons/fa";
import Button from '../components/CustomButtonComponent';
import styles from "../styles/Login.module.css";

export default function LoginPage() {
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    //if (response.ok) {
      //router.push('/profile')
    //} else {
      // Handle errors
    //}
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginText}>
        <h1>
          Sign In<br />
          <span className={styles.subtitle}>
            Please enter your details.
          </span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} id={styles.loginForm}>
        <label className={styles.container}>
          Email:
          <input id={styles.loginElem} type="email" name="email" placeholder="johndoe@gmail.com" required />
        </label>
        <label className={styles.container}>
          Password:
          <input id={styles.loginElem} type="password" name="password" placeholder="Password" required />
        </label>
        <Button
          id={styles.submitBtn}
          borderWidth="0px"
          bgColor="#5b2fe8"
          fontColor="#FFF"
          fontSize="1.2rem"
          height="55px"
          radius="1.5rem"
          children="Sign in"
          type="submit"
        />
      </form>
    </div>
  )
}