import { Divider, Grid, Typography } from "@mui/material";
import { RedesSociales, ResultsTable, SelectorsComp } from "../components";
import { Stack } from "@mui/system";

export const HomePage = () => {
  
  return (
    <Grid
      className="animate__animated animate__fadeIn"
      container
      direction= 'column'
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: 5,
        marginY: 5,
        maxWidth: 1080,
        padding: 2.5
      }}
    >
      <Grid item xs={12}>
        <Stack
          direction= 'row'
          justifyContent= 'space-between'
          alignItems= 'center'
        >
          <Typography 
            variant= 'h4'
            sx={{ letterSpacing: 1.5 }}
          >
            Localizador:
          </Typography>

          <RedesSociales/>

        </Stack>
      </Grid>

      <Divider sx={{ my: 1.5 }}/>

      <SelectorsComp/>

      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography 
          variant="h4"
          sx={{ letterSpacing: 1.5 }}
        >
          Resultado:
        </Typography>
      </Grid>

      <Divider sx={{ my: 2 }}/>

      <ResultsTable/>

    </Grid>
  )
}
