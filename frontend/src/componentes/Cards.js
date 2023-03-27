import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import {useEffect, useState} from "react";
import axios from "axios";
import Box from '@mui/material/Box';

//Esta é a página principal que é responsável pelo fornecimento dos personagens, aqui também há a paginação para buscar os personagens seguintes

export default function Cards() {
    const [persons,setPersons] = useState([]);
    const [offset,setOffset] = useState(0);

    const handleChangePagination = (event, pageNumber = 1) => {
        debugger;
        setPersons([])
        setOffset(pageNumber)
        axios
            .get("http://localhost:8000/", { params: { offset: pageNumber } })
            .then((response) =>{
                console.log(response.data)
                setPersons(response.data)
            })
            .catch("Não foi possivel fazer a requisição")
    };


    useEffect(() => {
        axios
            .get("http://localhost:8000/", {params:{offset:offset}})
            .then((response) =>{
                console.log(response.data)
                setPersons(response.data)
            })


    },[])

  return (
    <div>
        <Box
        sx={{
            width:"100%",
            alignContent:"center",
        }}>
            <Typography gutterBottom variant="h3" color="black">
                Achou que a Marvel era só os Avengers ?
            </Typography>
            <Typography gutterBottom variant="body1" color="black">
                ERROU!. Aqui você irá encontrar todos os personagens da Marvel, cada Card representa um personagem, infelizmente
                nem todos possuem ilustração ou descrição. Divirta-se!
            </Typography>
            <Box sx={{display:'flex',width:'50%',justifyContent:"space-between",margin:'auto', marginBottom:5}}>
                <Pagination sx={{margin:"auto",justifyContent:"space-around"}} count={15} onChange={(event, pageNumber) => handleChangePagination(event, pageNumber)}/>
            </Box>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{margin:"auto"}}
            >
                {persons.map((elem) => (
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345, borderRadius: 1, bgcolor: '#853431' }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              sx={{ width: 'automatic', alignContent: 'center' }}
                              image={elem.image}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div" color = 'white'>
                                  {elem.name}
                              </Typography>
                              <Typography variant="body2" color="white">
                                  {elem.description}
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