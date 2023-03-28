import * as S from './style'
import React from 'react'

import { Stats } from '../Stats'
import { Phrases } from '../Phrases'

export function CharacterBox() {
  console.log('No futuro terminarei está aplicação hehehe')

  return (
    <S.CharacterRoom>
      <S.CharacterName>
        <div className="profileAndInfo">
          <div className="profileContent">
            <img src="src\assets\profile.svg" alt="" />
          </div>
          <div className="info">
            {' '}
            <Stats />
            <S.BoxItems></S.BoxItems>
          </div>{' '}
        </div>
      </S.CharacterName>
      <Phrases />
    </S.CharacterRoom>
  )
}
