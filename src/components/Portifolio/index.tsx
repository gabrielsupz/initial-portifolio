import * as S from './style'
import React from 'react'
import { CharacterBox } from '../CharacterBox'
import { Header } from '../Header'
import { Projects } from '../Projetos'
import { Traits } from '../Traits'

export function Portifolio() {
  return (
    <S.Portifolio>
      <div className="header">
        <Header />
      </div>
      <main>
        {' '}
        <CharacterBox />
        <section>
          {' '}
          <Traits />
          <Projects />
        </section>
      </main>
    </S.Portifolio>
  )
}
