import React, { useRef } from 'react'
import './SearchInput.css'

import useHandleSearch from '../../../hooks/Header/useHandleSearch'
import { handleDate } from '../../../helper/HandleDate/handleDate'

export default function SearchInput() {

  const childElem = useRef(null)
  const [handleSearch, searchEvents] = useHandleSearch(childElem)

  return (
    <div className='searchCont'>
      <input className='search' list='optionSearch' type="search" placeholder='Поиск события' onChange={handleSearch} />

      <datalist id="optionSearch" ref={childElem}>
        {searchEvents && Object.keys(searchEvents).map(key =>
          <option key={key} id={key}>{searchEvents[key][0]} ({handleDate(searchEvents[key][1])})</option>
        )}
      </datalist>

    </div>
  )
}
