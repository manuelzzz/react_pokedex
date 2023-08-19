import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokemonCard({ name, imageUrl }: { name: string, imageUrl: string }) {
    return (
        <Card sx={{ maxWidth: 300, marginTop: "5em" }}>
            <CardMedia
                sx={{ height: 250 }}
                image={imageUrl}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
