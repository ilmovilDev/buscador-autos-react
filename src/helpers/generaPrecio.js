
export const generaPrecio = () => {

    const precioMinimo = 10000;
    const precioMaximo = 20000;
    const minimo = [];
    const maximo = [];

    
    for (let min = 20000; min <= 80000; min+= precioMinimo ) {
        minimo.push( min )  
    }
    
    for (let max = 200000; max >= 60000; max-= precioMaximo ) {
        maximo.push( max )
    }

    return {
        maximo,
        minimo,
    }

}


