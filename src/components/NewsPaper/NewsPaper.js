import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const NewsPaper = () => {
    const [articles,setArticlse] = useState([]);
    
    useEffect(()=>{
       fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=894038b990aa495397ade83cd4178534')
       .then(res => res.json())
       .then(data => setArticlse(data.articles))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
           articles.map(article=> <Grid item xs={2} sm={4} md={4} >
            <News article={article}></News>
            </Grid>)
          }
        </Grid>
      </Box>
    );
};

export default NewsPaper;