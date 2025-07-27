import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img src="/logo.svg" alt="App Logo" className={styles.logo} />
        <h1 className={styles.title}>MountainShares: Appalachian Creative Economy</h1>
        <p className={styles.subtitle}>
          Welcome to the official launchpad for creators, business, and community projects!
        </p>
      </div>
    </section>
  );
}
