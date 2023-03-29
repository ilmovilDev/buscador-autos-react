import { useState } from "react";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { generaPrecio, generateYears } from "../helpers"
import { useBusqueda } from "../hooks";

const marcaMenu = ['BMW','Audi','Ford','Mercedes Benz','Chevrolet','Dodge']
const colorMenu = ['Branco','Preto','Vermelho','Azul','Cinza']
const puertasMenu = ['2','4']

export const SelectorsComp = () => {
    
    const years = generateYears();
    const { minimo, maximo } = generaPrecio()

    const { getDatosBusqueda } = useBusqueda()
    
    //Generar un objeto con la busqueda
    const [busqueda, setBusqueda] = useState({
                                                marca: "",
                                                year: "",
                                                minimo: "",
                                                maximo: "",
                                                puertas: "",
                                                transmision: "",
                                                color: "",
                                            });
    
    const handleChange = (fieldName, value) => {
        const updatedBusqueda = {
            ...busqueda,
            [fieldName]: value,
        };
        setBusqueda(updatedBusqueda);
        getDatosBusqueda(updatedBusqueda);
    };
    
    const handleChangeMarca = (event) => {
        handleChange('marca', event.target.value);
    };
    
    const handleChangeYear = (event) => {
        handleChange('year', event.target.value);
    };
    
    const handleChangeMinimo = (event) => {
        handleChange('minimo', event.target.value);
    };
    
    const handleChangeMaximo = (event) => {
        handleChange('maximo', event.target.value);
    };
    
    const handleChangePuertas = (event) => {
        handleChange('puertas', parseInt(event.target.value));
    };

    const handleChangeColor = (event) => {
        handleChange('color', (event.target.value));
    };

  return (
    <Grid
        container
        spacing={0.5}
    >
        <Grid // Select Marca
            item
            xs={6} md={2}
        >
            <InputLabel>Marca:</InputLabel>
            <Select
                value={busqueda.marca}
                onChange={handleChangeMarca}
                fullWidth
            >
                <MenuItem value=""><em>Excluir filtro</em></MenuItem>
                {
                    marcaMenu.map((marca,index) => (
                        <MenuItem
                            key={index}
                            value={marca}
                        >
                            { marca }
                        </MenuItem>
                    ))
                }
            </Select>
        </Grid>

        <Grid // Select Año
            item
            xs={6} md={2}
        >
            <InputLabel>Ano:</InputLabel>
            <Select
                value={busqueda.year}
                onChange={handleChangeYear}
                fullWidth
            >
                <MenuItem value=""><em>Excluir filtro</em></MenuItem>
                {
                    years && years.map( year => (
                        <MenuItem
                            key={year}
                            value={year}
                        >
                            { year }
                        </MenuItem>
                    ))
                }
            </Select>
        </Grid>

        <Grid // Select Puertas
            item
            xs={6} md={2}
        >
            <InputLabel>Portas:</InputLabel>
            <Select
                value={busqueda.puertas}
                onChange={handleChangePuertas}
                fullWidth
            >
                <MenuItem value=""><em>Excluir filtro</em></MenuItem>
                {
                    puertasMenu && puertasMenu.map( (puertas, index ) => (
                        <MenuItem
                            key={index}
                            value={puertas}
                        >
                            { puertas }
                        </MenuItem>
                    ))
                }
            </Select>
        </Grid>

        <Grid // Select Precio minimo
            item
            xs={6} md={2}
        >
            <InputLabel>Preço minimo:</InputLabel>
            <Select
                value={busqueda.minimo}
                onChange={handleChangeMinimo}
                fullWidth
            >
                <MenuItem value=""><em>Excluir filtro</em></MenuItem>
                {
                    minimo && minimo.map( (minimo, index) => (
                        <MenuItem
                            key={index}
                            value={minimo}
                        >
                            $ { minimo }
                        </MenuItem>
                    ))
                }
            </Select>
        </Grid>

        <Grid // Select Precio maximo
            item
            xs={6} md={2}
        >
            <InputLabel>Preço maximo:</InputLabel>
            <Select
                value={busqueda.maximo}
                onChange={handleChangeMaximo}
                fullWidth
            >
                <MenuItem value=""><em>Excluir filtro</em></MenuItem>
                {
                    maximo && maximo.map( (maximo, index ) => (
                        <MenuItem
                            key={index}
                            value={maximo}
                        >
                            $ { maximo }
                        </MenuItem>
                    ))
                }
            </Select>
        </Grid>

        <Grid // Select Color
            item
            xs={6} md={2}
        >
            <InputLabel>Cor:</InputLabel>
            <Select
                value={busqueda.color}
                onChange={handleChangeColor}
                fullWidth
            >
                <MenuItem value=""><em>Excluir filtro</em></MenuItem>
                {
                    colorMenu && colorMenu.map( (color, index ) => (
                        <MenuItem
                            key={index}
                            value={color}
                        >
                            { color }
                        </MenuItem>
                    ))
                }
            </Select>
        </Grid>
    </Grid>
  )
}
