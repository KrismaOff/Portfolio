import axios from "axios";
import { url } from "../../globalvVariable";

export default function useSendDateAPI() {

    const sendDateAPI = (obj) => {
        console.log("sendDateAPI");
        console.log(obj);
        axios
        .post(`${url}/uploader/pred`, obj)
        .then(({ data }) => {
            console.log(data);
            console.log(obj);
        })
        .catch(err => console.log(err))
    }

  return { sendDateAPI }
}
