import { Link } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const listaIconos = [
  { link: 'https://github.com/iLmovil', icon: <GitHubIcon color='primary' fontSize='large' /> },
  { link: 'https://www.linkedin.com/in/luis-carrasco-silva-2b09a6212', icon: <LinkedInIcon color='primary' fontSize='large' /> },
]

export const RedesSociales = () => {
  return (
    <Stack
      direction= 'column'
      justifyContent= 'end'
      alignItems= 'center'
    >
      <Stack
        direction= 'row'
        alignItems= 'center'
      >
        {
          listaIconos.map((item, index) => (
            <IconButton
              component={Link}
              key={index}
              target="_blank"
              to={item.link}
            >
              { item.icon }
            </IconButton>
          ))
        }
      </Stack>
      <Typography 
        variant='caption'
        sx={{
          display: {
            //xs: 'none',
            md: 'block'
          }
        }}
      >
        Dev: Luis Carrasco
      </Typography>
    </Stack>
  )
}
