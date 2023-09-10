import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IType from '../../types/PokemonsTypes.type';

export default function PokemonCard({ name, imageUrl, types }: { name: string, imageUrl: string, types: IType[] }) {
    return (
        <Card sx={{ maxWidth: 300, marginTop: "5em", marginBottom: "-4em" }} elevation={6}>
            <CardMedia
                sx={{ height: 250 }}
                image={imageUrl}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </Typography>
                {
                    types.map((type) => {
                        return <Typography>{type.type.name}</Typography>
                    })
                }
            </CardContent>
        </Card>
    );
}
