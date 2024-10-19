import React from 'react'
import './AddresBlock.css'

import MapNat from '../Map/MapNat'
import HighlightCard from '../../../General/Highlight/HighlightCard'

import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

export default function AddresBlock({data}) {

  const [size] = useCheckWindowSize()

  const buttonsGroup = [
    {
      name: "Дополнительная информация для пользователя и еще",
      link: "/"
    },
    {
      name: "Дополнительная информация для пользователя",
      link: "/"
    },
    {
      name: "Дополнительная информация для пользователя и я не знаю что",
      link: "/"
    },
    {
      name: "Дополнительная информация для пользователя и я не знаю что еще можно",
      link: "/"
    },
    {
      name: "Дополнительная информация для пользователя, фу",
      link: "/"
    },
  ]

  return (
    <div className='adress_block'>
      <div className='adress_block_title'>{!size ? "Местоположение магазина" : "Расположение магазина"}</div>
      <MapNat cord={[55.761193, 37.579457]} mark={[55.761193, 37.579457]} zoom={13}/>
      <div className='adress_block_group'>
        <div className='adress_block_text_add'>
          <div className='adress_block_title'>Адрес:</div>
          <div className='adress_block_text'>Большая Грузинская улица, 2/12с1.</div>
          <div className='adress_block_title'>Часы работы:</div>
          <div className='adress_block_text'>10:00-23:00 (пн-пт), 10:00-21:00 (сб-вс)</div>
          {buttonsGroup.map((obj, i) => <p key={i}>{obj.name}</p>)}
        </div>
        <div className='adress_block_stories'>
          {!size && <HighlightCard card="story" icon="corner" {...data} />}
        </div>
      </div>
    </div>
  )
}