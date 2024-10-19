import React from 'react'
import "./Navigation.css"

import BtnOpenPage from '../../templates/BtnOpenPage'

export default function Navigation({ switchPage, activeComp }) {

    return (
        <div className='btnOpenPageGroup'>
            <BtnOpenPage
                name="Сформировать отчет"
                page="OUTPUTOFREPORTS"
                btnAction={switchPage}
                activeButton={activeComp}
            />
            <BtnOpenPage
                name="Настройка БД"
                page="EDITDB"
                btnAction={switchPage}
                activeButton={activeComp}
            />

            <BtnOpenPage
                name="Пополнение БД"
                page="REPLENISHMENTDB"
                btnAction={switchPage}
                activeButton={activeComp}
            />

            <BtnOpenPage
                name="Классификаторы"
                page="CLASSIFIER"
                btnAction={switchPage}
                activeButton={activeComp}
            />
            <BtnOpenPage
                name="Вводы/Выводы"
                page="INPUTOUTPUT"
                btnAction={switchPage}
                activeButton={activeComp}
            />
        </div>
    )
}
