import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Layout from '../components/layout/Layout';
import {menuList} from "../data/menuList";


const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menuList.map((menu) => (
          <Card sx={{ m: 2, width: "250px" }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Box sx={{display:"flex" , justifyContent:"space-between"}}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component={"div"}
                  >
                    <h5>{menu.name}</h5>
                  </Typography>
                  <Typography>
                    <h4>{menu.price}</h4>
                  </Typography>
                </Box>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Menu;