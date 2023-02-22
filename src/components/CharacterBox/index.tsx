import * as S from './style'
import React from 'react'
import { Phrases } from '../Phrases'
import { Stats } from '../Stats'

export function CharacterBox() {
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
