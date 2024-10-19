import React, { useState, useEffect, useContext, Children, cloneElement } from 'react'
import './PosterCarusel.css'

import svg from '../../../../../assets/image/svg'

import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

import { PageContext } from '../../../../App/App'

export default function PosterCarusel({ children, scroll = false, arrow = false }) {

  const value = useContext(PageContext)

  const [size] = useCheckWindowSize()

  const checkSize = size ? "20" : "40"

  const [count, setCount] = useState(0)
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState([])

  const page_width = 100

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${page_width}%`,
            maxWidth: `${page_width}%`,
          },
          state: value
        })
      })
    )
  }, [children, value])

  const handlerLeftClick = () => {
    setCount(count !== 0 ? count - 1 : 0)
    setOffset(prev => Math.min(prev + page_width, 0))
  }
  const handlerRightClick = () => {
    setCount(count !== pages.length - 1 ? count + 1 : pages.length - 1)
    setOffset(prev => Math.max(prev - page_width, -(page_width * (pages.length - 1))))
  }
  const handlePointClick = (e) => {
    const id = Number(e.target.id)
    setOffset(id * -page_width)
    setCount(id);
  }

  const checkScrolling = (e) => {
    const size = e.currentTarget.clientWidth;
    const pos = e.currentTarget.scrollLeft;
    const currentPage = Math.floor(pos / size);
    setCount(currentPage);
  };

  const styleArrow = {
    opacity: 0,
    userSelect: "none"
  }

  return (
    <div>
      <div className='poster_carusel_container'>
        {!scroll && <div className='poster_carusel_all_items_empty' />}
        <div style={!arrow ? styleArrow : {}} onClick={handlerLeftClick} className='poster_carusel_arrow'>{svg("arrowLeft", checkSize, checkSize, "#181818")}</div>
        <div onScroll={checkScrolling} style={{ overflow: scroll ? "auto" : "hidden" }} className='poster_carusel_window'>
          <div className='poster_carusel_all_items' style={{ transform: `translateX(${offset}%)` }}>
            {pages}
          </div>
        </div>
        <div style={!arrow ? styleArrow : {}} onClick={handlerRightClick} className='poster_carusel_arrow'>{svg("arrowRight", checkSize, checkSize, "#181818")}</div>
      </div>
        <div className='poster_carusel_points_block_cont'>
          {Array.from({ length: pages.length }, (_, i) => <div id={i} onClick={!scroll ? handlePointClick : () => { }} key={i} className={count === i ? "poster_carusel_point_active" : "poster_carusel_point_passive"} />)}
        </div>
    </div>
  )
}
