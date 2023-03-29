
export const generateYears = () => {

    const max = new Date().getFullYear()
    const min = max - 15
    const years = [] 

    for (let year = max; year > min; year--) {
        years.push( year )     
    }

    return years
    
}
