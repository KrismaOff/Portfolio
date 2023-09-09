import axios from 'axios'

import { url } from '../../../globalvVariable';
import { recieveIdClassifier } from '../../../helper/makeIdClassifier';

export default function useDeleteRow(id) {

    let idClassifier = recieveIdClassifier(id)

    const deleteRow = async (e) => {
        await axios.post(`${url}/writer/${idClassifier}Del`, JSON.stringify({ "ID": e }))
            .then(() => window.location.reload())
            .catch(error => { console.log(error); })
    }

    return deleteRow

}
