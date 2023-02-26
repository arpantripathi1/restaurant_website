import React from 'react' ;
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material' ;
import Layout from '../components/layout/Layout';

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, mx: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          vero a veniam tenetur doloremque laboriosam dignissimos soluta rem,
          dolore esse mollitia illo minima ad consequuntur harum dolorem illum
          officiis saepe, totam ea! Quam, ratione ipsa libero reiciendis cumque
          sit praesentium, velit tempore rerum, non a nemo ducimus! Perferendis
          hic nisi magnam aspernatur repellendus eum iste, voluptates quaerat ea
          numquam? Laudantium voluptates quisquam minus enim quod consequuntur,
          dolores doloribus exercitationem quae delectus corporis totam repellat
          aliquid inventore vel perspiciatis pariatur! Beatae expedita maxime,
          voluptatibus tempora necessitatibus cumque deleniti quam similique
          officiis quae eveniet esse. Repudiandae illum id, deleniti dolorem
          iure iste.
        </p>
      </Box>
      <Box width={"400px"} margin="auto" marginBottom="40px">
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  contact details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ p: 1, m: 0}}>
                  <SupportAgentIcon
                    sx={{ color: "red", pt: 2, height: "2rem" }}
                  />
                  1800-4547-6576 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{  p: 1, m: 0 ,mb:4}}>
                  <MailIcon sx={{ color: "skyblue", pt: 2, height: "2rem" }} />
                  helprest@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;