import * as S from './style'
import TitleTechs from '../../assets/TitleTechs.svg'

import React from 'react'

export function Skills() {
  return (
    <S.Skills>
      <img className="title" src={TitleTechs} alt="" />

      <S.SkillsBox>
        <S.Skill>
          <img src="" alt="" />
          <h2>Pesquisa Tech</h2>
        </S.Skill>
        <S.Skill>
          <img src="" alt="" />
          <h2>Refatorar</h2>
        </S.Skill>
        <S.Skill>
          <img src="" alt="" />
          <h2>Concentração</h2>
        </S.Skill>
      </S.SkillsBox>
    </S.Skills>
  )
}
