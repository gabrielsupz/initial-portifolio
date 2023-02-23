import * as S from './style'
import TitleTraits from '../../assets/TitleTraits.svg'
import simpatico from '../../assets/simpatico.png'
import curioso from '../../assets/curioso.png'
import heart from '../../assets/heartDev.png'
import animado from '../../assets/animado.png'
import front from '../../assets/front.png'
import React from 'react'

export function Traits() {
  return (
    <S.Traits>
      <img className="title" src={TitleTraits} alt="" />

      <S.TraitsBox>
        <S.Trait>
          <img src={animado} alt="" />
          <h2>Animado</h2>
        </S.Trait>
        <S.Trait>
          <img src={simpatico} alt="" />
          <h2>Simpatico</h2>
        </S.Trait>{' '}
        <S.Trait>
          <img src={front} alt="" />
          <h2>Front-End</h2>
        </S.Trait>
        <S.Trait>
          <img src={curioso} alt="" />
          <h2>Curioso</h2>
        </S.Trait>{' '}
        <S.Trait>
          <img src={heart} alt="" />
          <h2>Heart of Dev</h2>
        </S.Trait>
      </S.TraitsBox>
    </S.Traits>
  )
}
