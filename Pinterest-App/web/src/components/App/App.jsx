import React from 'react'
import './App.css';
// Components
import NAV from '../Nav/nav'
import MAIN from '../Main/Main'
import CREATEWIND from '../CreatePostWindow/CreatePostWindow'
import POSTWINDOW from '../PostWindow/PostWindow'
import ACCOUNT from '../Account/Account'
import Post from '../../DATA/Post'
import PostLikes from '../../DATA/Post-likes'
// Components
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  const [listVisible, setListVisible] = useState("")
  const search = (e) => { setListVisible(e) }

  return (
    <div>
      <Router>
        <NAV search={search} />
        <div className="empty-block"></div>
        <Routes>
          <Route path="/Pint" element={<MAIN listVisible={listVisible} tag={null} list={Post} />} />                    {/*             MAIN             */}
          <Route path="/posts/:id_post" element={<POSTWINDOW list={Post} listTwo={PostLikes} />} />                     {/*          POSTWINDOW          */}
          <Route path="/create-post" element={<CREATEWIND />} />                                                        {/*          CREATEWIND          */}
          <Route path="/account" element={<ACCOUNT />} />                                                               {/*           ACCOUNT            */}
          <Route path="*" element={<h1 className="error">ERROR404</h1>} />                                              {/*            ERROR             */}
        </Routes>
      </Router>
    </div>
  )
}

