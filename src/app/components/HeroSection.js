import Image from "next/image";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <Image
          src="/logo.svg"
          alt="App Logo"
          className={styles.logo}
          width={180}
          height={80}
          priority
        />
        <h1 className={styles.title}>
          Welcome to MountainShares
        </h1>
        <p className={styles.subtitle}>
          Your gateway to West Virginia community, heritage, and creative collaboration.
        </p>
      </div>
    </section>
  );
}
