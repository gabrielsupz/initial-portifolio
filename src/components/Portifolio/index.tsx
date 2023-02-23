import * as S from './style'
import React from 'react'
import { CharacterBox } from '../CharacterBox'
import { Header } from '../Header'
import { Technologies } from '../Technologies'
import { Traits } from '../Traits'
import { Skills } from '../Habilidades'

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
          <div className="TraitsAndTechs">
            {' '}
            <Traits />
            <Technologies />
          </div>{' '}
          <Skills />
        </section>
      </main>
    </S.Portifolio>
  )
}
