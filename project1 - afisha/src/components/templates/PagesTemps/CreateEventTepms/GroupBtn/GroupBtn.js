import React from 'react'
import './GroupBtn.css'

export default function GroupBtn({btn0, btn1, onChange, setCount, count}) {
  return (
    <div className='groupBtn'>
        <button type="button" className={count !== 1 ? "groupBtnBtn" : "groupBtnBtnFull"} onClick={()=>setCount(prev => prev + 1)}>{btn0}</button>
        {count !== 1 && <button type="button" className='groupBtnBtn' onClick={()=>{setCount(prev => prev - 1);onChange()}}>{btn1}</button>}
    </div>
  )
}

