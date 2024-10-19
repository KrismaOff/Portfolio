import React from 'react'
import './GiftInfo.css'

import svg from '../../../../assets/image/svg'
import { generalPageLink } from '../../../../assets/varibles/generalData'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function GiftInfo() {

    const [size] = useCheckWindowSize()

    const sizeS = size ? 22 : 42 

    return (
        <div className='gift_info'>
            <div className='gift_info_link_cont'>
                <div className='gift_info_link_line' />
                <a href={generalPageLink.TG}>{svg("TG", sizeS, sizeS)}</a>
                <a href={generalPageLink.VK}>{svg("VK", sizeS, sizeS)}</a>
                <a href={generalPageLink.YT}>{svg("YT", sizeS, sizeS)}</a>
                <div className='gift_info_link_line' />
            </div>
            <div className='gift_info_text_under'>Ut non nisi orci. Etiam congue condimentum nisl eget varius. Suspendisse vel risus vitae urna interdum ultrices. Pellentesque vel commodo urna. Nunc tempus maximus nisl nec blandit. Aliquam iaculis lobortis sem, sit amet tincidunt mi. Nullam ac mauris id erat interdum fringilla sed id arcu. Morbi faucibus metus facilisis placerat dignissim. Integer ullamcorper quam ut eros eleifend aliquam. Maecenas orci ligula, bibendum id gravida placerat, iaculis sit amet nisi. Aliquam sodales pulvinar libero. Pellentesque rutrum erat a enim efficitur finibus. Donec elit ipsum, pharetra eu tincidunt id, mollis in nibh. Proin ac neque eu turpis eleifend laoreet eget ac urna. Sed bibendum sapien a libero pellentesque fringilla id ac metus.</div>
        </div>
    )
}
