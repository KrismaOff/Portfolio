import React, { useContext } from 'react';
import './SignUpEventBlock.css';

import useGetPlacesListData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetPlacesListData';
import useGetUserData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetUserData';
import useHandleReqUser from '../../../../../hooks/handleActionDB/nativeDB/useHandleReqUser';
import useTimeOut from '../../../../../hooks/mainHooks/useTimeOut';

import { getExpectationDate } from '../../../../../helper/HandleDate/getExpectationDate';
import { getMonthDecl } from '../../../../../helper/HandleDate/getMonthDecl';
import { handleDate } from '../../../../../helper/HandleDate/handleDate';

import { StatusUserContext } from '../../../../App/App';

export default function SignUpEventBlock({ eventsId, date, place }) {

  const { user } = useContext(StatusUserContext)
  const { userData } = useGetUserData(user)
  const { eventPlacesData } = useGetPlacesListData(place)
  const handleReqUser = useHandleReqUser()

  const isUserPicked = userData?.USER_PICKED?.includes(eventsId);
  const isSystemDate = getExpectationDate(date, "system").state === -1;
  const [state, setState] = useTimeOut(5000, user && isSystemDate && !isUserPicked);

  const closeWind = e => {
    if (e.target.id === "closeBtn" || e.target.id === "signUpBlock") setState(false);
  }

  const signUp = () => {
    handleReqUser("addFavourites", eventsId, user);
    alert("Вы только что были записаны!");
    setState(false);
  }

  const exeptions = [
    {
      placeholder: "Как вас зовут?",
      type: "text",
      defaultValue: userData && userData.USER_NAME.join(" ")
    },
    {
      placeholder: "Ваш номер?",
      type: "tel",
      defaultValue: userData && userData.USER_PHONE
    },
    {
      placeholder: "Ваша почта?",
      type: "mail",
      defaultValue: userData && userData.USER_EMAIL
    },
  ]

  return (
    <div onClick={closeWind}>
      {state && <div className='signUpEventBlockCont' id='signUpBlock'>
        <img className='signUpEventImg' src="https://clck.ru/33kRba" alt='' />
        <div className='signUpEventBlock'>
          <div className='signUpEventTitle'>{getMonthDecl(handleDate(date))} <br /> {eventPlacesData && eventPlacesData.EVENT_PLACE_NAME}</div>
          <div className='signUpEventInpBlock'>
            {exeptions.map((val, i) => <input key={i} {...val} />)}
          </div>
          <div className='postscript'>Нажимая на кнопку "Записаться", я даю согласие на обработку моих персональных данных и принимаю</div>
          <div className='signUpGroupBtn'>
            <button onClick={signUp}>Записаться</button>
            <button id='closeBtn' onClick={closeWind}>Закрыть</button>
          </div>
          {user !== "" && <div className='postscript'>Это событие добавится к вам в избранное</div>}
        </div>
      </div>}
    </div>
  )
}
