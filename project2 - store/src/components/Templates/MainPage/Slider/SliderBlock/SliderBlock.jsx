import React from 'react'
import './SliderBlock.css'

import SliderText from '../SliderText'
import Slider from '../../../../../assets/image/poster/Slider.jpg'
import svg from '../../../../../assets/image/svg'

import useChangeDataSlider from '../../../../../hooks/general/useChangeDataSlider'

import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

export default function SliderBlock() {

  const data = [
    {
      title: "\nVetements",
      img: Slider,
      id: "",
      link: ""
    },
    {
      title: "\nБучи",
      img: Slider,
      id: "",
      link: ""
    },
    {
      title: "\nЛучиа",
      img: Slider,
      id: "",
      link: ""
    },
    {
      title: "\nGachiMuch",
      img: Slider,
      id: "",
      link: ""
    },
    {
      title: "\nHuckda",
      img: Slider,
      id: "",
      link: ""
    },
  ]

  const [count, setCount, changeData] = useChangeDataSlider(data)

  const [size] = useCheckWindowSize()

  const checkSize = size ? "20" : "40"

  return (
    <div className='slider_block'>
      <div className='slider_block_cont'>

        {size ?
          <div className='slider_block_cont_img'>
            <div className='slider_block_img' style={{ backgroundImage: `url(${data[count].img})` }} />
            <SliderText title={data[count].title} link={data[count].link} />
          </div>
          :
          <div className='slider_block_cont_img'>
            <div onClick={() => changeData("minus")}>{svg("arrowLeft", checkSize, checkSize, "#FFF")}</div>
            <div className='slider_block_img' style={{ backgroundImage: `url(${data[count].img})` }}>
              <SliderText title={data[count].title} link={data[count].link} />
            </div>
            <div onClick={() => changeData()}>{svg("arrowRight", checkSize, checkSize, "#FFF")}</div>
          </div>
        }

        <div className='slider_block_cont_nav'>
          {size && <><div onClick={() => changeData("minus")}>{svg("arrowLeft", checkSize, checkSize, "#FFF")}</div><div/></>}
          {Array.from({ length: 5 }, (_, i) => <div onClick={() => setCount(i)} key={i} className={count === i ? "slider_block_points_pass" : "slider_block_points_act"} />)}
          {size && <><div/><div onClick={() => changeData("")}>{svg("arrowRight", checkSize, checkSize, "#FFF")}</div></>}
        </div>
      </div>
    </div>
  )
}
