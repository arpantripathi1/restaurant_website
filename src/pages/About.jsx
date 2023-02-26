import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <Layout>
      <Box 
        sx={{my:15 , 
          p:3 ,
          textAlign: 'center' ,
          "& h4":{fontWeight:'bold'} ,
          "& p": {textAlign:"justify"} ,
          "@media (max-width:600px)":{
            mt: 0 ,
            "& h4" : {fontSize: "1.5rem",}
          }  

      }}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
      <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolorum architecto consequuntur unde modi harum ipsam sequi eveniet! Itaque porro voluptas corporis quae cupiditate dignissimos debitis molestiae recusandae earum expedita asperiores libero consequuntur, officia eaque sequi incidunt fuga culpa blanditiis! Unde tempore illo eos vero velit aliquid, cum libero ipsam officia at et inventore quibusdam maiores molestias. Aperiam delectus debitis repudiandae officiis! Magni ad ullam laboriosam omnis error iusto totam delectus voluptatibus possimus architecto qui enim ea unde, iure amet deleniti, et facilis tempore. Nam non, suscipit quibusdam enim ea voluptatibus natus optio eveniet eligendi voluptas placeat. Itaque, autem omni
      </p>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sapiente doloremque amet quaerat placeat architecto, optio numquam iure dicta deleniti perferendis! Eaque est excepturi vero sunt illum quas cum reiciendis veniam nihil quam corporis molestiae modi quod fuga suscipit ipsam, aut, natus a ut amet? Fugiat perferendis perspiciatis quibusdam neque eius numquam esse deleniti voluptatum atque natus ex iusto dolores corrupti possimus facere corporis eum vero rerum commodi autem totam, labore aliquid? Quod, quisquam aliquid. Dolorum assumenda necessitatibus saepe expedita, at dicta sequi! Voluptas, placeat? Blanditiis ex at incidunt, minus quod aliquid quaerat nulla necessitatibus repellendus quos dolore. Vitae, culpa.
      </p>


      </Box>
    </Layout>
  )
}

export default About