
export default function useBackClassifier(activePage, setActivePage, setClassifier) {

    const backClassifier = () => {          // возращение к компоненту прошлому
        let obj = {}
        Object.keys(activePage).map(key => {
            let lastValActivePage = Object.keys(activePage).reverse()[0]

            obj[key] = activePage[key]
            delete obj[lastValActivePage]
            return obj
        })
        const classifierKey = Object.keys(obj).reverse()[0]

        setClassifier({ cl_key: classifierKey, cl_name: "" })
        setActivePage(obj)
    }

    return backClassifier
}
