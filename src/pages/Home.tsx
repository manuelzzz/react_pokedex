import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Grid } from '@mui/material';
import { Container } from "@mui/system";
import axios from 'axios';
import IPokemon from '../types/Pokemon.type';

export const Home = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints: string[] = [];

        for (var i = 1; i <= 100; i++) {
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
                    setPokemons((p) => [...p, atualPokemon]);
                })
                .catch((err) => console.error('At axios.get', err)),
            ));

    };


    const pokemonFilter = (name: string) => {
        var filteredPokemons: IPokemon[] = [];

        if (name === "") {
            getPokemons();
        }

        for (var i in pokemons) {
            if (pokemons[i].name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }

        setPokemons(filteredPokemons);
    }


    pokemons.sort((a, b) => (a.id - b.id));
    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="xl" >
                <Grid container>
                    {
                        pokemons
                            .sort((a, b) => (a.id - b.id))
                            .filter((item, index) => pokemons.indexOf(item) === index)
                            .map((pokemon: IPokemon, index: number) => (
                                <Grid item xs={3} style={{ paddingLeft: "2em", paddingRight: "2em", paddingTop: "2em", paddingBottom: "2em" }} >
                                    <PokemonCard name={pokemon.name} imageUrl={pokemon.front_default} /*key={key}*/ />
                                </Grid>
                            ))
                    }
                </Grid>
            </Container>
        </div >
    );
}
