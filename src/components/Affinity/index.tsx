import * as S from './style'
import TitleTechs from '../../assets/TitleTechs.svg'

import React from 'react'

export function Affinitys() {
  return (
    <S.Affinitys>
      <img className="title" src={TitleTechs} alt="" />

      <S.AffinitysBox>
        <S.Affinity>
          <img src="" alt="" />
          <h2>Pesquisa Tech</h2>
        </S.Affinity>
        <S.Affinity>
          <img src="" alt="" />
          <h2>Refatorar</h2>
        </S.Affinity>
        <S.Affinity>
          <img src="" alt="" />
          <h2>Concentração</h2>
        </S.Affinity>
      </S.AffinitysBox>
    </S.Affinitys>
  )
}
