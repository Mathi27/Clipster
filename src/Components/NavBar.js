import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import {SearchBar} from '../Exports'; 
import Box from '@mui/material';
import { spacing } from '@mui/system';

const NavBar = () => {
  return (
   
     <Stack direction="row" alignItems="center" 
      p={2} sx={{ position:'sticky',background:'#000',top:0 ,justifyContent:'space-between'}}>
      <Link to="/" style={{display:"flex",alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
        

         <Typography variant='h3' color="#FFF">Clipster</Typography>
      </Link>
     <SearchBar/>
     </Stack>
 
  ) 
}

export default NavBar;