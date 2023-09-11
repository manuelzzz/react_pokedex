import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IType from '../../types/PokemonsTypes.type';
import { Box, CardActionArea } from '@mui/material';

export default function PokemonCard({ name, imageUrl, types }: { name: string, imageUrl: string, types: IType[] }) {

    const typeHandler = (types: IType[]): string => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    }

    return (
        <Card sx={{ maxWidth: 300, marginTop: "5em", marginBottom: "-4em" }} elevation={6}>
            <CardMedia
                sx={{ height: 250 }}
                image={imageUrl}
                title={name}
            />
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Typography>
                    <Typography>
                        {typeHandler(types)}
                    </Typography>
                </Box>
            </CardContent>
            <CardActionArea></CardActionArea>
        </Card>
    );
}
