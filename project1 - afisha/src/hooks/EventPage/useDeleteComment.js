import useHandleReqEvents from "../handleActionDB/nativeDB/useHandleReqEvents"

export default function useDeleteComment(eventsData) {

    const handleReqEvents = useHandleReqEvents()

    const deleteComment = id => { if (window.confirm("Удалить оценку?")) handleReqEvents("delComment", eventsData, id) }

    return deleteComment
}
