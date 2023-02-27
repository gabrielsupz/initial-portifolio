import * as S from './style'
import skills from '../../assets/skills.svg'
import search from '../../assets/search.png'
import refactor from '../../assets/refactor.png'
import concentration from '../../assets/concentration.png'

import React from 'react'

export function Skills() {
  return (
    <S.Skills>
      <img className="title" src={skills} alt="Título Skills" />

      <S.SkillsBox>
        <S.Skill>
          <h2>Pesquisa Tech</h2>{' '}
          <img src={search} alt="Lupa em em uma página" />
        </S.Skill>
        <S.Skill>
          <h2>Refatorar</h2> <img src={refactor} alt="" />
        </S.Skill>
        <S.Skill>
          <h2>Concentração</h2> <img src={concentration} alt="" />
        </S.Skill>
      </S.SkillsBox>
    </S.Skills>
  )
}
