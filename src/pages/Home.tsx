import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Grid } from '@mui/material';
import { Container } from "@mui/system";
import IPokemon from '../types/Pokemon.type';
import { getPokemons } from '../service/GetPokemons';

export const Home = () => {
    const [defaultPokemons, setDefaultPokemons] = useState<IPokemon[]>([]);
    const [varPokemons, setVarPokemons] = useState<IPokemon[]>([])

    useEffect(() => {
        getPokemons(setDefaultPokemons, setVarPokemons);
    }, []);

    const pokemonFilter = (name: string) => {
        var filteredPokemons: IPokemon[] = [];

        if (name === "") {
            setVarPokemons(defaultPokemons);
        }

        for (var i in defaultPokemons) {
            if (defaultPokemons[i].name.includes(name)) {
                filteredPokemons.push(defaultPokemons[i]);
            }
        }

        setVarPokemons(filteredPokemons);
    }

    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="xl" >
                <Grid container>
                    {
                        varPokemons
                            .sort((a, b) => (a.id - b.id))
                            .filter((item, index) => varPokemons.indexOf(item) === index)
                            .map((pokemon: IPokemon, index: number) => (
                                <Grid item xs={3} style={{ paddingLeft: "2em", paddingRight: "2em" }} >
                                    <PokemonCard name={pokemon.name} imageUrl={pokemon.front_default} /*key={key}*/ />
                                </Grid>
                            ))
                    }
                </Grid>
            </Container>
        </div >
    );
}
