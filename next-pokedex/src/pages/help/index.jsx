import styles from "./index.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import examplePic from "./example.png";

export default function Help() {
  const router = useRouter();
  const [pokemonSearch, setPokemonSearch] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${pokemonSearch}`);
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <div className={styles.Help}>
      <h1 className={styles.title}>HOW TO USE A POKEDEX</h1>
      <div className={styles.section}>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <input
            className={styles.inputPokemon}
            value={pokemonSearch}
            onChange={onHandleChange}
            type="text"
            placeholder="Cerca pokemon"
            required
          />
          <input className={styles.btnPokemon} type="submit" value="Cerca" />
        </form>
        <h4 className={styles.p}>
          This site allows you to search for all your Pokemon via a search bar
          connected to an API that contains ALL Pokemon from the first and last
          generation!{" "}
          <p>
            Try writing the name of your favorite pokemon and see what happens
            :)
          </p>
        </h4>
      </div>
      <div className={styles.section}>
        <Image
          src={examplePic}
          alt="example"
          width="500"
          height="350"
          className={styles.Image}
        ></Image>
        <p className={styles.p}>
          You will see a screen like this where you will have all the
          information relating to the pokemon you searched for!
        </p>
      </div>
    </div>
  );
}
