import * as S from './style'
import TitleTechs from '../../assets/TitleTechs.svg'

import React from 'react'

export function Affinitys() {
  return (
    <S.Affinitys>
      <img className="title" src={TitleTechs} alt="" />

      <S.AffinitysBox>
        <S.Affinity>
          <h2>Front-End</h2>
          <img src="" alt="" />
        </S.Affinity>
        <S.Affinity>
          <h2>Back-End</h2>
          <img src="" alt="" />
        </S.Affinity>
      </S.AffinitysBox>
    </S.Affinitys>
  )
}
