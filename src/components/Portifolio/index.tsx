import * as S from './style'
import React from 'react'
import { CharacterBox } from '../CharacterBox'
import { Header } from '../Header'
import { Technologies } from '../Technologies'
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
          <Technologies />
        </section>
      </main>
    </S.Portifolio>
  )
}
