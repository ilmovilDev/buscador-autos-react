import { useEffect, useState } from "react"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { cardDB } from "../helpers";
import { useBusqueda } from "../hooks";

export const ResultsTable = () => {

  const [mostrarResultado, setMostrarResultado] = useState(true)
  const { autosFiltrados, datosBusqueda, getAutosFiltrados } = useBusqueda()
  const autos = cardDB;

  useEffect(() => {
    console.log('filtrando')
    filtrarAutos()

  }, [ datosBusqueda ])

  const filtrarAutos = () => {

    let resultado = autos;
    const { marca, year, minimo, maximo, puertas, color } = datosBusqueda;
    
    resultado = autos.filter(auto => {
      return      (!marca || auto.marca === marca)
              &&  (!year || auto.year === year)
              &&  (!minimo || auto.precio >= minimo)
              &&  (!maximo || auto.precio <= maximo)
              &&  (!puertas || auto.puertas === puertas)
              &&  (!color || auto.color === color)
    });

      setMostrarResultado(resultado.length > 0)
      getAutosFiltrados(resultado)
      
  };
  


  return mostrarResultado ? (
                              <TableContainer 
                                component={Paper}
                              >
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                  <TableHead
                                    className="titulo-tabela"
                                  >
                                    <TableRow>
                                      <TableCell align="left">Logo</TableCell>
                                      <TableCell align="left">Marca</TableCell>
                                      <TableCell align="left">Modelo</TableCell>
                                      <TableCell align="left">Ano</TableCell>
                                      <TableCell align="left">Portas</TableCell>
                                      <TableCell align="left">Transmissão</TableCell>
                                      <TableCell align="left">Preço</TableCell>
                                      <TableCell align="left">Colors</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {autosFiltrados.map((auto, index) => (
                                      <TableRow
                                        key={index}
                                      >
                                        <TableCell align="left">
                                          <img src={auto.logo} alt="logo-auto" />
                                        </TableCell>
                                        <TableCell align="left">{auto.marca}</TableCell>
                                        <TableCell align="left">{auto.modelo}</TableCell>
                                        <TableCell align="left">{auto.year}</TableCell>
                                        <TableCell align="left">{auto.puertas}</TableCell>
                                        <TableCell align="left">{auto.transmision}</TableCell>
                                        <TableCell align="left">$ {auto.precio}</TableCell>
                                        <TableCell align="left">{auto.color}</TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            ) : <Typography variant="h5">Nenhum carro corresponde à sua pesquisa!!!</Typography>
}

