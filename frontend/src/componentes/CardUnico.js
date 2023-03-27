import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea,Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import axios from "axios";
import Box from '@mui/material/Box';

//Nesta pagina iremos gerar alguns conteudos somente quando solicitado pelo usuario, sendo esses conteudos o personagem e os quadrinhos que ele participa

export default function CardUnico() {
    const [conteudo,setConteudo] = useState([]);
    const [name,setName] = useState('');
    const [personagem,setPersonagem] = useState(null);
    const [comics,setComics] = useState([]);

    const handleDescobirClick = () => {
        setConteudo([])
        setPersonagem(null)
        axios
            .get("http://localhost:8000/unic", { params: { nome: name } })
            .then((response) =>{
                setConteudo(response.data)
                setPersonagem(response.data.personagem)
                setComics(response.data.comics)
            })
            .catch("Não foi possivel fazer a requisição")
    };

  return (
    <div>
        <Box
        sx={{
            width:"100%",
            alignContent:"center"
        }}>
            <Box sx={{width:'50%',justifyContent:"space-between",margin:'auto', marginBottom:5}}>
                <Typography gutterBottom variant="h3" color="black">
                    Já quis ser um personagem da Marvel ?
                </Typography>
                <Typography gutterBottom variant="body1" color="black">
                    Esse dia chegou, basta colocar seu nome e descobrir qual personagem do mundo Marvel você é! Não fique triste se não
                    for quem você esperava, tente novamente e quem sabe isso pode mudar!
                </Typography>
            </Box>
            <Box sx={{width:'50%',display:'flex',justifyContent:"space-between",margin:'auto'}}>
                <TextField fullWidth id="standard-basic" label="Digite seu Nome" variant="standard" defaultValue={''} onChange={event => setName(event.target.value)} />
                <Button sx={{bgcolor:'#db3725',":hover":{backgroundcolor:"#680f07"}}} variant="contained" onClick={handleDescobirClick}>Descobrir</Button>
            </Box>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{padding:2}}
            >
                {!(personagem === null) &&
                    <Grid item xs={10}>
                        <Card sx={{borderRadius: 5, bgcolor: '#853431',display:"flex"}}>
                            <CardMedia
                                component="img"
                                sx={{ width: 345, alignContent: 'center' }}
                                image={conteudo.personagem.image.path +"." +conteudo.personagem.image.extension}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                  <Typography gutterBottom variant="h5" component="div" color='white'>
                                      {conteudo.personagem.name}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary" color ="white">
                                      {conteudo.personagem.description}
                                  </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                }
            </Grid>
            {!(personagem ===null) && (comics.length > 0) &&
                    <Typography gutterBottom variant="h4" color="black">
                    Quadrinhos que participou:
                    </Typography>
            }
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{margin:"auto"}}
            >
                {!(personagem === null) && comics.map((elem) => (
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345, borderRadius: 1, bgcolor: '#853431' }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              sx={{ alignContent: 'center' }}
                              image={elem.thumbnail.path + "." + elem.thumbnail.extension}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div" color = 'white'>
                                  {elem.title}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </div>
  );
}