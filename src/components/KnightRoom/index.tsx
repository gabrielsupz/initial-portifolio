import * as S from './style'
import React, { useEffect } from 'react'

import knight from '../../assets/cavaleiro.gif'
import TypeIt from 'typeit-react'

export function KnightRoom() {
  return (
    <S.KnightRoom>
      <h2>Knight's Room</h2>
      <img src={knight} alt="" />
    </S.KnightRoom>
  )
}
