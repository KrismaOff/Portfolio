import React from 'react'
import './Loyalty.css'

import BasketProductInfoCorrection from '../../BasketPage/BasketProductInfoCorrection'

export default function Loyalty({ procent, level, cost, remains }) {
  return (
    <div className='loyalty'>
      <BasketProductInfoCorrection
        name="Программа лояльности"
        text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. "
        button="Узнать подробности"
        link="/" />
      <div className='loyalty_cont'>
        <span>Уровень {level[0]}</span>
        <span>Уровень {level[1]}</span>
      </div>
      <div className='loyalty_procent_cont'>
        <div className='loyalty_procent' style={{ width: `${procent}%` }} />
      </div>
      <div className='loyalty_cont'>
        <span>{cost[0]} руб.</span>
        <span>{cost[1]} руб.</span>
      </div>

      <div className='loyalty_next_level'>
        <span>До следующего уровня останется </span><br />
        <div className='loyalty_next_level_cost'>{remains} руб.</div>
      </div>
    </div>
  )
}
