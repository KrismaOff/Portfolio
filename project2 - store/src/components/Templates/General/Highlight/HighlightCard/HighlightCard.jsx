import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HighlightCard.css'

import svg from '../../../../../assets/image/svg'
import { generalPageLink, generalIconOption } from '../../../../../assets/varibles/generalData'
import Button from '../../Button'

export default function HighlightCard({ chosenCard, chose, limit, id, card, icon, name, img, cost, src, brand, value }) {

  const [hoverName, setHoverName] = useState(false)

  const choseCardClass = {
    story: "highlight_card highlight_card_story",
    availability: "highlight_card highlight_card_availability",
    gift: "highlight_card highlight_card_gift",
    product: "highlight_card",
  }

  const check = chosenCard && Object.keys(chosenCard[0]).filter(id => chosenCard[0][id]);

  const handlerClickChosen = () => {
    const [giftChosenCard, setGiftChosenCard] = chosenCard;
    setGiftChosenCard({ ...giftChosenCard, [id]: limit > check.length && !chose })
  }

  return (
    <div className='highligh_card_link_cont'>
      <Link className='highligh_card_link' to={`${generalPageLink.product.path}/${id}`} state={value}>
        <div
          onMouseOver={() => setHoverName(true)}
          onMouseOut={() => setHoverName(false)}
          style={{ backgroundImage: `url(${img})` }}
          className={choseCardClass[card]} >
          <img src={src} alt='' className='highlight_card_img' />
          {icon && <div className='highlight_card_svg'>
            {svg(generalIconOption[icon].name, generalIconOption[icon].size, generalIconOption[icon].size, generalIconOption[icon].color, hoverName ? 1 : 0)}
          </div>}
          {brand && <div className='highlight_card_brand'>
            <img src={brand} alt='' className='highlight_card_brand_img' />
          </div>}
          <div className='highlight_card_title'>
            {name}
            {card !== "gift" && cost && <div className='highlight_card_cost'>{cost} руб.</div>}
          </div>
        </div>
      </Link>
      <div className={limit && limit === check.length && !chose ? "highlight_card_button_gift" : ""}>
        {card === "gift" && <Button
          func={handlerClickChosen}
          title={chose ? "Убрать" : "Добавить +"}
          reverse={!chose}
          m="20px 0 0" />
        }
      </div>
    </div>
  )
}