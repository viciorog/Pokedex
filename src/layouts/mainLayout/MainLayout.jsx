import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <nav>
        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link href="/TCG">Trading Cards</Link>
          </li>
          <li>
            <Link href="/help">Help</Link>
          </li>
        </ul>
      </nav>

      {children}

      <footer>
        <p>© 2024 Vincenzo Rogato Sito Web.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
