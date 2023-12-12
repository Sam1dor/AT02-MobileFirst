import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function CardAmigosComum( { nome, imagem, amigosComum, imagemAlt }) {
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={imagem}
          alt={imagemAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amigo em comum: {amigosComum}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver amigo em comum
        </Button>
        <Button size="small" color="primary">
          Adicionar a lista de amigos
        </Button>
      </CardActions>
    </Card>
    
  );
}