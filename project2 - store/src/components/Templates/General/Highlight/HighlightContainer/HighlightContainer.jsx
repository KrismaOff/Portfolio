import React, { useState, useContext } from 'react'
import './HighlightContainer.css'

import { PageContext } from '../../../../App/App'

import HighlightCard from '../HighlightCard'
import HighlightPage from '../HighlightPage'
import Button from '../../Button'

import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

export default function HighlightContainer({ chosenCard, limit, stateLocation, card, icon, data, mode, title, button, link, scroll }) {

  const value = useContext(PageContext)

  const [size] = useCheckWindowSize()

  const [active, setActive] = useState(mode && mode[0] === "count" ? mode[1] : data.length)
  const [scrollV, setScrollV] = useState(0)

  const checkScrolling = e => {
    const pos = e.currentTarget.scrollLeft, size = e.currentTarget.clientWidth
    const lenAll = (data.length - 2) * (size / 2)
    const res = (100 * pos) / lenAll
    setScrollV(res < 91 && res > 0 && res);
  }

  const len = button?.length
  const isMode = mode && mode[0] === "page"

  return (
    <div className='highlight_block'>
      <p className='highlight_block_title'>{title}</p>
      <div onScroll={checkScrolling} className={size && scroll ? 'highlight_block_container_adapt' : 'highlight_block_container'}>
        {data && data.slice(0, size ? data.length : active).map((val, i) => {
          const checkId = chosenCard && chosenCard[0][val?.id];
          return <HighlightCard
            chosenCard={chosenCard}
            chose={checkId}
            limit={limit}
            icon={icon}
            card={card}
            key={i}
            value={stateLocation ? stateLocation : value}
            {...val}
          />
        })}
      </div>
      {size && scroll && <div className='highlight_block_scroll'>
        <div className='highlight_block_scroll_line' style={{ marginLeft: `${scrollV}%` }} />
      </div>}
      <div className='highlight_block_button_cont'>
        {link && len === 2 && !size && <Button
          title={active !== mode[1] ? button[1] : button[0]}
          func={() => setActive(data.length)}
          link={active !== mode[1] && link}
          w="160px"
        />}
        {link && len === 2 && size && <Button
          title={button[0]}
          link={link}
          w="160px"
        />}
        {link && len === 1 && len !== 0 && <Button
          title={button[0]}
          link={link}
          w="160px"
        />}
      </div>
      {isMode && <HighlightPage page={mode[1]} />}
    </div>
  )
}
