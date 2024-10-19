import React from 'react'
import './FeedbackBlock.css'

import svg from '../../../../assets/image/svg'

export default function FeedbackBlock() {

    return (
        <div className='feedback_block'>
            <div className='feedback_block_cont'>

                <div className="feedback_block_title">Не нашли нужную вещь ?</div>
                <div className="feedback_block_text">Заполните форму ниже, мы найдем любой товар и доставим его Вам в течении 2-х недель</div>

                <div className='feedback_block_form_group'>
                    <form className='feedback_block_form'>
                        <div className='feedback_block_email_group'>
                            {svg("calendar",)}
                            <input type="email" className="feedback_block_email" placeholder='Email' />
                        </div>
                        <div className='feedback_block_input_group'>
                            <input type="text" className="feedback_block_type" placeholder='тип товара' />
                            <input type="text" className="feedback_block_brand" placeholder='бренд' />
                        </div>
                        <textarea className="feedback_block_textarea" cols="30" rows="10" placeholder='расскажите подробнее о том, что Вы ищите'></textarea>
                        <button className='feedback_block_button'>ОСТАВИТЬ ЗАЯВКУ</button>
                    </form>
                    <div style={{ backgroundImage: "url(https://i.gifer.com/9vVG.gif)" }} className='feedback_block_gif_block' />
                </div>
            </div>
        </div>
    )
}
