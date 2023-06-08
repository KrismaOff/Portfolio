import React, { useState } from 'react'
import './TagsBlock.css'

import useGetTagsData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetTagsData'

export default function TagsBlock({ tag }) {

    const { tagsData: { TAG_NAME, TAG_COLOR, TAG_DESCRIBE } } = useGetTagsData(tag)

    const [act, setAct] = useState(false)
    const [actTx, setActTx] = useState(false)

    const changeState = () => {
        setAct(!act);
        setTimeout(() => setActTx(!actTx), 100);
    }

    return (
        <div className={act ? "eventTag eventTagOpen" : "eventTag"} style={{ background: TAG_COLOR }} onClick={changeState}>
            {TAG_NAME}
            {act && <div className='eventDesc'><hr />{actTx && <div>{TAG_DESCRIBE}</div>}</div>}
        </div>
    )
}
