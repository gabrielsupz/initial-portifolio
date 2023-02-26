import * as S from './style'
import TitleTechs from '../../assets/TitleTechs.svg'
import back from '../../assets/back.png'
import front from '../../assets/front-affinity.png'

import React from 'react'

export function Affinitys() {
  return (
    <S.Affinitys>
      <img className="title" src={TitleTechs} alt="" />

      <S.AffinitysBox>
        <S.Affinity>
          <h2>Front-End</h2>
          <img src={front} alt="Imagem de uma página web em desenho" />
        </S.Affinity>
        <S.Affinity>
          <h2>Back-End</h2>
          <img
            src={back}
            alt="Imagem de um banco de dados e uma interface web em desenho"
          />
        </S.Affinity>
      </S.AffinitysBox>
    </S.Affinitys>
  )
}
