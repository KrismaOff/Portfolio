import useRecieveHandleSimpleInp from './useRecieveHandleSimpleInp'
import useRecieveHandleComplexInp from './useRecieveHandleComplexInp'
import useRecieveHandleDataEdit from './useRecieveHandleDataEdit'

export default function useHandleCreateEventData(eventsData, tagsData, eventPlacesData) {

    const [data, setData] = useRecieveHandleDataEdit(eventsData, tagsData, eventPlacesData)
    const changeSimpInp = useRecieveHandleSimpleInp(data, setData)
    const changeCompInp = useRecieveHandleComplexInp(data, setData)

    return [data, changeSimpInp, changeCompInp]
}
