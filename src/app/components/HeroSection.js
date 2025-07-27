import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img src="/logo.png" alt="MountainShares Logo" className={styles.logo} />
        <h1>Welcome to MountainShares</h1>
        <p>Your gateway to West Virginia community, heritage, and creative collaboration.</p>
      </div>
    </section>
  );
}
