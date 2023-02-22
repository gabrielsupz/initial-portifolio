import * as S from './style'
import TitleTraits from '../../assets/TitleTraits.svg'

import React from 'react'

export function Traits() {
  return (
    <S.Traits>
      <img className="title" src={TitleTraits} alt="" />

      <S.TraitsBox>
        <S.Trait>
          <img src="" alt="" />
          <h2>Simpatico</h2>
        </S.Trait>
        <S.Trait>
          <img src="" alt="" />
          <h2>Curioso</h2>
        </S.Trait>
        <S.Trait>
          <img src="" alt="" />
          <h2>Heart of Dev</h2>
        </S.Trait>
        <S.Trait>
          <img src="" alt="" />
          <h2>Projetos Bons</h2>
        </S.Trait>
        <S.Trait>
          <img src="" alt="" />
          <h2>Front-End ++</h2>
        </S.Trait>
      </S.TraitsBox>
    </S.Traits>
  )
}
