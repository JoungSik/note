import Link from 'next/link'

import styles from '../../../styles/container/footer.module.css';

const Footer = () => {
  return (
    <section className={styles.section}>
      <h4 className={styles.header_text}>
        Made By <Link href="https://github.com/JoungSik">@JoungSik</Link>
      </h4>
    </section>
  );
};

export default Footer;
