import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PokemonList from "@/components/pokemonList";
import styles from "../../styles/Starter.module.scss";

export default function Pokedex() {
  const router = useRouter();

  const [selectPokemon, setSelectPokemon] = useState([1, 4, 7]);
  const [classicPokemonList, setClassicPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=9")
      .then((res) => res.json())
      .then((data) => {
        const filteredPokemonList = data.results.filter((pokemon, index) =>
          selectPokemon.includes(index + 1)
        );

        setClassicPokemonList(filteredPokemonList);
      });
  }, [selectPokemon]);

  return (
    <div className={styles.starter}>
      <PokemonList
        title="Choose your starter!"
        pokemonList={classicPokemonList}
      />
    </div>
  );
}
