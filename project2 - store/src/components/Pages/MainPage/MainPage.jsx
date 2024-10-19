import React from 'react'
import './MainPage.css'

import PosterBlock from '../../Templates/MainPage/Poster/PosterBlock'
import PopularBlock from '../../Templates/MainPage/PopularBlock'
import HighlightContainer from '../../Templates/General/Highlight/HighlightContainer'
import SliderBlock from '../../Templates/MainPage/Slider/SliderBlock'
import AdvertSignUp from '../../Templates/General/AdvertSignUp'
import SocialNetwork from '../../Templates/MainPage/SocialNetwork'
import AddresBlock from '../../Templates/MainPage/Map/AddresBlock'

import { generalPageLink } from '../../../assets/varibles/generalData'

import { useLoaderData } from 'react-router'

export default function MainPage() {

  const [story, product, brand] = useLoaderData()

  return (
    <main>
      <div className="main_background_block_first" />
      <div className="main_container_color">
        <PosterBlock />
        <PopularBlock data={product}/>
      </div>
      <div className='main_container_highlight'>
        <HighlightContainer
          card="story"
          icon="corner"
          data={story}
          title="Кто мы ?"
          button={["Подробнее"]}
          link="/"
          scroll
        />
        <HighlightContainer
          card="product"
          icon="heart"
          data={product}
          mode={["count", 4]}
          title="Самое свежее"
          button={["Подробнее", "Каталог"]}
          link={generalPageLink.catalog.path}
          scroll
        />
      </div>
      <SliderBlock />
      <div className='main_container_highlight'>
        <HighlightContainer
          card="availability"
          data={brand}
          title="Бренды в наличии"
          button={["Еще"]}
          link={generalPageLink.brand.path}
          scroll
        />
      </div>
      <AdvertSignUp />
      <SocialNetwork />
      <AddresBlock data={story[1]}/>
    </main>
  )
}
