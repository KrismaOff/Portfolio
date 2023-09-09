import axios from 'axios'
import { url } from '../../../globalvVariable';
import { recieveIdClassifier } from '../../../helper/makeIdClassifier';

export default function useEditRow(id) {

    let idClassifier = recieveIdClassifier(id)

    const editRow = async (e) => {
        await axios.post(`${url}/writer/${idClassifier}Edit`, JSON.stringify(e))
            .then(() => window.location.reload())
            .catch(error => { console.log(error); })
    }

    return editRow

}
