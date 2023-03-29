import { Grid } from "@mui/material"
import { HomePage } from "./pages"

export const App = () => {
  return (
    <Grid
      className="first-containt"
      container
      justifyContent= 'center'
      alignItems= 'center'
      sx={{
        p: 1 
      }}
    >
      <HomePage/>
    </Grid>
  )
}
