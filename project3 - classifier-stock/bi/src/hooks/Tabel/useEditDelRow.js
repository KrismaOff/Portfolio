import axios from 'axios'

import { url, classifierColumnData } from '../../globalvVariable';

export default function useEditDelRow(id) {

    const editDelRow = async (e, act) => {

        const exeptions = {
            "Del": { "ID": e }, // true
            "Edit": e           // false
        }

        const idClassifier = classifierColumnData[id].childName
        await axios.post(`${url}/writer/${idClassifier}${act}`, JSON.stringify(exeptions[act]))
            .then(() => window.location.reload())
            .catch(error => { console.log(error); })
    }

    return editDelRow
}
