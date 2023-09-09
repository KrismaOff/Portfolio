export const recieveValToggleList = (toggleList) => {
    let obj = {}


    if (toggleList) {
    Object.keys(toggleList[0]).map(key => {

        let word;

        switch (key) {
            case "cl_activestypes":
                word = "ACTIVETYPE"
                break;
            case "cl_activescalctypes":
                word = "ACTIVECALCTYPE"
                break;
            case "cl_activesobl":
                word = "ACTIVEOBL"
                break;
            case "cl_countries":
                word = "COUNTRY"
                break;
            case "cl_currency":
                word = "ACTIVEVAL"
                break;
            case "cl_unoperations":
                word = "CATEDI"
                break;
            case "cl_unactives":
                word = "ACTIVEEDI"
                break;
            default:
                word = "underfind"
                break;
        }
        return obj[word] = toggleList[0][key]
    })
    return obj
    }
    return obj
}