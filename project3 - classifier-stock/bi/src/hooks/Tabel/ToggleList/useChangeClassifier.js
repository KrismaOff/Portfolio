import useHanldeSessionClassifier from './useHandleSessionClassifier'

export default function useChangeClassifier(data, setClassifier) {

    const [selectedClassifier, setSelectedClassifier] = useHanldeSessionClassifier(data, setClassifier)
 
    const changeClassifier = (e) => {
        let value = e.target.value

        setSelectedClassifier(value)

        let id;
        Object.keys(data).map(key => {
            if (data[key].CLDESC === value) id = data[key].CLNAME;
            return id
        })
        sessionStorage.setItem("activeClassifier", JSON.stringify({ cl_key: id, cl_name: value }))
        setClassifier({ cl_key: id, cl_name: value })
    }

    return [selectedClassifier, changeClassifier]
}
