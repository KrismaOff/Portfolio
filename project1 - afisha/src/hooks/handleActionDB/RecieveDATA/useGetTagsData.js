import { useEffect, useState, useContext } from 'react'
import { StatusUserContext } from '../../../components/App/App'

import useHandleReqTags from '../nativeDB/useHandleReqTags'

export default function useGetTagsData(id) {

    const { status } = useContext(StatusUserContext)

    const handleReqTags = useHandleReqTags()
    const [tagsData, setTagsData] = useState({})

    useEffect(() => {
        if (id && status) {
            if (id === "all") handleReqTags("getAll", setTagsData)
            else handleReqTags("get", setTagsData, id)
        }
        // eslint-disable-next-line
    }, [id, status])

    return { tagsData }
}



