import React, { useState } from 'react'
import './TagsBlock.css'

import useGetTagsData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetTagsData'

export default function TagsBlock({ tag }) {

    const { tagsData: { TAG_NAME, TAG_COLOR, TAG_DESCRIBE } } = useGetTagsData(tag)

    const [act, setAct] = useState(false)

    return (
        <div className="eventTag" style={{ background: TAG_COLOR }} onClick={() => setAct(!act)}>
            {TAG_NAME}
            {act && <div className='eventDesc'><hr />{TAG_DESCRIBE}</div>}
        </div>
    )
}
