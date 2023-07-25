import * as S from './style'
import React, { useEffect } from 'react'
import { CharacterBox } from '../CharacterBox'
import { Header } from '../Header'
import { Technologies } from '../Technologies'
import { Traits } from '../Traits'
import { Skills } from '../Skills'
import { Affinitys } from '../Affinity'
import { useCharacter } from '../../Contexts/Context'

export function Portifolio() {
  const { items } = useCharacter()

  return (
    <S.Portifolio>
      <main>
        <section id="presentation">
          <div className="header">
            <Header />
          </div>
          <div></div>
        </section>
        <section id="devInfo">
          <CharacterBox />
          <div className="TraitsAndTechs">
            {' '}
            <Traits />
            <Technologies />
          </div>{' '}
          <div className="SkillsAndAffinitys">
            {' '}
            <Skills />
            <Affinitys />
          </div>
        </section>
      </main>
    </S.Portifolio>
  )
}
