import styles from "./index.module.scss";
import Cards from "@/components/model3D";
import Link from "next/link";

export default function Tcg() {
  return (
    <div className={styles.Title}>
      <h1 className={styles.h1}>POKEMON TRADING CARDS</h1>
      <Cards />
    </div>
  );
}
