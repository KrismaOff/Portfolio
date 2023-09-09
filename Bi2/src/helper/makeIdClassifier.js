export const recieveIdClassifier = (tableName) => {
    let idClassifier;
    switch (tableName) {
        case "cl_clients": idClassifier = "client";
            break;
        case "cl_operations": idClassifier = "oper";
            break;
        case "cl_activestypes": idClassifier = "acttypes";
            break;
        case "cl_activescalctypes": idClassifier = "actcalc";
            break;
        case "cl_activesobl": idClassifier = "obl";
            break;
        case "cl_countries": idClassifier = "country";
            break;
        case "cl_currency": idClassifier = "cur";
            break;
        case "cl_brokers": idClassifier = "broker";
            break;
        case "cl_actives": idClassifier = "active";
            break;
        case "cl_unactives": idClassifier = "unact";
            break;
        case "cl_unoperations": idClassifier = "unoper";
            break;

        default:
            break;
    }
    return idClassifier;
}