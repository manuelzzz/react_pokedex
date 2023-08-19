import axios from "axios";
import IPokemon from "../types/Pokemon.type";
import React from "react";

export const getPokemons = (
    setDefaultPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>,
    setVarPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>,
) => {
    var endpoints: string[] = [];

    for (var i = 1; i <= 200; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios.all(
        endpoints.map((endpoint) => axios.get(endpoint)
            .then((res) => {
                var atualPokemon: IPokemon = {
                    height: res.data.height,
                    id: res.data.id,
                    name: res.data.name,
                    front_default: res.data.sprites.front_default,
                    weight: res.data.weight,
                }
                setDefaultPokemons((p) => [...p, atualPokemon]);
                setVarPokemons((p) => [...p, atualPokemon]);
            })
            .catch((err) => console.error('At axios.get', err)),
        ));
};