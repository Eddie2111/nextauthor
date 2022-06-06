import styles from '../styles/Home.module.css';
import {SessionProvider, NextAuth} from 'next-auth';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  )
}
