import React, { useState } from 'react'
import './TagSimple.css'

export default function TagSimple({name, id}) {

  const [state, setState] = useState(false)

  return (
    <div className={state ? "tag_simple actTag" : "tag_simple"}  onClick={()=>setState(prev => !prev)}  id={id}>{name}</div>
  )
}
