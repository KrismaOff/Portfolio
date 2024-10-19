export default function useHandleRowBeforeAdd(templateForRow, templateToAdd, classifierId, problemName, addRow) {
    const handleRowBeforeAdd = () => {
        let objWithInptplace = {};
        let keyFirstElem = Object.keys(templateForRow)[0]

        Object.keys(templateForRow).map(key => {
            objWithInptplace[key] = ""
            const keyWitchId = key + classifierId

            if (templateToAdd[keyWitchId]) objWithInptplace[key] = templateToAdd[keyWitchId]
            else if (problemName) objWithInptplace[keyFirstElem] = problemName
            return objWithInptplace;
        })

        if (window.confirm("Создать новую строку?")) {

            Object.keys(objWithInptplace).map(key => {
                if (objWithInptplace["ACTPRICEBUY"] === "") objWithInptplace["ACTPRICEBUY"] = 0
                if (objWithInptplace["ACTPRICEAVG"] === "") objWithInptplace["ACTPRICEAVG"] = 0
                if (objWithInptplace["OPERSUM"] === "") objWithInptplace["OPERSUM"] = 0
                if (objWithInptplace["COLOR"] === "") objWithInptplace["COLOR"] = "#FFFFFF"
                if (objWithInptplace[key] === "") objWithInptplace[key] = null
                return objWithInptplace;
            })
            addRow(objWithInptplace)
        }
    }
    return handleRowBeforeAdd
}
