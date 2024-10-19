import React from 'react'
import './CatalogPage.css'

import Back from '../../Templates/General/Back'
import TagBlock from '../../Templates/CatalogPage/Tag/TagBlock'
import HighlightContainer from '../../Templates/General/Highlight/HighlightContainer'

import AdvertSignUp from '../../Templates/General/AdvertSignUp'

import { useLoaderData, useLocation } from 'react-router'

export default function CatalogPage() {

    const { state } = useLocation()

    const [tagSimple, tagSelect, product] = useLoaderData()

    return (
        <div>
            <div className='catalog_page'>
                <div className='catalog_page_cont'>
                    <Back {...state} />
                </div>
                <div className='catalog_page_cont catalog_page_cont_tags'>
                <TagBlock tags={tagSimple} />
                <TagBlock title="Дополнительные фильтры" tags={tagSelect} />
                </div>
                <div className='catalog_page_cont'>
                    <HighlightContainer
                        card="product"
                        icon="heart"
                        data={product}
                        mode={["page", [1, 4]]}
                        button={["еще"]}
                        link="/"
                    />
                    <HighlightContainer
                        card="product"
                        icon="heart"
                        data={product.slice(0, 4)}
                        title="Недавно смотрели"
                        button={["Подробнее"]}
                        link="/"
                        scroll
                    />
                </div>
            </div>
            <AdvertSignUp />
        </div>
    )
}
