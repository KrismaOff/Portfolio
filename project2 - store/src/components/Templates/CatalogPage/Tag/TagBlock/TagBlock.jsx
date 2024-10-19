import React, { useState } from 'react'
import './TagBlock.css'

import TagSimple from '../TagSimple'

import CustomSelect from '../../CustomSelect'

import svg from '../../../../../assets/image/svg'

export default function  TagBlock({ title, tags }) {

  const [actSel, setActSel] = useState()

  return (
    <div className='tab_block'>
      {title && <div className='tag_block_title'>{title} :</div>}
      <div className='tab_block_tags_cont'>
        {tags.map(obj => obj.params ? <CustomSelect state={[actSel, setActSel]} key={obj.id} {...obj} /> : <TagSimple  key={obj.id} {...obj} />)}
      </div>
      {tags[0].params && <button className='tag_block_refresh'>Сбросить {svg("refresh", 18, 18)}</button>}
    </div>
  )
}

