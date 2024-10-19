import axios from 'axios'
import { url } from '../../globalvVariable'

export default function useSendSoglAPI() {
    const sendSoglAPI = async (obj) => {
        await axios
            .post(`${url}/uploader/Read`, obj)
            .then(({ data }) => {
                console.log(data);
                switch (data.message) {
                    case "DB OK":
                        alert("Данные были успешно записаны в БД!");
                        window.location.reload()
                        break;
                    case "DB ERROR":
                        alert("Произошла ошибка записи данных в БД!");
                        break;
                    case "ARRAY ERROR ":
                        alert("Ошибка получения найденных файлов");
                        break;
                    case "Records exists":
                        alert("Данные за этот день были уже внесены в БД");
                        break;
                    default: console.log(data); break;
                }
            })
            .catch(err => console.log("sendSoglAPI: " + err))
    }

    return sendSoglAPI
}
