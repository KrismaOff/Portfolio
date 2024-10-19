import React from 'react'
import './HighlightBlock.css'

import HighlightContainer from '../HighlightContainer'

export default function HighlightBlock({ count, title, data, link, button, scroll }) {

    return (
        <>
            {Array.from({ length: data?.length }, (_, i) => <HighlightContainer
                key={i}
                count={count[i] && count[i] + 1}
                title={title && title[i]}
                data={data[i]}
                link={link && link[i]}
                button={button && button[i]}
                scroll={scroll && scroll[i]} />)}
        </>
    )
}
