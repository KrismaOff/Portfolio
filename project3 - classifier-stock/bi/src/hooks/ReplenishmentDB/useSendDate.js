import useSendDateAPI from "./useSendDateAPI";

export default function useSendDate() {

    const { sendDateAPI } = useSendDateAPI()

    const sendDate = (date) => {
        console.log(sendDate);

        let arr = []
        for (let i = 0; i < date.split("-").length; i++) {
            if (date.split("-")[i].length === 1) arr.push(`0${date.split("-")[i]}`);
            else arr.push(date.split("-")[i])
        }

        const obj = JSON.stringify({
            "Uploader": {
                "crdate": arr.join("-")
            }
        })

        sendDateAPI(obj)
    }

    return { sendDate }
}
