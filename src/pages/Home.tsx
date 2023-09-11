import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { CircularProgress, Grid } from '@mui/material';
import { Container } from "@mui/system";
import IPokemon from '../types/Pokemon.type';
import { getPokemons } from '../service/GetPokemons';

export const Home = () => {
    const [defaultPokemons, setDefaultPokemons] = useState<IPokemon[]>([]);
    const [varPokemons, setVarPokemons] = useState<IPokemon[]>([])
    var firstPokemon = 0;
    var lastPokemon = 1010;

    useEffect(() => {
        getPokemons(
            setDefaultPokemons,
            setVarPokemons,
            defaultPokemons,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        varPokemons.length === 0 ?
                            <CircularProgress
                                color='inherit'
                                size={40}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: `${-40 / 2}px`,
                                    marginLeft: `${-40 / 2}px`
                                }}
                            />
                            :
                            varPokemons
                                .sort((a, b) => (a.id - b.id))
                                .filter((item, index) => varPokemons.indexOf(item) === index)
                                .map((pokemon: IPokemon, index: number) => (
                                    firstPokemon <= index && index <= lastPokemon ?
                                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ paddingLeft: "1em", paddingRight: "1em" }} >
                                            <PokemonCard
                                                name={pokemon.name}
                                                imageUrl={pokemon.front_default}
                                                types={pokemon.types}
                                            />
                                        </Grid> :
                                        <></>
                                ))
                    }
                </Grid >
            </Container >
        </div >
    );
}
