export const recieveIdTableFromToggleList = (idRow) => {
    let word;
    if (idRow) {
        switch (idRow) {
            case "ACTIVETYPE": word = "cl_activestypes"
                break;
            case "ACTIVECALCTYPE": word = "cl_activescalctypes"
                break;
            case "ACTIVEOBL": word = "cl_activesobl"
                break;
            case "COUNTRY": word = "cl_countries"
                break;
            case "ACTIVEVAL": word = "cl_currency"
                break;
            case "CATEDI": word = "cl_unoperations"
                break;
            case "ACTIVEEDI": word = "cl_unactives"
                break;
            default: 
                break;
        }
        return word;
    }
    return word;
}