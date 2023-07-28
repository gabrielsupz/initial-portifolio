import * as S from './style'
import React, { useEffect } from 'react'

import dragon from '../../assets/dragon.gif'
import TypeIt from 'typeit-react'

export function DragonRoom() {
  return (
    <S.DragonRoom>
      <div>
        <h2>Dragon's Room</h2>
        <img src={dragon} alt="" />
      </div>
    </S.DragonRoom>
  )
}
