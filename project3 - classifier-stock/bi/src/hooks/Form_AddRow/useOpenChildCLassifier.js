export default function useOpenChildCLassifier(setClassifier, setActivePage) {
    const addOpenClassifier = (idClassifier) => {           // погруженние в дочерний классификатор (кнопка +)
        setClassifier({ cl_key: idClassifier })
        setActivePage(prev => { return { ...prev, [idClassifier]: "" } })
    }
    return addOpenClassifier
}
