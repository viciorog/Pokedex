import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Pokedex.module.scss";
import Image from "next/image";
import ImgPokedex from "./../../../public/pokedex.png";
import ImgLogo from "./../../../public/logo.png";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [currentPokemonId, setCurrentPokemonId] = useState(0);

  const handlePlayClick = () => {
    new Audio("/button.mp3").play();
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${pokemonSearch}`);
    setPokemonSearch("");
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  useEffect(() => {
    if (router.query.name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemonData(data);
          setCurrentPokemonId(data.id);
        })
        .catch(() => {
          // Gestisci il caso in cui il Pokémon non viene trovato
          setPokemonData({});
          setCurrentPokemonId(0); // Resetta l'ID a 1
        });
    }
  }, [router.query.name]);

  const onHandlePrev = () => {
    if (currentPokemonId > 1) {
      setCurrentPokemonId(currentPokemonId - 1);
    }
    console.log(currentPokemonId);
  };

  const onHandleNext = () => {
    setCurrentPokemonId(currentPokemonId + 1);
    console.log(currentPokemonId);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [currentPokemonId]);

  return (
    <>
      {pokemonData.sprites ? (
        <div className={styles.Pokedex}>
          <Image
            src={ImgLogo}
            width="550"
            height="200"
            alt=""
            className={styles.ImgLogo}
          ></Image>
          <div className={styles.container_sprites}>
            <img
              className={styles.sprites}
              src={pokemonData.sprites.other.showdown.front_default}
              alt=""
            />
          </div>
          <Image
            src={ImgPokedex}
            // width="890"
            // height="507"
            alt=""
            priority={true}
            className={styles.ImgPokedex}
          />

          <h1 className={styles.title}>{pokemonData.name.toUpperCase()}</h1>

          <div className={styles.type}>
            {pokemonData.types.map((type, i) => (
              <p key={i}>{type.type.name}</p>
            ))}
          </div>

          <form className={styles.form} onSubmit={onHandleSubmit}>
            <input
              className={styles.inputPokemon}
              value={pokemonSearch}
              onChange={onHandleChange}
              type="text"
              placeholder="name or number"
              required
            />
          </form>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => {
                onHandlePrev(), handlePlayClick();
              }}
            >
              prev
            </button>
            <button
              className={styles.button}
              onClick={() => {
                onHandleNext(), handlePlayClick();
              }}
            >
              next
            </button>
          </div>
          <div className={styles.info}>
            <p>Weight: {pokemonData.weight}</p>
            <p>Height: {pokemonData.height}</p>
          </div>

          {/* <ul className={styles.stats}>
            {pokemonData.stats.map((stat, i) => (
              <li className={styles.stat} key={i}>
                <p>{stat.base_stat}</p>
                <p>{stat.stat.name}</p>
              </li>
            ))}
          </ul> */}
        </div>
      ) : (
        <p className={styles.notFound}>{router.query.name + " non trovato"}</p>
      )}
    </>
  );
}
