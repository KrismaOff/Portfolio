export default function useRecieveHandleSimpleInp(data, setData) {

    const changeSimpInp = e => {
        let obj = Object.assign({}, data);
        
        if (e.target.className.includes("select")) { // All Select
            if (e.target.id === "EVENT_PLACE_ID") obj.EVENT_TABLE = []
            obj[e.target.id] = e.target[e.target.selectedIndex].id
        } 
        else if (e.target.id.includes("EVENT_TIME")) obj.EVENT_TIME[e.target.id.at(-1)] = e.target.value
        else obj[e.target.id] = e.target.value.trim() // EVENT_NAME, EVENT_DATE, EVENT_IMG, EVENT_DESCRIBE

        setData(obj)
    }

    return changeSimpInp
}
