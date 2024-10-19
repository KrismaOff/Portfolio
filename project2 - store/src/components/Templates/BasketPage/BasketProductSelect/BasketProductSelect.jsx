import React, { useState } from 'react'
import './BasketProductSelect.css'

import svg from '../../../../assets/image/svg'

import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

import BasketProductSelectSwitcher from '../BasketProductSelectSwitcher'
import BasketProductSelectModalWindow from '../BasketProductSelectModalWindow'

export default function BasketProductSelect({ ch, data, recieveFunc, count, }) {

  const [size] = useCheckWindowSize()

  const [activeSelect, setActiveSelect] = useState(false)
  const [activeOption, setActiveOption] = useState(false)
  const switchSelect = () => setActiveSelect(prev => !prev)
  const switchOption = () => setActiveOption(prev => !prev)
  const switchAll = () => {
    switchSelect();
    switchOption();
  }
  const choseOption = (id) => {
    switchAll()
    recieveFunc(id)
  }

  const exeption = {
    tSize: ["Размер", "Доступные размеры"],
    tCount: ["Количество", "Доступное количество"],
    size: data && !count,
  }

  return (
    <div className='basket_product_select'>
      <div className='basket_product_select_cont'>
        {(!activeSelect || size) && <div className='basket_product_select_title'>
          {exeption.size ? <BasketProductSelectSwitcher
            option={exeption.tSize[0]}
            title={ch.name}
            func={switchAll}
          /> : <BasketProductSelectSwitcher
            option={exeption.tCount[0]}
            title={ch}
            func={switchAll}
          />}
        </div>}
        {activeSelect && <>
          {!size && <div className='basket_product_select_select_title' onClick={switchOption}>
            {exeption.size && <>{exeption.tSize[1]}: </>}
            {count && <>{exeption.tCount[1]}: </>}
            {svg("arrowBottom", 14, 14)}
          </div>}
          {activeOption && <>
            {exeption.size && <BasketProductSelectModalWindow ch={ch} data={data} func={choseOption} size />}
            {count && <BasketProductSelectModalWindow ch={ch} count={count} func={choseOption} />}
          </>}
        </>}
        <button onClick={switchSelect} className='basket_product_select_button'>
          {activeSelect ? "отменить" : "изменить"}
        </button>
      </div>
      {activeOption && <div className='basket_product_select_empty_block' onClick={switchAll} />}
    </div>
  )
}
