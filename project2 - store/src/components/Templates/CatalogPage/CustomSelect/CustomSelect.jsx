import React, { useState, useEffect } from 'react'
import './CustomSelect.css'

import svg from '../../../../assets/image/svg'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function CustomSelect({ state, name, id, params }) {

  const [size] = useCheckWindowSize()

  const [actSelectState, setActSelectState] = state

  const [active, setActive] = useState(false)
  const [chosenOption, setChosenOption] = useState({})

  useEffect(() => {
    if (actSelectState !== id) setActive(false)
  }, [actSelectState, id])

  const choseOption = e => {
    setChosenOption(prev => ({ ...prev, [e.target.id]: !chosenOption[e.target.id] }))
  }
  const choseSelect = () => {
    setActive(prev => !prev)
    if (size) {
      if (active) document.body.classList.remove('fixed');
      else document.body.classList.add('fixed');
    }
    setActSelectState(actSelectState !== id && id)
  }

  return (
    <div>
      {actSelectState === id && <div className='custom_select_empty_block' onClick={choseSelect} />}
      <div className='custom_select'>
        <div className='custom_select_title' onClick={choseSelect}>
          {name}
          {!size && svg("arrowBottom", 14, 14)}
          </div>
        {active &&
          <div className='custom_select_options'>
            {size && <div className='custom_select_options_cont_name'>
              {name}
              <span className='custom_select_options_cont_cross' onClick={choseSelect}>{svg("cross", 15, 15)}</span>
            </div>}
            <div className='custom_select_options_cont'>
              {params.map(obj => {
                let id = obj.id; name = obj.name
                return <div className='custom_select_option_cont' key={id} id={id} onClick={choseOption}>
                  <div className={chosenOption[id] ? 'custom_select_radio_btn radio_btn_act' : 'custom_select_radio_btn'} id={id} />
                  <div className='custom_select_option' id={id}>
                    {name.includes("http") ? <img width="50px" height="40px" src={name} alt='' /> : name}
                  </div>
                </div>
              })}
            </div>
            {size && <div className='custom_select_options_show'>Показать 218 товаров</div>}
          </div>}
      </div>
    </div>
  )
}
