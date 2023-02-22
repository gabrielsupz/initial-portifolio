import * as S from './style'
import TitleTechs from '../../assets/TitleTechs.svg'
import React from 'react'

export function Technologies() {
  return (
    <S.Techs>
      <img
        className="title"
        src={TitleTechs}
        alt="Título Techs referente a tecnologias"
      />

      <S.TechsBox>
        <S.Tech>
          <img src="" alt="" />
          <h2>Typescript</h2>
        </S.Tech>
        <S.Tech>
          <img src="" alt="" />
          <h2>Javascript</h2>
        </S.Tech>
        <S.Tech>
          <img src="" alt="" />
          <h2>Firebase</h2>
        </S.Tech>
        <S.Tech>
          <img src="" alt="" />
          <h2>HTML</h2>
        </S.Tech>
        <S.Tech>
          <img src="" alt="" />
          <h2>CSS</h2>
        </S.Tech>
        <S.Tech>
          <img src="" alt="" />
          <h2>React Popper</h2>
        </S.Tech>
      </S.TechsBox>
    </S.Techs>
  )
}
