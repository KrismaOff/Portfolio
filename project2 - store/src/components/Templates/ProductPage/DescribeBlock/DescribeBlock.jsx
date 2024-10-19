import React, { useState } from 'react'
import './DescribeBlock.css'

import TableSize from '../TableSize'

import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function DescribeBlock({ text, article }) {

  const [size] = useCheckWindowSize()

  const [state, setState] = useState("1")

  const switcherOption = {
    1: "Описание",
    2: "Доставка и возврат",
    3: "Таблица размеров",
  }

  const changeSwOption = (e) => setState(e.target.id)

  return (
    <div className='describe_block'>
      <div className='describe_block_cont'>
        <div className='describe_block_switcher'>
          {Object.keys(switcherOption).map(key =>
            <div className='describe_block_switcher_cont_opt' key={key} >
              <div id={key} onClick={changeSwOption}
              style={{background: size && state === key && "white"}}>
                {switcherOption[key]}
              </div>
              {!size && <div className={state === key ? "describe_block_line" : "describe_block_line op0"} />}
            </div>
          )}
        </div>
        <div className='descrine_block_information'>
          {state === "1" && <>
            <div>{text}</div>
            {!size && <div className='descrine_block_information_art'>Артикул: {article}</div>}
          </>}
          {state === "2" && <>
            <div>Ничего</div>
            <div></div>
          </>}
          {state === "3" && <TableSize />}
        </div>
      </div>
    </div>
  )
}
