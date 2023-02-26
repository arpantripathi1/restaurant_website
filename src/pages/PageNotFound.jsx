import { Box, Typography } from "@mui/material";
import React from 'react'
import Layout from '../components/layout/Layout'

const PageNotFound = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} height={"70vh"} alignItems={"center"}>
      <h3>Page Not Found : 404 error!!!!!!</h3>
      <Typography variant="body2">
        The requested URL/badpage was not found on this server.
      </Typography>
    </Box>

  )
}

export default PageNotFound